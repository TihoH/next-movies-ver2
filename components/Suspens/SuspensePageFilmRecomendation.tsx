import { getDataApi } from "@/lib/api/baseAPI";

import GroupListMovies from "../groupListMovies";
import { MovieResponse, typeMovie } from "@/types/movieTypes";

interface SuspensePageFilmRecomendationProps {
  title: any;
  type: typeMovie;
  id: string;
  genres: any;
}

export default async function SuspensePageFilmRecomendation({
  title,
  type,
  id,
  genres,
}: SuspensePageFilmRecomendationProps) {

  const recommendations = await getDataApi<MovieResponse>(
    `${type}/${id}/recommendations`,
    { language: "ru" },
    86400,
  );

  if (!recommendations?.results.length) return;

  console.log(recommendations.results);
console.log("RECOMMENDATIONS URL:", `${type}/${id}/recommendations`);
console.log("type:", type);
console.log("id:", id);
  return (
    <div>
      <GroupListMovies
        listMovies={recommendations?.results}
        category="recommendations"
        title={title}
        type={type}
        isTypeTitile={false}
        genres={genres}
      />
    </div>
  );
}
