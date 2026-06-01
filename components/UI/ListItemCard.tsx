import { genre, Movie, typeMovie } from "@/types/movieTypes";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SliderListItemProps {
  listItem: Movie;
  type: typeMovie;
  genres: genre[];
  styleSlideCard?: {
    width: number;
  };
}

export default function ListItemCard({
  styleSlideCard,
  listItem,
  type,
  genres,
}: SliderListItemProps) {
  const src = listItem.poster_path
    ? `https://image.tmdb.org/t/p/w342${listItem.poster_path}`
    : "/no-avatar.png";

const currentGenres = genres.filter((elem) =>
  listItem.genre_ids.includes(elem.id),
);
  const genresItemList = genres.filter((genre) =>
    listItem.genre_ids.includes(genre.id),
  );


  return (
    <div
      className="h-full flex flex-col hover:scale-105 transition duration-200 md:h-[400px] hover:shadow-[0_0_15px_rgba(161,110,80,0.8)] shadow-md rounded-[10px] "
      style={{ width: `${styleSlideCard?.width}px` }}
    >
      {" "}
      <Link
        href={`/${type}/${currentGenres[0].name}/${listItem.id}/${listItem.title}`}
        className="relative group w-full h-[250px] md:h-[450px] overflow-hidden rounded-[10px] bg-[#222] z-40 "
      >
        <Image
          src={src}
          alt={listItem.title ?? "Poster"}
          fill
          sizes="230px"
          className="object-cover transition duration-500  "
        />
        <div className="absolute bottom-0 z-50  w-full bg-gradient-to-t  from-black/95 via-black/60 via-75% to-transparent h-[120px] p-2">
          <div className="flex justify-between items-center">
            <p className="text-white  font-semibold line-clamp-1 drop-shadow-md  ">
              {listItem.title}
            </p>
            <div className="flex  justify-end text-baseYellow">
              <span className="rounded-md bg-black/55 p-2 ">
                <span className=" ">
                  {listItem.release_date
                    ? listItem.release_date.slice(0, 4)
                    : "доделать"}
                </span>
              </span>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2  text-white/85">
            <ul className="text-gray-400 flex  gap-2 flex-wrap bg-black/55 p-2 rounded-2xl w-full">
              {genresItemList
                .map((item) => (
                  <li
                    key={item.id}
                    className="rounded-full  bg-white/10 px-2 py-[2px] text-sm "
                  >
                    {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
                  </li>
                ))
                .slice(0, 2)}
            </ul>
          </div>
        </div>{" "}
        <div className="absolute top-2 left-2 text-yellow-500 bg-black py-2 px-2 rounded-xl border border-yellow-900 flex gap-2">
          <span>
            <Star strokeWidth={0.75} className="" />
          </span>
          <span> {listItem.vote_average.toFixed(1)}</span>
        </div>
      </Link>
    </div>
  );
}
