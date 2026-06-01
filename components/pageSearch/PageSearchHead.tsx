import Image from "next/image";

interface PageSearchHeadProps {
  setSearchValue: (value: string) => void;
  searchValue: string;
}

export default function PageSearchHead({
  setSearchValue,
  searchValue,
}: PageSearchHeadProps) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 z-40 min-h-[400px] overflow-hidden">
      <div className="relative z-30 py-20 my-container ">
        <h1 className="text-5xl font-bold text-white">Поиск фильмов</h1>

        <h2 className="text-gray-300 mt-4 text-xl">
          Найдите ваш любимый фильм, сериал...
        </h2>

        <div className="mt-8">
          <input
            type="text"
            aria-label="Поиск фильма"
            placeholder="Введите запрос"
            className="w-full max-w-[500px] h-14 rounded-xl bg-black/40 border border-white/10 px-4 text-white outline-none backdrop-blur-md"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </div>
      {/* Затемнение */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/70 to-transparent" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />{" "}
      {/* Картинка */}
      <Image
        src={"/images/bgSearch.png"}
        fill
        alt=""
        className="object-cover  z-10 "
      />
    </div>
  );
}
