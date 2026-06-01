import { breadcrumbsType } from "@/app/movie/[type]/[genre]/[id]/[title]/page";
import { Movie, typeMovie } from "@/types/movieTypes";
import MoviePageBreadcrumbs from "./MoviePageBreadcrumbs";
import { FaStar } from "react-icons/fa6";
import MoviePageButtons from "./MoviePageButtons";

interface MoviePageDescProps {
  data: Movie;
  breadcrumbsItem: breadcrumbsType;
  type: typeMovie;
}

export default function MoviePageDesc({
  data,
  breadcrumbsItem,
  type,
}: MoviePageDescProps) {
  return (
    <div className=" z-40 relative bg-cover  min-h-[800px] bg-cover -mt-[80px] pt-[80px] ">
      <div className="flex flex-col gap-5 z-50 relative max-w-[600px]">
        <MoviePageBreadcrumbs
          breadcrumbsItem={breadcrumbsItem}
          title={data.title}
        />
        {data.release_date.slice(0, 4) === "2026" ? (
          <span className="text-baseYellow border border-baseYellow/40 rounded-xl py-2 px-6 w-fit">
            Новинка 2026
          </span>
        ) : (
          ""
        )}
        <h1 className="text-sm md:text-5xl mt-[50px] text-white uppercase font-semibold ">
          {data.title}
        </h1>
        <h2>"{data.tagline}"</h2>

        <div className="flex flex-col gap-5 ">
          <div className="flex gap-3 ">
            <div className="flex items-center gap-2">
              <FaStar color="yellow" className="mb-1" />
              <span className="text-[#c28a3c]">
                {data.vote_average.toFixed(1)} ( <span>голосов</span>:{" "}
                {data.vote_count} ){" "}
              </span>
            </div>{" "}
            |<span className="text-[#c28a3c]"> {data.runtime} мин </span>|
            <span className="text-[#c28a3c]">
              {data.release_date?.slice(0, 4)} год
            </span>
            <span></span>
          </div>
          <div>
            <span className="text-white">Описание: </span>
            {data.overview}
          </div>
          <div>
            <span className="text-white">Жанр: </span>
            {data.genres
              .map(
                (genre) =>
                  genre.name.charAt(0).toUpperCase() + genre.name.slice(1),
              )
              .join(", ")}
          </div>
        </div>
        {/* Тут модалка */}
        <MoviePageButtons type={type} id={data.id} />
      </div>
    </div>
  );
}
