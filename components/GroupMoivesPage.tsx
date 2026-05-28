import React from "react";
import ListItemCard from "./UI/ListItemCard";
import { genre, Movie, typeMovie } from "@/types/movieTypes";

interface GroupMivesPagePropa {
  dataList: Movie[];
    type: typeMovie ,
    genres: genre[]
}

export default async function GroupMivesPage({
  dataList,
  type,
  genres
}: GroupMivesPagePropa) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
      {dataList.map((cardFilm) => (
        <ListItemCard
          key={cardFilm.id}
          listItem={cardFilm}
          type={type}
          genres={genres}
        />
      ))}
    </div>
  );
}
