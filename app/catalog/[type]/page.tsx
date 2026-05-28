import GroupMoivesPage from "@/components/GroupMoivesPage";
import { getDataApi } from "@/lib/api/baseAPI";
import type { Metadata } from "next";
import Pagination from "@/components/UI/Pagination";
import MoviesPageSort from "@/components/MoviesPageSort";
import PageMoviesBreadCrumbs from "@/components/moviesPage/PageMoviesBreadCrumbs";
import { MovieResponse, typeMovie } from "@/types/movieTypes";
import { updateQuery } from "@/lib/updateQueryParams";
import { genresResponse } from "@/app/layout";

type MoviesPageProps = {
  searchParams: Promise<{
    page?: string;
    genre?: string;
    primary_release_year?: string;
    sort_by?: string;
    voteAverage?: string;
    category: string ,
    type: string
  }>;
  params: Promise<{
    type: typeMovie;
  }>;
};

export async function generateMetadata({
  searchParams,
}: MoviesPageProps): Promise<Metadata> {
  const { type } = await searchParams;

  const title = type === "tv" ? "Сериалы" : "Фильмы";

  return {
    title: `Смотреть в бесплатно ${title} ` ,
    description: `Каталог: ${title}`,
  };
}

export default async function MoviesGenres({
  params,
  searchParams,
}: MoviesPageProps) {
  const { type } = await params;
  const {
    page = "1",
    genre,
    primary_release_year,
    sort_by,
    voteAverage,
    category
  } = await searchParams;
  const urlParams = await searchParams;
  const currentPage = Number(page);


  const dataListFilms = category ? await getDataApi<MovieResponse>(
      `${type}/${category}`,
      { language: "ru" },
      86400
    ): await getDataApi<MovieResponse>(
    `discover/${type}?`,
    {
      language: "ru",
      page: page,
      ...(genre && { with_genres: genre }),
      ...(primary_release_year && {
        primary_release_year: primary_release_year,
      }),
      ...(sort_by && { sort_by: sort_by, "vote_count.gte": 100 }),
      ...(voteAverage && {
        "vote_average.gte": voteAverage,
        "vote_count.gte": 50,
      }),
    },
    86400,
  );

  const [genresMovie, genresTV] = await Promise.all([
    getDataApi<genresResponse>(
      "genre/movie/list",
      {
        language: "ru",
      },
      86400,
    ),
    getDataApi<genresResponse>(
      "genre/tv/list",
      {
        language: "ru",
      },
      86400,
    ),
  ]);

  const hrefNext = updateQuery(`/catalog/${type}`, urlParams, {
    page: String(currentPage + 1),
  });

  const hrefPrev = updateQuery(`/catalog/${type}`, urlParams, {
    page: String(Math.max(1, currentPage - 1)),
  });

  return (
    <div>
      <PageMoviesBreadCrumbs
        type={type}
        searchParams={searchParams}
        genres={type === "movie" ? genresMovie.genres : genresTV.genres}
      />
      <MoviesPageSort type={type} urlParams={urlParams} />
      <GroupMoivesPage
        dataList={dataListFilms.results}
        type={type}
        genres={type === "movie" ? genresMovie.genres : genresTV.genres}
      />
      <Pagination hrefNext={hrefNext} hrefPrev={hrefPrev} />
    </div>
  );
}
