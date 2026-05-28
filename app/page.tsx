import BannerListGenres from "@/components/BannerListGenres";
import GroupListMovies from "@/components/groupListMovies";
import MainDescription from "@/components/MainDescription";
import SwiperBanner from "@/components/Slider/swiperBanner";
import { getDataApi } from "@/lib/api/baseAPI";
import { MovieResponse } from "@/types/movieTypes";
import { Metadata } from "next";
import { genresResponse } from "./layout";

import {
  HiOutlineClock,
  HiOutlineStar,
  HiOutlineFire,
  HiOutlineEye,
} from "react-icons/hi2";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "КиноHOME — фильмы и сериалы онлайн",
  description:
    "КиноHOME — каталог фильмов и сериалов. Новинки кино, популярные фильмы, рейтинги, актеры и подборки для просмотра.",
};

export default async function Home() {
  const dataBannerUpComming = await getDataApi<MovieResponse>(
    "movie/upcoming",
    { language: "ru" },
    86400,
  );
  const dataListBanner = dataBannerUpComming.results.slice(0, 5);
  const genres = await getDataApi<genresResponse>(
    `genre/movie/list`,
    {
      language: "ru",
    },
    86400,
  );

  return (
    <div className="flex flex-col gap-12">
      <SwiperBanner dataList={dataListBanner} genres={genres.genres} />{" "}
      <BannerListGenres />
      <div>
        <h1 className="text-xl">КиноHOME</h1>

        <p>
          КиноHOME — каталог фильмов и сериалов. Здесь вы найдете новинки кино,
          популярные фильмы, рейтинги, жанры и информацию об актёрах, чтобы
          быстро выбрать что посмотреть.
        </p>
      </div>
      <Suspense fallback={<div>загрузка чегото</div>}>
        <GroupListMovies
          title={"Скоро на экранах"}
          subTitle="Самые ожидаемые премьеры, которые скоро появятся в кино и онлайн."
          type={"movie"}
          category={"upcoming"}
          genres={genres.genres}
          groupIcon={HiOutlineClock}
        />
      </Suspense>
      <Suspense fallback={<div>загрузка чегото</div>}>
        <GroupListMovies
          title={"Фильмы с самым высоким рейтингом"}
          subTitle="Лучшие фильмы и сериалы по оценкам зрителей и критиков."
          type={"movie"}
          category={"top_rated"}
          genres={genres.genres}
          groupIcon={HiOutlineStar}
        />
      </Suspense>
      <MainDescription />
      <Suspense fallback={<div>загрузка чегото</div>}>
        <GroupListMovies
          title={"Самые популярные"}
          subTitle="Самые популярные фильмы и сериалы, которые сейчас смотрят пользователи."
          type={"movie"}
          category={"popular"}
          genres={genres.genres}
          groupIcon={HiOutlineFire}
        />
      </Suspense>
      <Suspense fallback={<div>загрузка чегото</div>}>
        <GroupListMovies
          title={"Сейчас смотрят"}
          subTitle="Популярные фильмы и сериалы, которые сейчас активно смотрят пользователи."
          type={"movie"}
          category={"now_playing"}
          genres={genres.genres}
          groupIcon={HiOutlineEye}
        />
      </Suspense>
    </div>
  );
}
