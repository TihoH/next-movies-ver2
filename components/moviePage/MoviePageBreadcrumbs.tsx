import { breadcrumbsType } from "@/app/[type]/[genre]/[id]/[title]/page";
import Link from "next/link";
interface MoviePageBreadcrumbsProps {
  breadcrumbsItem: breadcrumbsType;
  title: string;
}

export default function MoviePageBreadcrumbs({
  breadcrumbsItem,
  title,
}: MoviePageBreadcrumbsProps) {

  const decodeGanre = decodeURIComponent(breadcrumbsItem.genre)

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex gap-2 mt-10">
        <li>
          <Link className="text-gray-300" href="/">
            {breadcrumbsItem.type === "movie" ? "Фильмы " : "Сериалы"}
          </Link>
          <span> / </span>
        </li>

        <li>
          <Link
            className="text-gray-300 "
            href={`/${breadcrumbsItem.type}/${breadcrumbsItem.genre}`}
          >
            {decodeGanre.charAt(0).toUpperCase() +
              decodeGanre.slice(1)}
          </Link>
          <span> / </span>
        </li>

        <li>
          <span>{decodeURIComponent(title)}</span>
        </li>
      </ol>
    </nav>
  );
}
