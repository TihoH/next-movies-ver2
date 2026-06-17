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

export interface ActorDetails {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;

  external_ids: {
    freebase_mid?: string;
    freebase_id?: string;
    imdb_id?: string;
    facebook_id?: string;
    instagram_id?: string;
    twitter_id?: string;
  };

  gender: number;
  homepage: string | null;
  id: number;

  images: {
    profiles: {
      aspect_ratio: number;
      file_path: string;
      height: number;
      width: number;
      vote_average: number;
      vote_count: number;
    }[];
  };

  imdb_id: string;
  known_for_department: string;

  movie_credits: {
    cast: MovieCredit[];
    crew: MovieCredit[];
  };

  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface MovieCredit {
  id: number;
  title?: string;
  original_title?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  release_date?: string;
  vote_count?: number;
  vote_average?: number;
  popularity?: number;
  character?: string;
  overview?: string;

}