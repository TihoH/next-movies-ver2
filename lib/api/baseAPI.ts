

const BASE_URL = "https://api.themoviedb.org/3";


export async function getDataApi<T>(  path: string, params?: Record< string , string | number | boolean > , revalidate?: number | undefined ):Promise<T> {
  const url = new URL(`${BASE_URL}/${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(`${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...(revalidate ? { next: {revalidate: revalidate} } : {})
  });

  if (!response.ok) {
    throw new Error("Request failed");
  }


  return (await response.json()) as T
}
