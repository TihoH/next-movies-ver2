import Image from "next/image";

export default function MainDescription() {
  return (
    <div className={`  h-[500px] flex  justify-between`}>
      <div className="relative z-10 max-w-[700px]">
        <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
          О кинотеатре
        </span>

        <h2 className="text-xl md:text-4xl font-bold text-white leading-tight mt-4">
          Онлайн-кинотеатр Иви:
          <span className="block text-[#c28a3c]">
            фильмы в хорошем качестве
          </span>
          всегда приносят настоящее удовольствие
        </h2>

        <p className="mt-8 text-gray-300 text-lg leading-8">
          Случалось ли вам отказаться от просмотра интересного фильма из-за
          того, что его показывали в неудобное время? Приходилось ли искать в
          сети интернет, где смотреть фильмы онлайн?
        </p>

        <p className="mt-5 text-gray-400 leading-8">
          Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в
          HD-качестве с кинотеатром Иви.
        </p>
      </div>
      <div className="relative md:w-[900px] h-full shrink-0 overflow-hidden">
        <Image
          className="object-cover opacity-80"
          src={"/images/descMain.png"}
          alt="Онлайн кинотеатр — фильмы и сериалы"
          fill
        sizes="(max-width: 768px) 100vw, 900px"
        />

        {/* слева */}
        <div className="absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent" />

        {/* сверху */}
        <div className="absolute top-0 left-0 right-0 h-24 z-10 bg-gradient-to-b from-[#0f0f0f] to-transparent" />

        {/* снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
      </div>
    </div>
  );
}
