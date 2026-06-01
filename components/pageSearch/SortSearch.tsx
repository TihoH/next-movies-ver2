import { typeButtons } from "@/data/data";
import { genre } from "@/types/movieTypes";
import { Check } from "lucide-react";
interface SortSearchProps {
  typeSearch: string;
  setTypeSearch: (value: string) => void;
  genres: genre[] | null;
  setCurrentGenre: (value: number | null) => void;
  currentGenre: number | null;
  inpRangeYear: number | null;
  setInpRangeYear: (e: number) => void;
}

export default function SortSearch({
  typeSearch,
  setTypeSearch,
  genres,
  setCurrentGenre,
  currentGenre,
  inpRangeYear,
  setInpRangeYear,
}: SortSearchProps) {
  return (
    <div className="flex-1 border border-gray-800 p-4 rounded-lg ">
      <h3 className="text-2xl text-white border-b border-gray-800 pb-2">
        Фильтры
      </h3>

      <div className="mt-4 rounded-xl w-full  flex flex-col gap-2">
        {typeButtons.map((btn) => (
          <div className="flex items-center " key={btn.id}>
            <div className="w-[35px] h-[35px] border border-gray-800 rounded-lg flex items-center justify-center">
              {typeSearch === btn.type ? (
                <span>
                  <Check size={30} className="text-green-500" />
                </span>
              ) : (
                ""
              )}
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
        <div className="flex justify-between border-b border-gray-800 items-center">
          <h4 className="text-2xl text-white  pb-2 mt-4">Жанры</h4>
          {currentGenre && (
            <button
              onClick={() => setCurrentGenre(null)}
              className="cursor-pointer hover:text-baseYellow transition"
            >
              Очистить
            </button>
          )}
        </div>
        <ul className="flex flex-col gap-4 pt-4 max-h-[300px] overflow-y-scroll custom-scroll">
          {genres?.map((genre) => (
            <li
              key={genre.id}
              className="flex gap-5 items-center "
              onClick={() => setCurrentGenre(genre.id)}
            >
              <button className="w-[35px] h-[35px] border border-gray-800 rounded-lg flex items-center justify-center">
                {currentGenre === genre.id ? (
                  <span>
                    <Check size={30} className="text-green-500" />
                  </span>
                ) : (
                  ""
                )}
              </button>
              <button
                className={` ${currentGenre === genre.id ? "text-green-400" : "text-white"}   flex items-center  rounded-xl  transition cursor-pointer hover:text-gray-400 hover:translate-x-2 duration-200`}
              >
                {genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pb-6">
        <div className="flex justify-between items-center">
          <h4 className="mb-4 text-xl font-medium text-white">Год выпуска</h4>
          <input
            type="number"
            min={1960}
            max={2026}
            value={inpRangeYear ? inpRangeYear : ""}
            onChange={(e) => setInpRangeYear(Number(e.target.value))}
            className="w-28 rounded-xl border border-[#c28a3c]/30 bg-[#181818] px-3 py-3 text-center font-semibold text-[#c28a3c] outline-none transition focus:border-[#c28a3c] focus:shadow-[0_0_15px_rgba(194,138,60,0.25)] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">1960</span>

          <input
            type="range"
            min={1960}
            max={2026}
            value={inpRangeYear ? inpRangeYear : ""}
            onChange={(e) => setInpRangeYear(Number(e.target.value))}
            className="w-full h-2 mt-5 rounded-full appearance-none cursor-pointer bg-gray-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c28a3c] [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(194,138,60,0.8)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-[#c28a3c]"
          />

          <span className="text-sm text-gray-500">2026</span>
        </div>
      </div>
    </div>
  );
}
