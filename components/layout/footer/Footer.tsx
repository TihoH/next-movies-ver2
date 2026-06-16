import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-[#070A0E]">
      <div className="my-container py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Лого */}
          <div>
            <Image
              src="/logo1.png"
              alt="КиноHOME"
              width={180}
              height={60}
            />

            <p className="text-gray-400 mt-4 leading-7">
              КиноHOME — каталог фильмов и сериалов.
              Новинки кино, рейтинги, актеры и подборки
              для комфортного просмотра.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white text-xl mb-4">
              Навигация
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-baseYellow">
                  Главная
                </Link>
              </li>

              <li>
                <Link href="/catalog/movie" className="hover:text-baseYellow">
                  Фильмы
                </Link>
              </li>

              <li>
                <Link href="/catalog/tv" className="hover:text-baseYellow">
                  Сериалы
                </Link>
              </li>

              <li>
                <Link href="/catalog/cartoon" className="hover:text-baseYellow">
                  Мультфильмы
                </Link>
              </li>
            </ul>
          </div>

          {/* Категории */}
          <div>
            <h3 className="text-white text-xl mb-4">
              Подборки
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Популярное</li>
              <li>Топ рейтинг</li>
              <li>Премьеры</li>
              <li>Скоро на экранах</li>
            </ul>
          </div>

          {/* Инфо */}
          <div>
            <h3 className="text-white text-xl mb-4">
              Информация
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>О проекте</li>
              <li>Политика конфиденциальности</li>
              <li>Контакты</li>
              <li>FAQ</li>
            </ul>
          </div>

        </div>

        {/* Нижняя линия */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © 2026 КиноHOME. Все права защищены.
          </p>

          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-baseYellow hover:text-baseYellow cursor-pointer transition">
              TG
            </span>

            <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-baseYellow hover:text-baseYellow cursor-pointer transition">
              VK
            </span>

            <span className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-baseYellow hover:text-baseYellow cursor-pointer transition">
              YT
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}