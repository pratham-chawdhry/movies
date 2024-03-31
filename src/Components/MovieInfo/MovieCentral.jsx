import React from 'react'
import { useEffect, useState } from 'react'
import MovieOne from './MovieOne'

export default function MovieCentral() {
    const url = window.location.href;
    const substrings = url.split('?')
    const queryString = substrings[1]
    const qString = new URLSearchParams(queryString)
    console.log(qString.get("query"), url)
    const [query, setQuery] = useState(qString.get("query"))
    const [genreDisplay, setGenreDisplay] = useState(["Action","Adventure", "Animation", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Science Fiction", "TV Movie", "Thriller", "War", "Western"])

    useEffect(() => {
    if (qString.has("genre")){
        setGenreDisplay(qString.get("genre").split(","))
    }
    },[])

  return (
    <div>
        <MovieOne query = {query} genreDisplay = {genreDisplay} setGenreDisplay = {setGenreDisplay}/>
    </div>
  )
}
