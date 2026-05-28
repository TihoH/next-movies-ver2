"use client";
import { typeMovie } from "@/types/movieTypes";
import React, { useEffect, useState } from "react";

interface MoviePageVideoProps {
  id: number;
  type: typeMovie;
}

interface VideoType {
  key: string;
  site: string;
  type: string;
  name: string;
}

export default function MoviePageVideo({ id, type }: MoviePageVideoProps) {
    const [video , setVideo] = useState<VideoType | null>(null)
  async function getVideo(type: typeMovie, id: number) {
    const res = await fetch(`/api/trailer?type=${type}&id=${id}`);
    const data = await res.json();
    setVideo(data)
    console.log(data);
  }

  useEffect(() => {
    getVideo(type, id);
  }, [type, id]);

  return <div>
    <iframe
      src={`https://www.youtube.com/embed/${video?.key}`}
      className="w-full h-[500px]"
      allowFullScreen
    />
  </div>;
}
