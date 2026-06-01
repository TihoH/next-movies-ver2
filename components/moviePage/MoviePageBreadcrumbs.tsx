import { breadcrumbsType } from "@/app/movie/[type]/[genre]/[id]/[title]/page";
import Link from "next/link";
interface MoviePageBreadcrumbsProps {
  breadcrumbsItem: breadcrumbsType;
  title: string;
}

export default function MoviePageBreadcrumbs({
  breadcrumbsItem,
  title,
}: MoviePageBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex gap-2 mt-10">
        <li>
          <Link className="text-gray-300" href="/">
            {breadcrumbsItem.type === "movie" ? "Фильмы " : "Сериалы"}
          </Link>
          <span> / </span>
        </li>

        <li>
          <Link
            className="text-gray-300 "
            href={`/movie/${breadcrumbsItem.type}/${breadcrumbsItem.genre}`}
          >
            {decodeURIComponent(breadcrumbsItem.genre).charAt(0).toUpperCase() +
              decodeURIComponent(breadcrumbsItem.genre).slice(1)}
          </Link>
          <span> / </span>
        </li>

        <li>
          <span>{title}</span>
        </li>
      </ul>
    </nav>
  );
}
