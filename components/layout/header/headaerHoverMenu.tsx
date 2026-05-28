
import { genre } from "@/types/movieTypes";
import Link from "next/link";

interface HeadaerHoverMenuProps {
  dataList: genre[];
isActiveHoverId: number | null
}

export default function HeadaerHoverMenu({
  dataList,
  isActiveHoverId
}: HeadaerHoverMenuProps) {



  const type = isActiveHoverId === 2 ? 'movie' : 'tv'
  return (
    <div
      className="h-[400px] z-50 bg-[#0f0f0f] shadow-gray-700 shadow flex p-4 "
    >
      <ul className=" flex flex-col flex-wrap gap-4  w-auto md:max-w-[600px] ">
        {dataList?.map((genre) => (
          <li className="hover:text-white" key={genre.id}>
            <Link href={`/catalog/${type}?/${genre.id}&page=1`} className="hover:ml-2 transition-all hover:scale-110 duration-200 inline-block">
              {genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="py-2 border-l pl-5">fqfqf</div>
    </div>
  );
}
