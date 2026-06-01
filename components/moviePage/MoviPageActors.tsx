"use client";
import { actor } from "@/types/movieTypes";
import Image from "next/image";
import { useState } from "react";

interface MoviPageActorsProps {
  actors: actor[];
}

export default function MoviPageActors({ actors }: MoviPageActorsProps) {
  const srcActors = `https://image.tmdb.org/t/p/w185`;
  const noPhotoActor = "/no-avatar.png";
  const [isActiveSlice, setIsActiveSlice] = useState(false);

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <span className="text-2xl text-white mb-2">Актёры</span>
        <div>
          <button
            className="cursor-pointer hover:text-gray-100 mb-3"
            onClick={() => setIsActiveSlice(!isActiveSlice)}
          >
            Показать всех
          </button>
        </div>{" "}
      </div>
      <ul className="grid grid-cols-10 gap-5 ">
        {actors.slice(0, !isActiveSlice ? 10 : actors.length).map((actor) => (
          <li
            key={actor.id}
            className="flex flex-col items-center text-center cursor-pointer  hover:scale-110 transition duration-300"
          >
            <div className="relative w-[150px] h-[200px]">
              <Image
                style={{ objectFit: "cover" }}
                fill
                priority={false}
                src={
                  actor.profile_path
                    ? `${srcActors}${actor.profile_path}`
                    : noPhotoActor
                }
                sizes="w-[150px]"
                alt={actor.original_name}
                className="rounded-xl"
              />
            </div>
            <span>{actor.original_name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
