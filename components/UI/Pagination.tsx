

import Link from "next/link";

interface PaginationProps{
    hrefPrev: any
    hrefNext: any
}

export default function Pagination({ hrefNext , hrefPrev}:PaginationProps ) {

  return (
    <div className="flex justify-center gap-2 text-white">
      <Link className=" px-5 py-3 bg-[#196A68] rounded-md hover:scale-110 transition" href={hrefPrev}>Назад</Link>
      <Link className=" px-5 py-3 bg-[#C5A961] rounded-md hover:scale-110 transition" href={hrefNext}>Вперед</Link>{" "}
    </div>
  );
}
