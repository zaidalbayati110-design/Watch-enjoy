export async function onRequest(context) {
  const url = new URL(context.request.url);

  let endpoint =
    url.searchParams.get("endpoint") ||
    "trending/movie/week";

  endpoint = endpoint.replace(/^\/+/, "").replace(/\/+$/, "");

  /*
    المسارات المسموحة
    ندعم:
    - الأفلام
    - المسلسلات
    - المواسم والحلقات
    - مصادر المشاهدة
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

  const allowed = allowedPatterns.some(
    pattern => pattern.test(endpoint)
  );

  if (!allowed) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Endpoint not allowed"
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }

  const params = new URLSearchParams(url.searchParams);
  params.delete("endpoint");

  /*
    TMDB API
  */

  const apiUrl =
    `https://api.themoviedb.org/3/${endpoint}` +
    (params.toString() ? `?${params.toString()}` : "");

  try {

    const response = await fetch(apiUrl, {
      headers: {
        Authorization:
          `Bearer ${context.env.TMDB_TOKEN}`,

        accept: "application/json"
      }
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,

      headers: {
        "Content-Type":
          "application/json; charset=utf-8",

        "Access-Control-Allow-Origin": "*",

        "Cache-Control":
          "public, max-age=300"
      }
    });

  } catch (error) {

    return new Response(
      JSON.stringify({
        success: false,
        error: "TMDB request failed"
      }),
      {
        status: 500,

        headers: {
          "Content-Type":
            "application/json; charset=utf-8",

          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
}
