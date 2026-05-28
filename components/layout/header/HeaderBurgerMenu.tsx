"use client";
import { genre } from "@/types/movieTypes";
import HeaderMenuLinks from "./headerMenuLinks";
import HeaderSearch from "./headerSearch";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderBurgerMenuProps {
  ganresMovies: genre[];
  ganresTv: genre[];
}

export default function HeaderBurgerMenu({
  ganresMovies,
  ganresTv,
}: HeaderBurgerMenuProps) {
  const [isACtiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);
  return (
    <>
      <div
        className={`md:hidden  px-5 fixed bg-[#0f0f0f] opacity-90 top-0 left-0 right-0 bottom-0 z-50 h-screen duration-300 ${isACtiveBurgerMenu ? "transition-transform translate-x-0 " : "translate-x-full "} `}
      >
        <BurgerMenu setIsActiveBurgerMenu={setIsActiveBurgerMenu} />
        <HeaderSearch />

        <div className="mt-[100px] text-white">
          <p className="">
            Смотрите фильмы и сериалы онлайн в хорошем качестве. Популярные
            новинки, подборки лучших фильмов и удобный каталог по жанрам
          </p>
        </div>
      </div>
      <div className="z-50 md:hidden fixed flex justify-between w-full items-center bg-[#0f0f0f] border-b-2">
        <Link href={"/"}>
          <Image
            src="/logo1.png"
            alt="logo"
            height={100}
            width={180}
            className="pl-5"
          />
        </Link>
        <button
          className=" py-5 px-5 md:hidden z-50 right-0"
          onClick={() => setIsActiveBurgerMenu(!isACtiveBurgerMenu)}
        >
          {" "}
          ADD
        </button>
      </div>
    </>
  );
}
