export interface ITvshowsResults {
  results: TvShow[];
}

export interface TvShow {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  title?: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date?: string;
}

export interface IndividualTvShow {
  poster_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  original_language: string;
  popularity: number;
  origin_country: string[];
  genres: { id: number; name: string }[];
}
