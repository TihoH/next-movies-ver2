"use client";
import { useState } from "react";
import { LoaderCircle, X} from "lucide-react";
import Link from "next/link";
import { useSearch } from "@/hooks/useSearch";
import { typeButtons } from "@/data/data";
import SearchListGroup from "../UI/Search/SearchListGroup";

interface FastSearchProps {
  setActiveSearch: (value: boolean) => void;
}

export default function FastSearch({ setActiveSearch  }: FastSearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const [typeSearch, setTypeSearch] = useState("movie");
  const [currentPage, setCurrentPage] = useState("1");
  const { isLoader, searchResponse } = useSearch(
    searchValue,
    typeSearch,
    currentPage,
  );

  return (
    <div className="bg-baseBG w-[900px] absolute  top-20 bottom-1 right-[420px] border border-gray-700  rounded-xl   overflow-y-scroll  custom-scroll  ">
      <div className="p-4 flex flex-col gap-4 items-center">
        <div className="relative w-full">
          {isLoader && searchValue ? (
            <div className="absolute right-2 top-6">
              <LoaderCircle
                className="animate-spin"
                color="#50c58e"
                size={40}
              />
            </div>
          ) : (
            ""
          )}
          <input
            type="text"
            className=" w-full bg-gray-900 h-14 rounded-lg pl-2 mt-4  placeholder:text-white "
            value={searchValue}
            placeholder="Поиск фильмов , сериалов...."
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="border border-gray-900 bg-gray-950 rounded-xl w-full p-2 flex gap-4">
          {typeButtons.map((btn) => (
            <button
              key={btn.id}
              className={` ${typeSearch === btn.type ? "bg-baseYellow" : "bg-gray-900"} px-5 py-3 gap-2 text-white flex items-center  rounded-xl hover:bg-gray-800 transition cursor-pointer`}
              onClick={() => setTypeSearch(btn.type)}
            >
              <span>{btn.icon}</span>
              <span>{btn.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="text-xl flex justify-between items-center">
          <p>
            {" "}
            {searchValue
              ? `Результат поиска: ${searchValue} `
              : "Нужно ввести поисковый запрос"}{" "}
          </p>
          <Link
            className="text-baseYellow text-base"
            href={"/search"}
            onClick={() => setActiveSearch(false)}
          >
            Расширенный поиск
          </Link>
        </div>
        <span className="text-red-800">{`${searchValue && !searchResponse?.results.length && !isLoader ? "  Нет совпадений  " : ""}`}</span>
      </div>

      <SearchListGroup
        searchValue={searchValue}
        typeSearch={typeSearch}
        isLoader={isLoader}
        searchResponse={searchResponse?.results ?? null}
        setActiveSearch={setActiveSearch} 
        closeModal={false}     
         />

{/* 
                       <button
                   onClick={() => closeModal(false)}
                   aria-label="закрыть"
                   className="
             absolute top-6 cursor-pointer right-4 z-50
             flex items-center justify-center
             w-12 h-12
             border border-gray-700
             bg-black/30
             backdrop-blur-sm
             text-gray-300
             transition-all duration-300
             hover:border-yellow-500
             hover:text-yellow-500
             hover:rotate-90
             hover:scale-110
           "
                 >
                   <X size={24} />
                 </button> */}
    </div>
  );
}
