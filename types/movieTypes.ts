export interface Movie {
    name: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;

  backdrop_path: string | null;
  poster_path: string | null;

  genre_ids: number[];
genres: genre[]
  release_date: string;
  original_language: string;
runtime: number
  popularity: number;
  vote_average: number;
  vote_count: number;
  tagline: string
  adult: boolean;
  video: boolean;
}

export type typeMovie = "movie" | "tv" | "curtoon";

export type genre = { id: number; name: string };

export interface HeaderLinksType {
  title: string;
  id: number;
  // link: string;
  type: string | null
  href: string
  burgerMenu: boolean
}

export type actor = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number; // 0 = unknown, 1 = female, 2 = male
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  order: number;

}

export interface actorsResponse {
  cast: actor[]
}

 export interface IPopularCountries {
    iso_3166_1: string ,
    english_name: string ,
    name: string
  }

  export type breadCrumbsCatalog = {
    title: string | undefined,
    value?: string
  }

  export type MovieResponse = {
  results: Movie[];
  total_results: number
};
