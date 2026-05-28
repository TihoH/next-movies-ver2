import { Movie } from '@/types/movieTypes'
import React from 'react'

interface ResultsSerachProps {
    dataList: Movie[]
}

export default function ResultsSerach({dataList}:ResultsSerachProps) {
  return (
    <div className='flex-3'>
        <ul>
            {dataList?.map( movie => <li key={movie.id}>{movie.title}</li> )}
        </ul>
    </div>
  )
}
