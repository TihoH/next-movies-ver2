import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const type = searchParams.get("type");

  const data = await fetch(
    `https://api.themoviedb.org/3/genre/${type}/list?language=ru`,
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
