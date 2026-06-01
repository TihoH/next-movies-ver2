"use client";
import { useState } from "react";
import HeadaerHoverMenu from "./headaerHoverMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { genre, HeaderLinksType } from "@/types/movieTypes";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { headerLinks } from "@/data/data";
import Image from "next/image";

interface HeaderMenuLinksProps {
  ganresMovies: genre[];
  ganresTv: genre[];
}

export default function HeaderMenuLinks({
  ganresMovies,
  ganresTv,
}: HeaderMenuLinksProps) {
  const [isActiveHoverId, setIsActiveHoverId] = useState<null | number>(null);
  const visible = useHeaderScroll();
  const path = usePathname();
  const showMenu = isActiveHoverId === 2 || isActiveHoverId === 3;

  const styleLinkType = (link: HeaderLinksType) => {
    if (link.href === "/") {
      return path === "/";
    }
    if (!link.type) return;

    return path.split("/").includes(link.type);
  };

  return (
    <div
      className={`left-0 right-0 z-50 w-full transform transition-all duration-300  ${!visible ? "fixed top-0 bg-[#0f0f0f]  shadow" : ""}`}
      onMouseLeave={() => setIsActiveHoverId(null)}
    >
      <ul className=" flex gap-4 md:gap-10 text-lg flex-wrap items-center  py-3 my-container">
        <li>
          <Link href={"/"}>
            <Image
              src="/logo1.png"
              alt="logo"
              width={384}
              height={83}
              priority
              className="w-[180px] h-auto"
            />
          </Link>
        </li>
        {headerLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              styleLinkType(link) ? "text-gray-300" : "text-gray-500"
            } hover:text-white hover:scale-110 duration-200 transition sm:text-xl md:text-xl  py-3`}
            onMouseEnter={() =>
              setIsActiveHoverId((prev: null | number) =>
                prev === link.id ? prev : link.id,
              )
            }
          >
            <Link href={link.href}>
              <span>{link.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={[
          "absolute -left-4 -right-4 top-full h-[400px] z-50 max-w-[1720px] m-auto",
          "transition-all duration-200",
          showMenu
            ? "opacity-100 translate-y-0 pointer-events-auto "
            : "opacity-0 -translate-y-10 pointer-events-none",
        ].join(" ")}
      >
        <HeadaerHoverMenu
          dataList={isActiveHoverId === 2 ? ganresMovies : ganresTv}
          isActiveHoverId={isActiveHoverId}
        />
      </div>
    </div>
  );
}
