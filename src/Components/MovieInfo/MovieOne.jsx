import React, { useEffect } from 'react'
import { useState } from 'react'
import './Movie.css'
import MovieTwo from '../MovieInfo/MovieTwo'
import Menu from '../MovieInfo/Menu'
import pinkSunset from '../../Images/GenreIcons/pink-beach.jpg'

export default function MovieOne() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=Rock&include_adult=false&language=en-US&page=1&region=India&api_key=294c3bed71b4dc93880885f944b67ed6`
    fetch(url)
        .then(response => response.json())
        .then(data => {setData(data)})
        .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    const {total_pages} = data
    setTotalPages(total_pages)
    setLoading(false)
  }, [data])

  // backgroundImage: `url(${pinkSunset})`, backgroundSize : 'cover', 
  return (
    <div className='background' style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row'}}>
        <Menu />
        {loading ? <h1>Loading...</h1> : <MovieTwo totalPages = {totalPages}/>}
    </div>
  )
}