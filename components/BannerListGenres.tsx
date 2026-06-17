import Link from "next/link";
import { Flame, Star, Crown, Clock } from "lucide-react";

const icons = {
  Flame,
  Star,
  Crown,
  Clock,
};

const genresMoviesBanner = [
  {
    id: 1,
    title: "Популярное",
    subTitle: "Смотрите самое популярное",
    link: "/popular",
    icon: "Flame",
  },
  {
    id: 2,
    title: "Топ рейтинг",
    subTitle: "Фильмы с высоким рейтингом",
    link: "/top_rated",
    icon: "Star",
  },
  {
    id: 3,
    title: "Премьеры",
    subTitle: "Самые свежие новинки",
    link: "/now_playing",
    icon: "Crown",
  },
  {
    id: 4,
    title: "Скоро",
    subTitle: "Скоро на экранах",
    link: "/upcoming",
    icon: "Clock",
  },
] as const;

export default function BannerListGenres() {
  return (
    <ul className="grid md:grid-cols-4 gap-5">
      {genresMoviesBanner.map((genresItem) => {
        const Icon = icons[genresItem.icon];

        return (
          <li
            key={genresItem.id}
            className={`${genresItem.id === 1 ? 'gradientBorder' : ''} flex-1 bg-[#0A0D10] border border-gray-900 rounded-xl py-4 hover:bg-gray-800 transition`}
          >
            <Link href={`catalog/movie?category=${genresItem.link}`} className="flex items-center justify-center gap-4">
              <div className="text-baseYellow">
                <Icon size={34} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold">
                  {genresItem.title}
                </h3>
                <span className="text-gray-400 text-sm">
                  {genresItem.subTitle}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}