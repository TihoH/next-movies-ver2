import { getDataApi } from "@/lib/api/baseAPI";
import GroupSliderList from "./UI/SliderList/groupSliderList";
import { genre, Movie, MovieResponse, typeMovie } from "@/types/movieTypes";
import { genresResponse } from "@/app/layout";
import Link from "next/link";
import { IconType } from "react-icons";

interface GroupListMoviesProps {
  title: string;
  type: typeMovie;
  isTypeTitile?: boolean;
  subTitle?: string;
  category: string;
  genres: genre[];
  groupIcon?: IconType;
  listMovies?: Movie[]
  
}

export default async function GroupListMovies({
  title,
  type,
  isTypeTitile,
  subTitle,
  category,
  genres,
  groupIcon: Icon,
  listMovies
}: GroupListMoviesProps) {


let dataList = listMovies;

if (!dataList?.length) {
  const getListMovies = await getDataApi<MovieResponse>(
    `${type}/${category}`,
    { language: "ru" },
    86400
  );

  dataList = getListMovies.results.slice(5, 15);
}

if (!dataList?.length) return null;

// console.log(dataList  )
  return (
    <div className="relative hover:shadow border px-4 border-gray-800 rounded-2xl bg-[#0A0D10] ">
      <section className="flex flex-col  md:flex-row md:items-center justify-between">
        <div>
          <h2 className="text-xl md:text-3xl  z-40 mt-10  -top-10">
            {isTypeTitile ? (
              <span>
                С фильмом <span className="text-white"> " {title} " </span>{" "}
                смотрят{" "}
              </span>
            ) : (
              <div className="text-white flex items-center gap-2 text-center md:text-start">
                <span>
                  {" "}
                  {Icon && <Icon size={'30px'} className="text-yellow-400  opacity-80" />}
                </span>
                <span>{title}</span>
              </div>
            )}
          </h2>

          <p className="md:text-xl mt-2">{subTitle}</p>
        </div>
        <Link
          className="text-baseYellow transition hover:text-white md:text-xl mt-2"
          href={"/"}
        >
          Смотреть все
        </Link>
      </section>

      <GroupSliderList sliderDataList={dataList} type={type} genres={genres} />
    </div>
  );
}
