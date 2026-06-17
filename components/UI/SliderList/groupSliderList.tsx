"use client";
import { useRef } from "react";
import styles from "./styles.module.css";
import { genre, Movie, typeMovie } from "@/types/movieTypes";
import ListItemCard from "../ListItemCard";

interface SliderListItemsProps {
  sliderDataList: Movie[];
  type: typeMovie;
  genres: genre[];
}

export default function SliderSliderList({
  sliderDataList,
  type,
  genres,
}: SliderListItemsProps) {
  const slideScroll = useRef<HTMLDivElement | null>(null);
  const styleSlideCard = { width: 230, gap: 6 };

  const scrollLeft = () => {
    slideScroll.current?.scrollBy({
      left: -560,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    slideScroll.current?.scrollBy({
      left: 560,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.navBtn} ${styles.prevBtn} ${styles.navBtnLeft}`}
        aria-label="Prev"
        onClick={() => scrollLeft()}
      >
        <span className={styles.icon}>‹</span>
      </button>

      <button
        className={`${styles.navBtn} ${styles.nextBtn} ${styles.navBtnRight} `}
        aria-label="Next"
        onClick={() => scrollRight()}
      >
        <span className={styles.icon}>›</span>
      </button>

      <div
        className={`flex gap-6 overflow-x-auto md:overflow-x-hidden transition duration-300 py-6 px-2 `}
        ref={slideScroll}
      >
        {sliderDataList.map((item) => (
          <div key={item.id} className="">
            <ListItemCard
              listItem={item}
              type={type}
              genres={genres}
              styleSlideCard={styleSlideCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
