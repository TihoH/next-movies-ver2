import HeaderSearch from "./headerSearch";
import HeaderMenuLinks from "./headerMenuLinks";
import { getDataApi } from "@/lib/api/baseAPI";
import { genresResponse } from "@/app/layout";
import HeaderBurgerMenu from "./HeaderBurgerMenu";

export default async function Header() {
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

  return (
    <>
      <div className="hidden md:flex absolute top-0 my-container justife-beetween items-center w-full z-50">
        <HeaderMenuLinks
          ganresMovies={genresMovie.genres}
          ganresTv={genresTV.genres}
        />
        <HeaderSearch />
      </div>

      <HeaderBurgerMenu
        ganresMovies={genresMovie.genres}
        ganresTv={genresTV.genres}
      />
    </>
  );
}
