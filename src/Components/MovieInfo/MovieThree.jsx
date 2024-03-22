import React, { useEffect } from 'react'
import { useState } from 'react'
import genres from './Movie'
import './Movie.css'
import MovieFour from './MovieFour'
import './Movie'

export default function MovieThree({movieArray}) {
  const [loading, setLoading] = useState(true)
  const [newLoading, setNewLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [movieArray])

  useEffect(() => {
    setNewLoading(false)
  }, [genres])

  return (
    <div className='background'>
        {!newLoading && genres.map(({id, name}, index) => {
                return (<MovieFour key = {index} genreId = {id} genre = {name} movieArray = {movieArray}/>)
            })
        }
    </div>
  )
}
