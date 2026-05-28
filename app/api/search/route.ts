import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("query");
  const language = searchParams.get("language");
  const type = searchParams.get("type");
  const page = searchParams.get("page");

  const params = new URLSearchParams({
    query: query || "",
    language: language || "ru",
    page: page || "1",
  });
  
  const data = await fetch(
    `https://api.themoviedb.org/3/search/${type}?${params}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  const result = await data.json();

  return NextResponse.json(result);
}
