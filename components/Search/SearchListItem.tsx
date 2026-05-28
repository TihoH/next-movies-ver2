'use client'
import { Movie } from "@/types/movieTypes";


interface SearchListItemProps {
  listItem: Movie;
  isLoader: boolean
}

export default function SearchListItem({ listItem  }: SearchListItemProps) {

  

  return (
    <div className="flex gap-4 border border-gray-700 rounded-lg p-2 ">
      <img
        src={`https://image.tmdb.org/t/p/w342${listItem.poster_path}`}
        alt="Movie image"
        className="max-h-[250px] h-full max-w-[150px] w-full object-cover rounded-lg "
      />

      <div className="py-3 flex flex-col gap-3">
        <div className="   flex justify-between">
          <span className="text-gray-300 text-xl">{listItem.title || listItem.name}</span>
          <span className="text-baseYellow">
            {listItem.vote_average.toFixed(1)} ({" "}
            <span className="text-gray-300">голосов: </span>
            {listItem.vote_count})
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <p>{listItem.release_date}</p>
            <p></p>
          </div>

          <p className="text-sm">{listItem.overview}</p>
      
        </div>
      </div>
    </div>
  );
}
