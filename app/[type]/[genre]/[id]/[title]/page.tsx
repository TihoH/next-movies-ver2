import { genresResponse } from "@/app/layout";
import GroupListMovies from "@/components/groupListMovies";
import MoviePageBackground from "@/components/moviePage/MoviePageBackground";
import MoviePageDesc from "@/components/moviePage/MoviePageDesc";
import SuspensePageFilmActors from "@/components/Suspens/SuspensePageFilmActors";
import SuspensePageFilmRecomendation from "@/components/Suspens/SuspensePageFilmRecomendation";
import SuspensReviews from "@/components/Suspens/SuspensReviews";
import { getDataApi } from "@/lib/api/baseAPI";
import { Movie } from "@/types/movieTypes";
import { Metadata } from "next";
import { Suspense } from "react";

export type breadcrumbsType = {
  title: string;
  genre: string;
  id: string;
  type: "movie" | "tv";
};

type PageProps = {
  params: Promise<breadcrumbsType>;
};

//  generateMetadata - для статических страниц (Promise<Metadata>)

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id , type } = await params;

  const data = await getDataApi<Movie>(
    `${type}/${id}`,
    { language: "ru" },
    86400,
  );

  return {
    title: `Смотреть онлайн ${data.title}`,
    description: "Смотрите онлайн в хорошем качестве",
  };
}

export default async function PageMovieId({ params }: PageProps) {
  const { id, type, title, genre } = await params;

  const breadcrumbsItem = { id, type, title, genre };

  const [data, genreList] = await Promise.all([
    getDataApi<Movie>(`${type}/${id}`, { language: "ru" }, 86400),
    getDataApi<genresResponse>(`genre/${type}/list`, { language: "ru" }, 86400),
  ]);


  return (
    <div className="relative">
      <MoviePageDesc
        data={data}
        breadcrumbsItem={breadcrumbsItem}
        type={type}   
      />
      <GroupListMovies
        title={data.title}
        type={`${type}`}
        isTypeTitile={true}
        category={"popular"}
        genres={genreList.genres}
      />

      <Suspense fallback={<div>Загрузка актеров...</div>}>
        <SuspensePageFilmActors type={type} id={id} />
      </Suspense>

      <Suspense fallback={<div>Загрузка рекомендаций...</div>}>
        <SuspensePageFilmRecomendation
          title={"Рекомендации"}
          type={type}
          id={id} genres={genreList.genres}        />
      </Suspense>

      <Suspense fallback={<div>Загрузка отзывов...</div>}>
        <SuspensReviews data={data} type={type} id={id}></SuspensReviews>
      </Suspense>

      {/* ФОН ЗАТЕМНЕНИЕ */}
      <MoviePageBackground data={data} />

    </div>
  );
}
