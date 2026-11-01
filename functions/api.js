export async function onRequest(context) {
  const url = new URL(context.request.url);
  let endpoint = (url.searchParams.get("endpoint") || "trending/movie/week")
    .replace(/^\/+/, "").replace(/\/+$/, "");

  const jsonHeaders = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=300"
  };

  // مكتبة عامة: نعرض فقط العناصر التي يعلن رافعها أنها ضمن الملكية العامة.
  // تنبيه: بيانات الترخيص يضيفها الرافع ولا يضمن Internet Archive صحتها.
  if (endpoint === "free") {
    try {
      const searchUrl = new URL("https://archive.org/advancedsearch.php");
      searchUrl.searchParams.set(
        "q",
        "mediatype:movies AND licenseurl:http*publicdomain*"
      );
      ["identifier", "title", "year", "description", "licenseurl", "downloads", "subject"]
        .forEach(field => searchUrl.searchParams.append("fl[]", field));
      searchUrl.searchParams.set("rows", "30");
      searchUrl.searchParams.set("page", url.searchParams.get("page") || "1");
      searchUrl.searchParams.set("output", "json");
      searchUrl.searchParams.append("sort[]", "downloads desc");

      const searchResponse = await fetch(searchUrl.toString(), {
        headers: { "Accept": "application/json" }
      });
      if (!searchResponse.ok) throw new Error("Archive search unavailable");
      const searchData = await searchResponse.json();
      const docs = searchData?.response?.docs || [];

      const verified = await Promise.all(docs.map(async doc => {
        if (!doc.identifier) return null;
        try {
          const metaResponse = await fetch(
            `https://archive.org/metadata/${encodeURIComponent(doc.identifier)}`
          );
          if (!metaResponse.ok) return null;
          const item = await metaResponse.json();
          const license = String(item?.metadata?.licenseurl || doc.licenseurl || "").toLowerCase();
          const isPublicDomain =
            license.includes("publicdomain") ||
            license.includes("creativecommons.org/publicdomain/");
          if (!isPublicDomain) return null;

          const files = Array.isArray(item.files) ? item.files : [];
          const hasVideo = files.some(file => {
            const name = String(file.name || "").toLowerCase();
            const format = String(file.format || "").toLowerCase();
            return file.private !== true && file.private !== "true" &&
              (/\.(mp4|m4v|webm|ogv)$/.test(name) ||
               format.includes("mpeg4") ||
               format.includes("h.264") ||
               format.includes("ogg video"));
          });
          if (!hasVideo) return null;

          const title = String(item.metadata?.title || doc.title || doc.identifier);
          const description = String(item.metadata?.description || doc.description || "");
          return {
            id: `ia:${doc.identifier}`,
            identifier: doc.identifier,
            title,
            year: String(item.metadata?.year || doc.year || "").slice(0, 4),
            description: description.replace(/<[^>]*>/g, " ").slice(0, 1200),
            license,
            poster: `https://archive.org/services/img/${encodeURIComponent(doc.identifier)}`,
            embed: `https://archive.org/embed/${encodeURIComponent(doc.identifier)}`,
            source: `https://archive.org/details/${encodeURIComponent(doc.identifier)}`,
            type: "free",
            rating: "—"
          };
        } catch (_) {
          return null;
        }
      }));

      return new Response(JSON.stringify({
        success: true,
        results: verified.filter(Boolean)
      }), { status: 200, headers: jsonHeaders });
    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: "تعذر تحميل المكتبة المجانية حالياً."
      }), { status: 502, headers: jsonHeaders });
    }
  }

  const allowedPatterns = [
    /^trending\/(movie|tv)\/(day|week)$/,
    /^movie\/(popular|now_playing|top_rated|upcoming)$/,
    /^tv\/(popular|top_rated|on_the_air|airing_today)$/,
    /^discover\/(movie|tv)$/,
    /^search\/(movie|tv)$/,
    /^movie\/[0-9]+$/,
    /^tv\/[0-9]+$/,
    /^movie\/[0-9]+\/watch\/providers$/,
    /^tv\/[0-9]+\/watch\/providers$/,
    /^tv\/[0-9]+\/season\/[0-9]+$/
  ];

  if (!allowedPatterns.some(pattern => pattern.test(endpoint))) {
    return new Response(JSON.stringify({
      success: false, error: "Endpoint not allowed"
    }), { status: 400, headers: jsonHeaders });
  }

  const params = new URLSearchParams(url.searchParams);
  params.delete("endpoint");
  const apiUrl = `https://api.themoviedb.org/3/${endpoint}` +
    (params.toString() ? `?${params.toString()}` : "");

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${context.env.TMDB_TOKEN}`,
        accept: "application/json"
      }
    });
    return new Response(await response.text(), {
      status: response.status,
      headers: jsonHeaders
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false, error: "TMDB request failed"
    }), { status: 500, headers: jsonHeaders });
  }
}
