export async function onRequest(context) {
  const url = new URL(context.request.url);

  const endpoint = (
    url.searchParams.get("endpoint") || "trending/movie/week"
  ).replace(/^\/+|\/+$/g, "");

  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=300"
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        ...headers,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
      status,
      headers
    });
  }

  /*
   * المكتبة المجانية:
   * نبحث عن أعمال مصنفة في Internet Archive
   * بترخيص الملكية العامة المعلن.
   */
  if (endpoint === "free") {
    try {
      const query =
        'mediatype:movies AND (licenseurl:"http://creativecommons.org/licenses/publicdomain/" OR licenseurl:"http://creativecommons.org/publicdomain/zero/1.0/")';

      const params = new URLSearchParams();
      params.set("q", query);
      params.append("fl[]", "identifier");
      params.append("fl[]", "title");
      params.append("fl[]", "year");
      params.append("fl[]", "description");
      params.append("fl[]", "licenseurl");
      params.append("fl[]", "rights");
      params.set("rows", "40");
      params.set("page", "1");
      params.set("output", "json");

      const response = await fetch(
        "https://archive.org/advancedsearch.php?" + params.toString(),
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );

      if (!response.ok) {
        return json({
          success: false,
          results: [],
          error: "Archive search failed"
        }, 502);
      }

      const data = await response.json();
      const docs = data.response?.docs || [];

      const results = docs
        .filter(item => item.identifier && item.title)
        .map(item => {
          const identifier = String(item.identifier);

          return {
            id: identifier,
            type: "free",
            title: String(item.title),
            year: String(item.year || ""),
            description: Array.isArray(item.description)
              ? item.description.join(" ")
              : String(item.description || "لا يوجد وصف متوفر."),
            poster:
              "https://archive.org/services/img/" +
              encodeURIComponent(identifier),
            backdrop:
              "https://archive.org/services/img/" +
              encodeURIComponent(identifier),
            rating: "—",
            source:
              "https://archive.org/details/" +
              encodeURIComponent(identifier),
            embed:
              "https://archive.org/embed/" +
              encodeURIComponent(identifier)
          };
        });

      return json({
        success: true,
        results
      });

    } catch (error) {
      return json({
        success: false,
        results: [],
        error: "Free content service unavailable"
      }, 500);
    }
  }

  /*
   * المسارات المسموحة في TMDB
   */
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

  const allowed = allowedPatterns.some(pattern =>
    pattern.test(endpoint)
  );

  if (!allowed) {
    return json({
      success: false,
      error: "Endpoint not allowed"
    }, 400);
  }

  /*
   * التأكد من وجود مفتاح TMDB
   */
  const token = context.env.TMDB_TOKEN;

  if (!token) {
    return json({
      success: false,
      error: "TMDB_TOKEN is missing"
    }, 500);
  }

  /*
   * إرسال طلب TMDB
   */
  try {
    const params = new URLSearchParams(url.searchParams);
    params.delete("endpoint");

    const apiUrl =
      "https://api.themoviedb.org/3/" +
      endpoint +
      (params.toString() ? "?" + params.toString() : "");

    const response = await fetch(apiUrl, {
      headers: {
        "Authorization": "Bearer " + token,
        "Accept": "application/json"
      }
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers
    });

  } catch (error) {
    return json({
      success: false,
      error: "TMDB request failed"
    }, 500);
  }
}
