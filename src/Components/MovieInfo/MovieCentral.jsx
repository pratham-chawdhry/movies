import React from 'react'
import { useEffect, useState } from 'react'
import MovieOne from './MovieOne'

export default function MovieCentral() {
    const url = window.location.href;
    const substrings = url.split('?')
    const queryString = substrings[1]
    const qString = new URLSearchParams(queryString)
    const [query, setQuery] = useState(qString.get("query"))
    const [genreDisplay, setGenreDisplay] = useState(["Action","Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"])
    const [adultMovie, setAdultMovie] = useState(qString.has("adult") ? qString.get("adult") : false)
    const [votes, setVotes] = useState(qString.has("votes") ? qString.get("votes") : 1)
    const [rating, setRating] = useState(qString.has("rating") ? qString.get("rating") : 1)
    const [loading, setLoading] = useState(true)
    const [releaseDate, setReleaseDate] = useState(qString.has("release_date") ? qString.get("release_date") : "1500-01-01")

    useEffect(() => {
      if (qString.has("genre")){
          setGenreDisplay(qString.get("genre").split(","))
      }
    },[])

    useEffect(() => {
      setLoading(false)
    }, [adultMovie])
  return (
    <div>
        {!loading && <MovieOne query = {query} genreDisplay = {genreDisplay} setGenreDisplay = {setGenreDisplay} adultMovie = {adultMovie} setAdultMovie = {setAdultMovie} votes = {votes} setVotes = {setVotes} rating = {rating} setRating = {setRating} releaseDate = {releaseDate} setReleaseDate = {setReleaseDate}/>}
    </div>
  )
}
