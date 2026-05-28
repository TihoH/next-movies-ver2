import { headerLinks } from "@/data/data";
import { genre } from "@/types/movieTypes";
import Link from "next/link";
import React, { useState } from "react";

interface BurgerMenuProps {
  setIsActiveBurgerMenu: (value: boolean) => void;
}

export default function BurgerMenu({
  setIsActiveBurgerMenu,
}: BurgerMenuProps) {
  return (
    <>
      <ul className="mt-24 flex flex-col gap-5 text-white text-xl">
        {headerLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              onClick={() => {setIsActiveBurgerMenu(false)}}
            >
              {" "}
              {link.title}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
