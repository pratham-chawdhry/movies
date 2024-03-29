import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function MovieSix({movie}) {
    const [hover, setHover] = useState(false);
    const [movieOverview, setMovieOverview] = useState(movie.overview.slice(0, 100) + (movie.overview.length > 100 ? '...' : ''));

    return (
      <div className='movieDiv'>
        <div className='poster-div' onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} style={{position: 'relative', top: '0'}}>
          <img className='poster' style={{position: 'absolute', display: 'flex', zIndex: '1', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row'}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`} />
          <i style={{position: 'absolute', zIndex: '2', color: 'grey', opacity: '0.6', fontSize: '3.1rem', top: '3px', left: '0'}} className="fa-solid fa-bookmark">
          <i style={{position: 'absolute', zIndex: '2', color: 'black', opacity: '0.6', fontSize: '2.7rem', top: '0', left: '2px'}} className="fa-solid fa-bookmark">
            </i>
          </i>
        </div>
        <div style={{margin: '5px'}}>
          <div style={{fontSize: '12px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif', fontWeight: '400', height: '64px'}}>{movieOverview}</div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin : '22px'}}>
            <Link to={`/movie/${movie.id}`} style={{position: 'relative', bottom: '15px', height: '20px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px'}}>Learn More...</Link>
          </div>
        </div>
      </div>
    )    
}
