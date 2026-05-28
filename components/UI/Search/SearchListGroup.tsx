import React from "react";
import SearchListItemSkeleton from "../Skeleton/SearchListItemSkeleton";
import SearchListItem from "@/components/Search/SearchListItem";
import Link from "next/link";
import { MovieResponse } from "@/types/movieTypes";

interface SearchListGroupProps {
  searchResponse: MovieResponse | null;
  searchValue: string;
  isLoader: boolean;
  typeSearch: string;
  title?: string;
}

export default function SearchListGroup({
  searchResponse,
  searchValue,
  isLoader,
  typeSearch,
  title,
}: SearchListGroupProps) {
  return (
    <div>
      {/* Отрисовка */}
      {searchValue.length && isLoader && !searchResponse?.results ? (
        <SearchListItemSkeleton count={6} />
      ) : null}

      {searchValue.length && !isLoader ? (
        <ul className="grid grid-cols-1 gap-4 p-4 ">
          {searchResponse?.results?.map((listItem) => (
            <li
              key={listItem.id}
              className="hover:bg-gray-900 rounded-xl transition"
            >
              <Link
                href={`/movie/${typeSearch}/${listItem.genre_ids[0]}/${listItem.id}/${listItem.title}`}
              >
                <SearchListItem listItem={listItem} isLoader={isLoader} />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
