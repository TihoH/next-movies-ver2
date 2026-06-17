import { actor, ActorDetails } from "@/types/movieTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MoviePageActorsCardProps {
  actor: actor | null;
}

export default function MoviePageActorsCard({
  actor,
}: MoviePageActorsCardProps) {
  const [dataActor, setDataActors] = useState<ActorDetails | null>(null);
  // const topMovie = dataActor?.movie_credits.cast?.sort( (a , b) => a.vote_average - b.vote_average ).slice(0 , 5)
  const topMovies = dataActor?.movie_credits.cast
    ?.filter((item) => (  item.vote_count ?? 0 ) > 500)
    .sort((a, b) => (b.vote_average ?? 0 ) - ( a.vote_average ?? 0 ))
    .slice(0, 5);

  const imageSrc = actor?.profile_path
    ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
    : "/no-avatar.png";

  async function getDataActor() {
    const actorRes = await fetch(
      `/api/actor?append_to_response=movie_credits,images,external_ids&id=${actor?.id}&type='movie'`,
    );
    const dataActor = await actorRes.json();
    setDataActors(dataActor);
    console.log(dataActor);
  }

  useEffect(() => {
    if (actor) {
      getDataActor();
    }
  }, [actor]);

  return (
    <div className="relative z-50 bg-[#080A0B]  max-w-[1400px] p-6 border border-gray-900 rounded-xl">
      <div className="flex gap-8 w-full">
        <div className="relative w-[320px] h-[450px] shrink-0">
          <Image
            fill
            src={imageSrc}
            alt={dataActor?.name ? dataActor.name : "фото актера"}
            className="rounded-2xl object-cover"
            sizes="320px"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-5xl font-bold text-white">{dataActor?.name}</h2>

          <div className="flex gap-4 mt-5 text-gray-300">
            <span>{dataActor?.place_of_birth}</span>

            <span>|</span>

            <span>{dataActor?.birthday}</span>

            <span>|</span>

            <span>{dataActor?.known_for_department}</span>
          </div>

          {dataActor?.also_known_as && (
            <div className="mt-8">
              <p className="text-gray-400 mb-3">Также известен как:</p>

              <div className="flex flex-wrap gap-3">
                {dataActor.also_known_as.slice(0, 4).map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 border border-yellow-500/40 rounded-full text-sm text-white"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {topMovies && (
            <div className="mt-8">
              <h3 className="text-yellow-500 text-xl font-semibold mb-4">
                ЛУЧШИЕ ФИЛЬМЫ С УЧАСТИЕМ АКТЁРА
              </h3>

              <ul className="grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-5">
                {topMovies?.map((movie) => (
                  <li key={movie.id} className="group cursor-pointer ">
                    <div className="relative h-[240px]  rounded-2xl overflow-hidden">
                      <Image
                        fill
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title || "Постер фильма"}
                        className="object-cover transition duration-300 group-hover:scale-105"
                        sizes="100%"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h4 className="text-white font-semibold line-clamp-2">
                          {movie.title || movie.original_title}
                        </h4>

                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-300 text-sm">
                            {movie.release_date?.slice(0, 4)}
                          </span>

                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-lg text-xs font-bold">
                            {movie.vote_average?.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 border border-gray-800 rounded-2xl p-6 bg-black/20  ">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">
              ОБ АКТЁРЕ
            </h3>

            <p className="text-gray-300 leading-8 max-h-[300px] overflow-y-auto custom-scroll">
              {dataActor?.biography || "Биография отсутствует"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
