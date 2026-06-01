import React from "react";
import SearchListItemSkeleton from "../Skeleton/SearchListItemSkeleton";
import SearchListItem from "@/components/Search/SearchListItem";
import Link from "next/link";
import { Movie } from "@/types/movieTypes";

interface SearchListGroupProps {
  searchResponse: Movie[] | null;
  searchValue: string;
  isLoader: boolean;
  typeSearch: string;
  gridCols?: number
}

export default function SearchListGroup({
  searchResponse,
  searchValue,
  isLoader,
  typeSearch,
  gridCols = 1
}: SearchListGroupProps) {

  console.log('емае ' + searchResponse)
  return (
    <div>
      {/* Отрисовка */}
      {searchValue.length && isLoader && !searchResponse ? (
        <SearchListItemSkeleton count={6} />
      ) : null}

      {searchValue.length && !isLoader ? (
        <ul className="grid gap-4 p-4  "    style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
>
          {searchResponse?.map((listItem) => (
            <li
              key={listItem.id}
              className="hover:bg-gray-900 rounded-xl transition"
            >
              <Link
                href={`/${typeSearch}/${listItem.genre_ids[0]}/${listItem.id}/${listItem.title}`}
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
