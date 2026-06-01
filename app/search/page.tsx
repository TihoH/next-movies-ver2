"use client";
import PageSearchHead from "@/components/pageSearch/PageSearchHead";
import SortSearch from "@/components/pageSearch/SortSearch";
import SearchListGroup from "@/components/UI/Search/SearchListGroup";
import SortResults from "@/components/UI/Search/SortResults";
import { useSearch } from "@/hooks/useSearch";
import { Movie } from "@/types/movieTypes";
import { useEffect, useState } from "react";

export default function page() {
  const [searchValue, setSearchValue] = useState("");
  const [typeSearch, setTypeSearch] = useState("movie");
  const [currentGenre, setCurrentGenre] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState("1");
  const [genres, setGenres] = useState(null);
  const [inpRangeYear, setInpRangeYear] = useState<number | null>(null);
  const [gridCols, setGridCols] = useState(1);
  const { isLoader, searchResponse } = useSearch(
    searchValue,
    typeSearch,
    currentPage,
    inpRangeYear,
  );

  async function fetchGenres() {
    const response = await fetch(`/api/genres?type=${typeSearch}`);
    const genres = await response.json();
    setGenres(genres.genres);
    console.log(genres);
  }

  const sortResponseSearch = (): Movie[] | null => {
    if (!searchResponse?.results) return null;

    if (!currentGenre) return searchResponse.results;

    return searchResponse.results.filter((elem) =>
      elem.genre_ids.includes(currentGenre),
    );
  };
  useEffect(() => {
    fetchGenres();
  }, [typeSearch, currentGenre]);

  return (
    <div>
      <PageSearchHead
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="flex gap-5">
        <SortSearch
          typeSearch={typeSearch}
          setTypeSearch={setTypeSearch}
          genres={genres}
          setCurrentGenre={setCurrentGenre}
          currentGenre={currentGenre}
          inpRangeYear={inpRangeYear}
          setInpRangeYear={setInpRangeYear}
        />
        <div className="flex-4">
          <div className="flex justify-between items-center">
            <div className="mt-4">
              <h3 className="text-2xl text-white">Результат поиска</h3>
              {searchResponse?.results ? (
                <p>Найдено: {searchResponse?.total_results} совпадений</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <SortResults gridCols={gridCols} setGridCols={setGridCols} />
            </div>
          </div>

          <SearchListGroup
            searchValue={searchValue}
            typeSearch={typeSearch}
            isLoader={isLoader}
            searchResponse={sortResponseSearch()}
            gridCols={gridCols}
          />
        </div>
      </div>
    </div>
  );
}
