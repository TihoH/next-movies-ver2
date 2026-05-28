import React from 'react'

interface MoviePageReviewsProps {
    data: any ,
    nameFilm: string
}

export default function MoviePageReviews({data , nameFilm}:MoviePageReviewsProps) {
  return (
    <div>
        <h3 className='text-3xl mt-5 bg-[#4B4767]  inline-block px-5 py-3 rounded-3xl'>Отзывы о фильме <span className='text-white'>"{nameFilm}"</span></h3>
    </div>
  )
}
