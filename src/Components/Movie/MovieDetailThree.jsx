import React from 'react'
import './MovieDetail.css'
import { useState, useEffect } from 'react'
import genres from '../MovieInfo/Movie'
import MovieDetailFive from './MovieDetailFive'

export default function MovieDetailThree({movieArray}) {
    const [loading, setLoading] = useState(true)
    const [newLoading, setNewLoading] = useState(true)
  
    useEffect(() => {
      setLoading(false)
    }, [movieArray])
  
    useEffect(() => {
      setNewLoading(false)
    }, [genres])

    console.log(movieArray)
  
    return (
      <div className='background'>
          {!newLoading && <MovieDetailFive array = {movieArray}/>
          }
      </div>
    )
}
