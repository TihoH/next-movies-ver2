import { breadCrumbsCatalog, genre, typeMovie } from "@/types/movieTypes";
import Link from "next/link";

interface PageMoviesBreadCrumbsProps {
  type: typeMovie;
  genres?: genre[]
  searchParams: Promise<{
    page?: string;
    genre?: string;
    primary_release_year?: string;
  }>;
}

export default async function PageMoviesBreadCrumbs({searchParams , genres , type}: PageMoviesBreadCrumbsProps) {
    const {page , genre , primary_release_year  } = await searchParams;

    let breadCrumbs:breadCrumbsCatalog[] = []

    const findGanre = genres?.find( item => item.id === Number(genre) )

    type && breadCrumbs.push({title:  type === 'movie' ? 'Фильмы' : 'Сериалы'  })

    genre && breadCrumbs.push({title: findGanre?.name  })

    if(page && Number(page) > 1){
      breadCrumbs.push({ title: 'Страница' , value: page })
    }

  return (
    <div className="flex gap-4 text-xl">
      {breadCrumbs.map((item) => (
        <Link className="hover:text-white transition hover:scale-110" key={item.title} href={"/"}>
          <span>{item.title}</span>
          <span>{item.value}</span>
        </Link>
      ))}
    </div>
  );
}
