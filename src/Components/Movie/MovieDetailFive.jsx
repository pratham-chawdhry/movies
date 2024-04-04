import React from 'react'
import { useRef, useState } from 'react'
import MovieDetailSix from './MovieDetailSix'

export default function MovieDetailFive({array}) {
    const containerRef = useRef()
    const [scroll, setScroll] = useState(0)
    const [hover, setHover] = useState(-1)

    const scrollHandler = () => {
        let newScrollPosition = 0;
        if (scroll + 6*187 >= array.length * 187 - 6*187) {
            let newValue = array.length % 6;
            if (newValue === 0) {
                newValue = 6
            }
            newScrollPosition = scroll + newValue * 187 
        }
        else{
            newScrollPosition = scroll + 6*187;
        }
        setScroll(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    const scrollHandlerNew = () => {
        const newScrollPosition = scroll - 6*187;
        setScroll(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    let value = array.length * 187- 6*187
  return (
    <div style = {{position: 'relative', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        { scroll > 0 && (<button className='button' onClick={scrollHandlerNew}  style={{backgroundImage: 'linear-gradient(270deg, rgba(0,0,0,0.5), rgba(0, 0, 0, 1))', position: 'absolute', zIndex: '5', width: '70px', marginTop : '-5px', left : '0', height: '420px'}}>
            <i style={{color: 'white'}} className="fa-solid fa-left-long"></i>
        </button>)}
        { scroll < value && (<button className='button' onClick={scrollHandler}  style={{position: 'absolute', top : '0', zIndex: '4', width: '80px', marginLeft: '61.4vw', marginTop : '-5px', height: '420px'}}>
            <i style={{color: 'white'}} className="fa-solid fa-right-long"></i>     
        </button>)}
        <div className='row' ref = {containerRef} style={{ scrollBehavior: 'smooth', gridTemplateColumns: `repeat(${array.length + 2}, minmax(179px, 179px)`, top: '0px', left: '0px', right: '0px', bottom: '0px', height: '420px'}}>
            {
                array.map((movie, index) => {
                    return (
                        <MovieDetailSix key = {index} movie = {movie}/>
                    )
                })
            }
        </div>
    </div>
  )
}