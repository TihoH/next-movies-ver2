import { createUrl } from "@/lib/createUrl";
import { HeaderLinksType, IPopularCountries } from "@/types/movieTypes";
import { Film, LoaderCircle, Popcorn, Tv } from "lucide-react";

export const headerLinks: HeaderLinksType[] = [
  {
    title: "Главная",
    id: 1,
    type: '',
    href: "/",
    burgerMenu: false,
  },
  {
    title: "Фильмы",
    id: 2,
    type: "movie",
    href: createUrl("/catalog/movie/", { page: "1" }),
    burgerMenu: true,
  },
  {
    title: "Сериалы",
    id: 3,
    type: "tv",
    href: createUrl("/catalog/tv", { page: "1" }),
    burgerMenu: true
  },
  {
    title: "Мультфильмы",
    id: 4,
    type: "cartoon",
    href: createUrl("/catalog/cartoon", { page: "1" }),
    burgerMenu: false
  },
];

export const popularCountries: IPopularCountries[] = [
  {
    iso_3166_1: "US",
    english_name: "United States of America",
    name: "Соединенные Штаты",
  },
  {
    iso_3166_1: "GB",
    english_name: "United Kingdom",
    name: "Великобритания",
  },
  { iso_3166_1: "FR", english_name: "France", name: "Франция" },
  { iso_3166_1: "DE", english_name: "Germany", name: "Германия" },
  { iso_3166_1: "IT", english_name: "Italy", name: "Италия" },
  { iso_3166_1: "ES", english_name: "Spain", name: "Испания" },
  { iso_3166_1: "JP", english_name: "Japan", name: "Япония" },
  {
    iso_3166_1: "KR",
    english_name: "South Korea",
    name: "Республика Корея",
  },
  { iso_3166_1: "CN", english_name: "China", name: "Китай" },
  { iso_3166_1: "IN", english_name: "India", name: "Индия" },
  { iso_3166_1: "CA", english_name: "Canada", name: "Канада" },
  { iso_3166_1: "AU", english_name: "Australia", name: "Австралия" },
  { iso_3166_1: "BR", english_name: "Brazil", name: "Бразилия" },
  { iso_3166_1: "MX", english_name: "Mexico", name: "Мексика" },
  { iso_3166_1: "AR", english_name: "Argentina", name: "Аргентина" },
  { iso_3166_1: "TR", english_name: "Turkey", name: "Турция" },
  { iso_3166_1: "UA", english_name: "Ukraine", name: "Украина" },
  { iso_3166_1: "PL", english_name: "Poland", name: "Польша" },
  { iso_3166_1: "SE", english_name: "Sweden", name: "Швеция" },
  { iso_3166_1: "NO", english_name: "Norway", name: "Норвегия" },
  { iso_3166_1: "DK", english_name: "Denmark", name: "Дания" },
  {
    iso_3166_1: "NL",
    english_name: "Netherlands",
    name: "Нидерланды",
  },
  { iso_3166_1: "BE", english_name: "Belgium", name: "Бельгия" },
  { iso_3166_1: "CH", english_name: "Switzerland", name: "Швейцария" },
  { iso_3166_1: "AT", english_name: "Austria", name: "Австрия" },
  { iso_3166_1: "CZ", english_name: "Czech Republic", name: "Чехия" },
  { iso_3166_1: "HU", english_name: "Hungary", name: "Венгрия" },
  { iso_3166_1: "RO", english_name: "Romania", name: "Румыния" },
  { iso_3166_1: "GR", english_name: "Greece", name: "Греция" },
  { iso_3166_1: "PT", english_name: "Portugal", name: "Португалия" },
];


 export const typeButtons = [
    {
      type: "movie",
      title: "Фильмы",
      id: 1,
      icon: <Film size={25} />,
    },
    {
      type: "tv",
      title: "Сериалы",
      id: 2,
      icon: <Tv size={25} />,
    },
    {
      type: "cartoon",
      title: "Мультфильмы",
      id: 3,
      icon: <Popcorn size={25} />,
    },
  ];
