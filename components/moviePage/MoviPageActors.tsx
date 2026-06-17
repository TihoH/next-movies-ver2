"use client";
import { actor } from "@/types/movieTypes";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import MoviePageActorsCard from "./MoviePageActorsCard";

interface MoviPageActorsProps {
  actors: actor[];
}

export default function MoviPageActors({ actors }: MoviPageActorsProps) {
  const srcActors = `https://image.tmdb.org/t/p/w185`;
  const noPhotoActor = "/no-avatar.png";
  const [isActiveSlice, setIsActiveSlice] = useState(false);
  const [activeModalActors, setActiveMpdalActors] = useState(false);
  const [currentActor, setCurrentActor] = useState<null | actor>(null);

  const setActor = (actor: actor) => {
    setCurrentActor(actor);
    setActiveMpdalActors(!activeModalActors);
  };

  return (
    <div className="mt-10 card-dark">
      <div className="mb-5 flex items-center justify-between ">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl mt-5 font-bold text-baseYellow uppercase font-light">Актёры</h2>
          <h3 className="text-4xl">В главных ролях</h3>
          <p className="text-lg">Актёры , которые подарили этим персонажам жизнь</p>
        </div>
        <button
          className=" text-lg rounded-lg  border border-baseYellow/35 px-5 py-2  text-baseYellow transition hover:border-yellow-500 hover:text-yellow-500"
          onClick={() => setIsActiveSlice(!isActiveSlice)}
        >
          {isActiveSlice ? "Скрыть" : "Показать всех"}
        </button>
      </div>

      <ul className="grid grid-cols-5 gap-5 xl:grid-cols-10">
        {actors.slice(0, !isActiveSlice ? 10 : actors.length).map((actor) => (
          <li
            key={actor.id}
            onClick={() => setActor(actor)}
            className="group cursor-pointer"
          >
            <div className="relative h-[220px] overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
              <Image
                fill
                priority={false}
                src={
                  actor.profile_path
                    ? `${srcActors}${actor.profile_path}`
                    : noPhotoActor
                }
                sizes="150px"
                alt={actor.original_name}
                className="object-cover transition duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="line-clamp-2 text-center text-sm font-semibold text-white">
                  {actor.original_name}
                </h3>

                {actor.character && (
                  <p className="mt-1 line-clamp-1 text-center text-xs text-gray-400">
                    {actor.character}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal isOpen={activeModalActors} closeModal={setActiveMpdalActors}>
        <MoviePageActorsCard
          actor={currentActor}
        />
      </Modal>
    </div>
  );
}
