export async function onRequest(context) {
  const url = new URL(context.request.url);

  const endpoint =
    url.searchParams.get("endpoint") || "trending/movie/week";

  const allowed = [
    "trending/movie/week",
    "trending/tv/week",
    "movie/popular",
    "tv/popular",
    "movie/now_playing",
    "movie/top_rated",
    "tv/top_rated",
    "discover/movie",
    "discover/tv",
    "search/movie",
    "search/tv"
  ];

  const cleanEndpoint = endpoint.replace(/^\/+/, "");

  if (!allowed.includes(cleanEndpoint)) {
    return new Response(
      JSON.stringify({ error: "Endpoint not allowed" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  const params = new URLSearchParams(url.searchParams);
  params.delete("endpoint");

  const apiUrl =
    `https://api.themoviedb.org/3/${cleanEndpoint}?${params.toString()}`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${context.env.TMDB_TOKEN}`,
      accept: "application/json"
    }
  });

  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
