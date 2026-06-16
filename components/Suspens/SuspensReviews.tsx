import React from 'react'
import MoviePageReviews from '../moviePage/MoviePageReviews'
import { getDataApi } from '@/lib/api/baseAPI'

interface SuspensReviewsProps {
    data: any,
    type: string ,
    id: string ,
}

export default async function SuspensReviews({data ,type , id }: SuspensReviewsProps) {
    const reviews:any = await getDataApi(`${type}/${id}/reviews`,{ language: "ru" },86400)
  
    console.log('отзывы' + reviews)

  return (
    <div><MoviePageReviews  nameFilm={data.title} />акйайа</div>
  )
}
