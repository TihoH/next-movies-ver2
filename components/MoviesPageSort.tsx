import SortItem from "./UI/SortItem";
import { getDataApi } from "@/lib/api/baseAPI";
import { genresResponse } from "@/app/layout";
import { typeMovie } from "@/types/movieTypes";
import Link from "next/link";

interface MoviesPageSortProps {
  type: typeMovie;
  genreId?: string;
  urlParams: any;
}

export default async function MoviesPageSort({
  type,
  genreId,
  urlParams,
}: MoviesPageSortProps) {
  const [genresMovie, genresTV] = await Promise.all([
    getDataApi<genresResponse>(`genre/${type}/list`, { language: "ru" }, 86400),
    getDataApi<genresResponse>(`genre/${type}/list`, { language: "ru" }, 86400),
  ]);

  const years = Array.from({ length: 2026 - 1970 + 1 }, (_, i) => ({
    name: 1970 + i,
    id: 1970 + i,
  }));

  const sortRating = Array.from({ length: 9 }, (_, idx) => ({
    name: `Рейтинг - ${idx + 1}`,
    id: idx + 1,
  })).sort((a, b) => b.id - a.id);

  const sortByList = [
    { title: "Самый высокий рейтинг", name: "vote_average.desc", id: 1 },
    { title: "Плохой рейтинг", name: "vote_average.asc", id: 1 },
    { title: "Самые популярные", name: "popularity.asc", id: 1 },
    { title: "Наименее популярные", name: "popularity.desc", id: 1 },
  ];

  // console.log(currentGenres)
  // const genresList = type === "movie" ? genresMovie.genres : genresTV.genres;

  // const findGenre = genresList.find((item) => item.id === Number(genreId));

  return (
    <div className="bg-[#1B1923] p-2 md:p-6 rounded-xl md:rounded-4xl my-2 md:my-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <SortItem
          title={"Жанры"}
          dataList={type === "movie" ? genresMovie.genres : genresTV.genres}
          typeNameSort={false}
          type={type}
          queryKey="genre"
          itemKey="id"
          sortName="name"
        />
        <SortItem
          title={"Год выпуска"}
          dataList={years.sort((a, b) => b.id - a.id)}
          typeNameSort={true}
          type={type}
          queryKey={"primary_release_year"}
          itemKey={"id"}
          sortName="name"
        />
        <SortItem
          title={"Сортировать по"}
          dataList={sortByList}
          typeNameSort={true}
          type={type}
          queryKey={"sort_by"}
          itemKey={"name"}
          sortName="title"
        />
        <SortItem
          title={"Рейтинг"}
          dataList={sortRating}
          typeNameSort={true}
          type={type}
          queryKey={"voteAverage"}
          itemKey={"id"}
          sortName="name"
        />
        {/* <SortItem title={"Рейтинг TMBD"} /> */}
        {/* <SortItem title={"Жанры"} />  */}
      </div>
      <div className="mt-4 flex items-center justify-end">
        <div>
          <Link className="hover:text-white transition" href={`/catalog/${type}?page=1`}>Сбросить фильтры</Link>
        </div>
      </div>
    </div>
  );
}
