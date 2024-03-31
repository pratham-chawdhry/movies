import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import MovieContext from '../MovieInfo/MovieOne'

export default function MovieSix({movie, setDisplay, setMovieObj}) {
    const [hover, setHover] = useState(false);
    const [movieOverview, setMovieOverview] = useState(movie.overview.slice(0, 100) + (movie.overview.length > 100 ? '...' : ''));
    const [clicked , setClicked] = useState(false)

    return (
      <div className='movieDiv'>
        <div className='poster-div' onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}} style={{position: 'relative', top: '0'}}>
          <div style={{position: 'absolute', zIndex: '-1', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)'}}>{movie.title}</div>
          <img className='poster' style={{position: 'absolute', display: 'flex', zIndex: '1', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row'}} src={`https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`} alt = {`${movie.title}`}/>
          <i style={{position: 'absolute', zIndex: '2', color: 'rgba(128,128,128,0.6)', opacity: '1', fontSize: '4.1rem', top: '3px', left: '0'}} className="fa-solid fa-bookmark">
            <i style={{position: 'absolute', zIndex: '2', color: 'rgba(0,0,0,0.6)', fontSize: '3.6rem', top: '0', left: '3px'}} className="fa-solid fa-bookmark">
              {clicked ? (
                <i onClick={() => {setClicked(false)}} style={{position: 'absolute', zIndex: '2', color: 'rgba(255,255,0,0.6)', top: '3px', left: '0', fontSize: '1.2rem', top : '18px', left : '11px'}} className="fa-solid fa-star">
                </i>
              ) : (
                <i onClick={() => {setClicked(true)}} style={{position: 'absolute', zIndex: '2', color: 'rgba(255,255,255,0.6)', top: '3px', left: '0', fontSize: '1.2rem', top : '18px', left : '11px'}} className="fa-regular fa-star">
                </i>
              )}
            </i>
          </i>
        </div>
        <div style={{margin: '5px'}}>
          <div style={{fontSize: '12px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif', fontWeight: '400', height: '64px'}}>{movieOverview}</div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin : '12px'}}>
            <Link to={`/movie/${movie.id}`} style={{position: 'relative', bottom: '15px', height: '20px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px'}}>Learn More...</Link>
            <i onClick = {() => {setDisplay(true); setMovieObj(movie)}} style={{color: 'white', cursor: 'pointer', fontSize: '1.2rem', marginLeft: '10px'}} className="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>
    )    
}
