"use client";

import { updateQuery } from "@/lib/updateQueryParams";
import { typeMovie } from "@/types/movieTypes";
import { CornerRightDown } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface SortItemProps {
  title: string;
  dataList?: any[];
  typeNameSort?: boolean;
  type: typeMovie;
  queryKey: string;
  itemKey: string;
sortName:string
}

export default function SortItem({
  title,
  dataList,
  typeNameSort,
  type,
  queryKey,
  itemKey,
  sortName
}: SortItemProps) {
  const [sortChangeTitle, setSortChangeTitle] = useState("");

  const urlParams = useSearchParams(); // так я могу только читать 

  const sortNameLink = (item: any) => {
    return updateQuery(`/catalog/${type}`, urlParams, {
      [queryKey]: String(item[itemKey]),
      page: "1",
    });
  };

  return (
    <div className=" relative group bg-[#282534] h-14 md:h-[70px]  rounded-2xl flex items-center flex-col justify-center cursor-pointer hover:bg-[#4a4466] transition duration-300 px-2 md:px-4">
      <div className="w-full transition-all duration-300">
        <div className="flex justify-between text-[#BEA169]">
          <span>{sortChangeTitle ? sortChangeTitle : title}</span>
          <span className="group-hover:rotate-180 transition group-hover:scale-75">
            <CornerRightDown />
          </span>
        </div>
      </div>

      <div
        className={`absolute z-50 top-14 pointer-events-none  w-full  opacity-0 transition duration-200  max-h-[500px] rounded-b-xl  overflow-y-scroll custom-scroll   group-hover:opacity-100 group-hover:pointer-events-auto `}
      >
        {dataList?.map((item, idx) => (
          <Link
            key={idx}
            className="bg-[#4a4466] py-2 px-4 hover:text-gray-500 flex"
            href={sortNameLink(item)}
            onClick={() => setSortChangeTitle(item[sortName])}
          >
            {!typeNameSort
              ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
              : item[sortName]}
          </Link>
        ))}
      </div>
    </div>
  );
}
