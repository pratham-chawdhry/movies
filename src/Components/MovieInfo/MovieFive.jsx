import React from 'react'
import './Movie.css'
import { useRef, useState } from 'react'

export default function MovieFive({array}) {
    const containerRef = useRef()
    const [scroll, setScroll] = useState(0)

    const scrollHandler = () => {
        console.log(scroll)
        const newScrollPosition = scroll + 7*188;
        setScroll(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    let value = array.length * 188 - 7*188
    console.log("value,",value)

  return (
    <div style = {{position: 'relative', height: '297px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        { scroll < value && (<button className='button' onClick={scrollHandler}  style={{position: 'absolute', zIndex: '2', width: '108px', marginLeft: '94vw'}}>
            <i style={{color: 'white'}} className="fa-solid fa-right-long"></i> {/* Right Arrow not working*/}
        </button>)}
        <div className='row' ref = {containerRef} style={{position: 'absolute', zIndex: '1', scrollBehavior: 'smooth', gridTemplateColumns: `repeat(${array.length + 1}, minmax(180px, 1fr))`, top: '0px', left: '0px', right: '0px', bottom: '0px'}}>
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
    {/* <div onClick={(e) => console.log("Div button ka")} style={{ width: '180px', height: '270px', zIndex: '1' }}> */}
            {/* </div> */}
    </div>
  )
}
