import { getDataApi } from "@/lib/api/baseAPI";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");
  const appendToResponse = searchParams.get("append_to_response");


  const data = await getDataApi(
    `/person/${id}?`,
    { language: "ru" ,  append_to_response: appendToResponse || "movie_credits" },
    86400,
  );



  return NextResponse.json(data);
}