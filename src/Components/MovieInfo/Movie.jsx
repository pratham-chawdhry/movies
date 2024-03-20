import React, { useEffect } from 'react'
import { useState } from 'react'
import './Movie.css'

export default function Movie() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [posterPath, setPosterPath] = useState([])

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/search/movie?query=Rocky&include_adult=false&language=en-US&page=1&region=India&api_key=294c3bed71b4dc93880885f944b67ed6'
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(data)
          const {results} = data
          const {original_title, poster_path} = results[0]
          setOriginalData(original_title)
          setPosterPath(poster_path)
          setLoading(false)
          console.log(data)
        })
        .catch(error => console.log(error))
  },[])

  return (
    <div>
        {loading ? <div>Loading...</div> : <div>{originalData} <img className = 'poster' src = {`https://image.tmdb.org/t/p/original/${posterPath}`}></img></div>}
    </div>
  )
}
