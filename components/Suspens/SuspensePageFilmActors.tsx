import { getDataApi } from "@/lib/api/baseAPI";
import MoviPageActors from "../moviePage/MoviPageActors";
import { actorsResponse } from "@/types/movieTypes";

interface SuspensePageFilmActorsProps {
  type: string;
  id: string;
}

export default async function SuspensePageFilmActors({ type, id }: SuspensePageFilmActorsProps) {
  const actors: any = await getDataApi<actorsResponse>(
    `${type}/${id}/credits`,
    { language: "ru" },
    86400,
  );

  return (
    <div className="my-10">
      <MoviPageActors actors={actors.cast}/>
    </div>
  );
}
