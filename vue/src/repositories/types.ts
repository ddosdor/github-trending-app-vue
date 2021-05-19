export type SinceType =
  | 'daily'
  | 'weekly'
  | 'monthly'

export type Language = {
  [key: string]: string;
  urlParam: string;
  name: string;
};

export type SpokenLanguage = {
  [key: string]: string;
  urlParam: string;
  name: string;
};

export type Repo = {
  [key: string]: string;
  name: string;
  description: string;
  url: string;
}

export type TrendingDeveloper = {
  [key: string]: string | Repo;
  username: string;
  name: string;
  url: string;
  avatar: string;
  repo: Repo
}

export type BuiltBy = {
  [key: string]: string;
  href: string;
  avatar: string;
  username: string;
}

export type TrendingRepo = {
  [key: string]: string | number | BuiltBy[];
  author: string;
  name: string;
  avatar: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  currentPeriodStars: number;
  builtBy: BuiltBy[]
}

export type TrendingDevelopersFilterParams = {
  [key: string]: string | SinceType | null | undefined
  language?: string | null;
  since?: SinceType;
}
export type TrendingRepoFilterParams = {
  [key: string]: string | SinceType | null | undefined
  language?: string | null;
  since: SinceType;
  // eslint-disable-next-line camelcase
  spoken_language_code?: string | null;
}
