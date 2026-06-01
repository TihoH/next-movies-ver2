'use client'
import FastSearch from "@/components/Search/FastSearch";
import Modal from "@/components/UI/Modal/Modal";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function HeaderSearch() {

  const [activeSearch , setActiveSearch] = useState(false)

  return (
    <div className='flex gap-3 items-center shadow shadow-[#0f0f0f]'>
        <label htmlFor="search"><IoSearchOutline size={'25px'}/></label>
        <input className='outline-none' type="text" placeholder='Поиск фильмов или сериалов' onClick={ () => setActiveSearch(true) } />

       {activeSearch &&  <Modal isOpen={activeSearch}  closeModal={setActiveSearch}>
          <FastSearch setActiveSearch={setActiveSearch} />
        </Modal>}
    </div>
  )
}
