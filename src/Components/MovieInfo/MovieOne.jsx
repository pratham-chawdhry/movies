import React, { useEffect } from 'react'
import { useState } from 'react'
import './Movie.css'
import MovieTwo from '../MovieInfo/MovieTwo'
import Menu from '../MovieInfo/Menu'
import MovieWindow from './MovieWindow'

export default function MovieOne({query}) {
  const [votes, setVotes] = useState(1)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [display, setDisplay] = useState(false)
  const [movieObj, setMovieObj] = useState()
  const [rating, setRating] = useState(1)
  const [releaseDate, setReleaseDate] = useState('1900-01-01')
  const [maxReleaseDate, setMaxReleaseDate] = useState(new Date().toISOString().slice(0, 10))
  const [genreDisplay, setGenreDisplay] = useState(["Action","Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"])
  const [adultMovie, setAdultMovie] = useState(false)


  useEffect(() => {
    if (query){
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${adultMovie}&language=en-US&page=1&region=India&api_key=294c3bed71b4dc93880885f944b67ed6`
      fetch(url)
          .then(response => response.json())
          .then(data => {setData(data)})
          .catch(error => console.log(error))
    }
  }, [query, adultMovie])

  useEffect(() => {
    const {total_pages} = data
    setTotalPages(total_pages)
    setLoading(false)
  }, [data])

  // backgroundImage: `url(${pinkSunset})`, backgroundSize : 'cover', 
  return (
    <div className='background' style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row'}}>
        <Menu query = {query} genreDisplay = {genreDisplay} setGenreDisplay={setGenreDisplay} setVotes={setVotes} rating = {rating} setRating = {setRating} releaseDate = {releaseDate} setReleaseDate = {setReleaseDate} maxReleaseDate = {maxReleaseDate} setMaxReleaseDate = {setMaxReleaseDate} adultMovie = {adultMovie} setAdultMovie = {setAdultMovie}/>
        {loading ? <h1>Loading...</h1> : <MovieTwo totalPages = {totalPages} setDisplay = {setDisplay} setMovieObj = {setMovieObj} query = {query} genreDisplay = {genreDisplay} adultMovie = {adultMovie} votes = {votes} rating = {rating} releaseDate = {releaseDate} maxReleaseDate = {maxReleaseDate}/>}
        {display && <div style={{height: '594px', width: '706px', zIndex: '10', color: 'black', position: 'absolute', top: '10%', left: '35%', right: '25%',bottom : '10%', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MovieWindow movieObj = {movieObj} setDisplay = {setDisplay}/>
          </div>}
    </div>
  )
}
