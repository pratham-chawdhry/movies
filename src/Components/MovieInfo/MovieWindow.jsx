import React from 'react'
import { useState } from 'react'
import genres from './Movie'
import {Link} from 'react-router-dom'

export default function MovieWindow({movieObj, setDisplay}) {
    const [clicked , setClicked] = useState(false)
    const [lang,setLang] = useState('original_title');
  return (
    <div style={{backgroundImage: 'linear-gradient(160deg,#222831, #010102)', height: '584px', width: '700px', zIndex: '10', color: 'black',borderRadius: '10px'}}>
        <i style={{position: 'absolute', zIndex: '2', color: 'rgba(128,128,128,0.6)', opacity: '1', fontSize: '6.1rem', top: '-3px', left: '15px'}} className="fa-solid fa-bookmark">
        <i style={{position: 'absolute', zIndex: '2', color: 'rgba(0,0,0,0.6)', fontSize: '5.6rem', top: '-3px', left: '3px'}} className="fa-solid fa-bookmark">
            {clicked ? (
            <i onClick={() => {setClicked(false)}} style={{position: 'absolute', zIndex: '2', color: 'rgba(255,255,0,0.6)', top: '0px', left: '0', fontSize: '1.8rem', top : '28px', left : '17px'}} className="fa-solid fa-star">
            </i>
            ) : (
            <i onClick={() => {setClicked(true)}} style={{position: 'absolute', zIndex: '2', color: 'rgba(255,255,255,0.6)', top: '0px', left: '0', fontSize: '1.8rem', top : '28px', left : '17px'}} className="fa-regular fa-star">
            </i>
            )}
        </i>
        </i>
      <img src = {`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}?api_key=294c3bed71b4dc93880885f944b67ed6`} style = {{borderRadius: '10px',height: '394px'}} alt = "movie poster"/>
      <div style={{position: 'absolute', zIndex: '3', color: 'white', top: '5px', left: '3px', fontSize: '50px', fontFamily: 'Garamond, serif', fontWeight: '400', backgroundImage: 'radial-gradient(ellipse at 0% 0%, rgba(0,0,0,0), rgba(0,0,0,1))', height: '394px', width: '700px'}} ><div style={{position: 'absolute', fontFamily: 'Garamond, serif', bottom : '30px', left : '30px'}}>{movieObj.original_title}</div></div>
      <div style={{position: 'absolute', zIndex: '3', color: 'white', top: '10px', left: '655px', fontSize: '50px', fontFamily: 'Garamond, serif', fontWeight: '400', height: '394px', width: '700px'}}>
        <div onClick = {() => setDisplay(false)} style={{fontFamily: "sans-serif", backgroundImage: 'linear-gradient(160deg, rgba(0,0,0,0), rgba(0,0,0,0))', fontWeight: '100', cursor: 'pointer'}}>x</div>
      </div>
      <div style={{margin: '10px', marginLeft: '20px', color: 'white', fontFamily: 'Garamond, serif', fontSize: '18px', display: 'flex', flexDirection: 'row'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div className= "scroll" style={{flex: '0 0 400px', marginRight: '20px', fontFamily: 'Garamond, serif', fontSize: '15px'}}>
            <div style={{fontSize: '19px', color: 'grey', fontFamily: 'Garamond, serif', fontWeight: '900'}}>Overview: {movieObj.original_language !== 'en'? movieObj.title : null} </div>
            {movieObj.overview}
          </div>
          <div style={{flex: '0 0 190px'}}>
            <div style={{color: 'grey', fontSize: '19px', fontFamily: 'Garamond, serif', fontWeight: '900'}}>Genres:</div>
            <div>{
            movieObj.genre_ids.map((genreId, index) => (
              <span key={index}>{
                genres.map((genre) => (
                  genreId === genre.id ? <span style={{color: 'white', fontSize: '17px', fontFamily: 'Garamond, serif'}} key={index}>{genre.name}, </span> : null
                ))
              }</span>
            ))}</div>
              {movieObj.original_language !== 'en' ? <div style={{color: 'grey', fontSize: '19px', fontFamily: 'Garamond, serif', fontWeight: '900', marginTop: '4px'}}>Language: <span style={{color: 'white', fontSize: '19px', fontFamily: 'Garamond, serif'}}>{movieObj.original_language}</span></div> : null}
              {movieObj.release_date ? <div style={{color: 'grey', fontSize: '19px', fontFamily: 'Garamond, serif', fontWeight: '900', marginTop: '4px'}}>Release Date: <span style={{color: 'white', fontSize: '10px', fontFamily: 'Garamond, serif'}}>{`(YYYY-MM-DD)`}</span> <span style={{color: 'white', fontSize: '17px', fontFamily: 'Garamond, serif'}}>{movieObj.release_date}</span></div> : null}
              <Link to={`/movie/${movieObj.id}`} style={{position: 'relative', bottom: '15px', height: '20px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '100px', marginTop: '5px'}}>Learn More...</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
