import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function MovieFour({genreId, genre, movieArray}) {
    const [loading, setLoading] = useState(true)
    const [genreArray, setGenreArray] = useState([])
    const [scroll, setScroll] = useState(0)
    const containerRef = useRef()
    
    useEffect(() => {
        setGenreArray(movieArray.filter(({genre_ids}) => genre_ids.includes(genreId)))
        setLoading(false)
    }, [movieArray])

    if(!loading) {
        console.log(genreArray)
    }

    const handleScroll = (e) => {
        const newScrollPosition = scroll + 7*185;
        setScroll(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

  return (
    <div>
    <div className='row ' ref = {containerRef}>
      {
        !loading && genreArray &&
            genreArray.map(({poster_path}, index) => {
                return (<div key = {index} className='poster-div' style = {{width : '190px'}}>
                  <img className='poster' src = {`https://image.tmdb.org/t/p/original${poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
                </div>)
            })
      }
    </div>
      <button id = "slide" onClick = {(e) => handleScroll(e)}>Slide</button>
    </div>
  )
}
