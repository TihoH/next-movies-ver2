"use client";
import React, { useState } from "react";
import { CiBookmark, CiPlay1 } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import Modal from "../UI/Modal/Modal";
import MoviePageVideo from "./MoviePageVideo";
import { typeMovie } from "@/types/movieTypes";

interface MoviePageButtonsProps {
    id:number
    type: typeMovie
}

export default function MoviePageButtons({id , type}:MoviePageButtonsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mt-5">
      <div className=" flex  items-center gap-3">
        <button className=" flex items-center gap-3  z-30 py-4 px-10 bg-[#c28a3c] text-black text-xl  hover:text-white transition duration-500  rounded-xl cursor-pointer ">
          <span>
            <CiPlay1 size={"24"} />
          </span>
          <span>Смотреть</span>
        </button>
        <button
          className=" flex items-center gap-3  z-30 py-4 px-10 border border-gray-700 hover:bg-gray-950 hover:border-transparent text-white text-xl  transition duration-500  rounded-xl cursor-pointer "
          onClick={() => setIsOpen(true)}
        >
          <span>
            <CiPlay1 size={"24"} />
          </span>
          <span>Трейлер</span>
        </button>
        <button
          aria-label="Добавить в список"
          className="h-15 w-15 rounded-full border border-gray-700 flex items-center justify-center bg-[#0F1011] text-white"
        >
          <FiPlus size={26} />
        </button>

        <button
          aria-label="Сохранить"
          className="h-15 w-15 rounded-full border  border-gray-700 flex items-center justify-center bg-[#0F1011] text-white"
        >
          <CiBookmark size={26} />
        </button>
      </div>

      <Modal isOpen={isOpen} closeModal={setIsOpen}>
        <MoviePageVideo id={id} type={type} />
      </Modal>
    </div>
  );
}
