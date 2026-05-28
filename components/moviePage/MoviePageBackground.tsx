import { Movie } from "@/types/movieTypes";
import Image from "next/image";

interface MoviePageBackgroundProps {
  data: Movie;
}

export default function MoviePageBackground({
  data,
}: MoviePageBackgroundProps) {
  const bgImage = `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`;
  return (
    <div className="absolute inset-0 z-0 max-h-[800px] h-full">
      <Image
        src={bgImage}
        alt={data.title}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: ` linear-gradient(to right,rgba(15,15,15,1) 0%,rgba(15,15,15,0.8) 15%,rgba(15,15,15,0.4) 35%,transparent 50%,rgba(15,15,15,0.4) 65%,rgba(15,15,15,0.8) 85%,rgba(15,15,15,1) 100%),linear-gradient(to top,rgba(15,15,15,1) 0%,rgba(15,15,15,0.7) 25%,transparent 65%)`,
        }}
      ></div>
    </div>
  );
}
