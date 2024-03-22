import React from 'react'
import './Movie.css'
import { useRef, useState } from 'react'

export default function MovieFive({array}) {
    const containerRef = useRef()
    const [scroll, setScroll] = useState(0)

    const scrollHandler = () => {
        const newScrollPosition = scroll + 7*185;
        setScroll(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }
  return (
    <div>
    <div className='row' ref = {containerRef} style={{scrollBehavior: 'smooth', gridTemplateColumns: `repeat(${array.length + 1}, minmax(180px, 1fr))`}}>
        {
            array.map(({poster_path}, index) => {
                return (
                    <div className='poster-div' key = {index}>
                        <img className='poster' src = {`https://image.tmdb.org/t/p/original${poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
                    </div>
                )
            })
        }
    </div>
        <button onClick={scrollHandler} className='button'>Click me</button>
    </div>
  )
}
