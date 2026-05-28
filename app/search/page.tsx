"use client";
import PageSearchHead from "@/components/pageSearch/PageSearchHead";
import SortSearch from "@/components/pageSearch/SortSearch";
import SearchListGroup from "@/components/UI/Search/SearchListGroup";
import SortResults from "@/components/UI/Search/SortResults";
import { useSearch } from "@/hooks/useSearch";
import { getDataApi } from "@/lib/api/baseAPI";
import { useEffect, useState } from "react";
import { genresResponse } from "../layout";

export default function page() {
  const [searchValue, setSearchValue] = useState("");
  const [typeSearch, setTypeSearch] = useState("movie");
  const [currentPage, setCurrentPage] = useState("1");
  const { isLoader, searchResponse } = useSearch(
    searchValue,
    typeSearch,
    currentPage,
  );

  const resGenres = [
    ...new Set(
      searchResponse?.results?.flatMap((item) => item.genre_ids) || [],
    ),
  ];

  async function fetchGenres() {
    const response = await fetch(
      `/api/genres?type=${typeSearch}`,
    );
    const genres = await response.json()

    console.log(genres);
  }

  useEffect(() => {
    fetchGenres();
  }, [typeSearch]);

  return (
    <div>
      <PageSearchHead
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="flex gap-5">
        <SortSearch typeSearch={typeSearch} setTypeSearch={setTypeSearch} />
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
              <SortResults />
            </div>
          </div>

          <SearchListGroup
            searchValue={searchValue}
            typeSearch={typeSearch}
            isLoader={isLoader}
            searchResponse={searchResponse}
          />
        </div>
      </div>
    </div>
  );
}
