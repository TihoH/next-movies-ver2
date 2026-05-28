import { breadcrumbsType } from "@/app/movie/[type]/[genre]/[id]/[title]/page";
import Link from "next/link";
import React from "react";

interface MoviePageBreadcrumbsProps {
    breadcrumbsItem: breadcrumbsType ,
    title: string
}

export default function MoviePageBreadcrumbs({breadcrumbsItem , title}: MoviePageBreadcrumbsProps) {
  return (
    
<ul className="flex gap-2 mt-10">
  <li>
    <Link className="text-gray-300" href="/">
      {breadcrumbsItem.type.toUpperCase()}
    </Link>
    <span> / </span>
  </li>

  <li>
    <Link className="text-gray-300" href={`/movie/${breadcrumbsItem.type}/${breadcrumbsItem.genre}`}>
      {decodeURIComponent(breadcrumbsItem.genre).toUpperCase()}
    </Link>
    <span> / </span>
  </li>

  <li>
    <span>{decodeURIComponent(title).toUpperCase()}</span>
  </li>
</ul>
  );
}
