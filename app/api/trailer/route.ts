import { NextResponse } from "next/server";
import { getDataApi } from "@/lib/api/baseAPI";


type VideoItem = {
  site: string;
  type: string;
  key: string;
  name: string;
};

type VideoResponse = {
  results: VideoItem[];
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const type = searchParams.get("type");
  const id = searchParams.get("id");

  const data = await getDataApi<VideoResponse>(
    `${type}/${id}/videos`,
    { language: "ru" },
    86400,
  );

  const trailer = data.results?.find(
    (item) => item.site === "YouTube" && item.type === "Trailer"
  );

  return NextResponse.json(trailer);
}