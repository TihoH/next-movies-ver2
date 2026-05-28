import { genre } from "@/types/movieTypes";
import Image from "next/image";

interface SwiperItemProps {
  sliderItem: any;
  priority: boolean;
  idx: number;
  activeIndex: number;
  genres: genre[];
}

export default function SwiperItem({
  sliderItem,
  priority,
  idx,
  activeIndex,
  genres,
}: SwiperItemProps) {
  const img = sliderItem.backdrop_path || sliderItem.poster_path;
  // console.log(sliderItem)

  const genresMovie = genres
    ?.filter((item) => sliderItem.genre_ids.includes(item.id))
    .map((item) => item.name)
    .join(" , ");

  return (
    <div
      className={` relative text-white w-full overflow-hidden rounded-xl bg-black/55 `}
    >
      <div className="relative z-40 h-[300px] md:h-[720px] w-full  rounded-xl overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${img}`}
          alt={sliderItem.title || sliderItem.name || "Banner"}
          fill
          className={` object-cover z-40 `}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div
          className={` ${idx != activeIndex ? "bg-black/0" : "bg-black/45 "} absolute inset-0 z-50 w-full duration-700`}
        />
      </div>

      <div
        className={` ${idx === activeIndex ? "opacity-100  " : "opacity-0"} absolute z-50 flex  flex-col transition duration-700 left-[430px] bottom-20 max-w-[700px] `}
      >
        <span className="text-baseYellow border border-baseYellow py-2 px-6 w-fit mb-2 rounded-2xl font-extrabold">
          Премьера
        </span>
        <div className="flex flex-col gap-4">
          <span className="text-5xl w-full  ">{sliderItem.title}</span>
          <div className="flex gap-3 text-gray-300">
            <span>{sliderItem.release_date.slice(0, 4)}</span> /
            <span>{genresMovie}</span> /
            <span>{sliderItem.vote_average.toFixed(1)}</span>
          </div>
          <span>{sliderItem.overview}</span>
          <div className="flex gap-5">
            <button className="py-5 px-15  rounded-xl bg-[#ca9b24] hover:bg-[#5c4816] transition cursor-pointer ">
              Смотреть
            </button>
            <button className="py-5 px-10 rounded-xl border border-[#ca9b24] hover:bg-[#5c4816] cursor-pointer ">
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
    absolute z-50 flex flex-col transition-opacity duration-700
    left-10 bottom-10 text-gray-400
    ${idx != activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      >
        <span className="text-5xl w-full text-white ">{sliderItem.title}</span>
        <div className="flex gap-4 my-3">
          <span>{genresMovie}</span> /
          <span>{sliderItem.vote_average.toFixed(1)}</span>
        </div>
        <button className="py-5 px-15  rounded-xl hover:text-white hover:bg-[#5c4816] transition cursor-pointer border border-[#ca9b24] max-w-[200px]">
          Смотреть
        </button>
      </div>
    </div>
  );
}
