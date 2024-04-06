import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './MovieDetail.css'
import MovieDetailFive from './MovieDetailFive'

export default function MovieDetailFour({genreId, genre, movieArray}) {
  const [loading, setLoading] = useState(true)
    const [genreArray, setGenreArray] = useState([])
    const [numOfLarge, setNumOfLarge] = useState(0)
    const [sizeOfSmall, setSizeOfSmall] = useState(0)
    const [finish, setFinish] = useState(false)
    const [renderArray, setRenderArray] = useState([])
    let start = 0
    let end = 0
    
    useEffect(() => {
      if (movieArray){
        setGenreArray(movieArray.filter(({genre_ids}) => genre_ids.includes(genreId)))
        setLoading(false)
      }
    }, [movieArray])

    useEffect(() => {
      if (!loading) {
        let length = genreArray.length;
        let i = 0
        let j = 0
        while (length !== 0) {  
          if (length >= 63){
            length = length - 42
            i++
            setRenderArray(renderArray => [...renderArray, 42])
          }
          else {
            j = length
            length = 0
            setRenderArray(renderArray => [...renderArray, j])
          }
        }
        setNumOfLarge(i)
        setSizeOfSmall(j)
        setFinish(true)
      }
    }, [loading])

    console.log(genre, genreArray.length)
  return (
    <div>
      {finish && ((genreArray.length) ? <h1 className = 'genre-title' style = {{color : 'white'}}>{genre}</h1> : <div></div>)}
      {
        finish && (sizeOfSmall !== 0 || numOfLarge !== 0)  &&
        renderArray.map((num, index) => {
          start = end
          end = start + num
          const array = genreArray.slice(start, end)
          return (<MovieDetailFive key = {index} array = {array} />)
        }) 
      }
    </div>
  )
}
