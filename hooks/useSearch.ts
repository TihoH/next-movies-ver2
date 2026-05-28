import { Movie, MovieResponse } from "@/types/movieTypes";
import { useEffect, useState } from "react";



export  function useSearch(searchValue:string , typeSearch:string , currentPage:string) {
  const [isLoader, setIsLoader] = useState(true);
  const [searchResponse, setSearchResponse] = useState<MovieResponse | null>(null);

  async function getSearchData(searchValue: string) {
    const apiSearch = await fetch(
      `/api/search?type=${typeSearch}&query=${searchValue}&language=ru&page=${currentPage}`,
    );
    const data = await apiSearch.json();
    console.log(data)
    setSearchResponse(data);
       setIsLoader(false);
    console.log(searchResponse);
  }

  useEffect(() => {
    setSearchResponse(null)
    setIsLoader(true);
    const debounceTimeout = setTimeout(() => {
      searchValue && getSearchData(searchValue);
    }, 1500);
    return () => clearTimeout(debounceTimeout);
  }, [searchValue, typeSearch , currentPage]);


  return {isLoader , searchResponse }
}
