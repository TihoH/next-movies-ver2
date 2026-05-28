import { typeButtons } from "@/data/data";
import { Check } from "lucide-react";
interface SortSearchProps {
  typeSearch: string;
  setTypeSearch: (value: string) => void;
}

export default function SortSearch({
  typeSearch,
  setTypeSearch,
}: SortSearchProps) {

  return (
    <div className="flex-1 border border-gray-800 p-4 rounded-lg h-[700px]">
      <h3 className="text-2xl text-white border-b border-gray-800 pb-2">Фильтры</h3>

      <div className="mt-4 rounded-xl w-full  flex flex-col gap-2">
        {typeButtons.map((btn) => (
          <div className="flex items-center "           key={btn.id}>
            <div className="w-[35px] h-[35px] border border-gray-800 rounded-lg flex items-center justify-center">
              {typeSearch === btn.type ? <span><Check size={30} className="text-green-500"/></span> : ''}
            </div>
            <button
              className={` ${typeSearch === btn.type ? "text-green-400" : "text-white"} px-5 py-3 gap-2  flex items-center  rounded-xl  transition cursor-pointer hover:text-gray-400 hover:translate-x-2 duration-200`}
              onClick={() => setTypeSearch(btn.type)}
            >
              <span>{btn.title}</span>
            </button>
          </div>
        ))}
      </div>
      <div>
        <h4 className="text-2xl text-white border-b border-gray-800 pb-2 mt-4">Жанры</h4>
      </div>
    </div>
  );
}
