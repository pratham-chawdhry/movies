import React, { useState, useEffect } from 'react'
import { useMemo } from 'react'
import './MovieDetail.css'
import MovieDetailTwo from './MovieDetailTwo'
import MovieCastDetailsOne from './MovieCast/MovieCastDetailsOne'

export default function MovieDetailOne() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const url = window.location.href;
  const id = useMemo(() => url.split("/").pop(), [url]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=294c3bed71b4dc93880885f944b67ed6`
    fetch(url)
      .then(response => response.json())
      .then(data => {setData(data); setLoading(false)})
      .catch(error => console.log(error))
  })

  const [clicked, setClicked] = useState(false)
  return (
    !loading && (<div style={{backgroundColor: '#ffffff'}}>
      <div className='movieDiv' style={{position: 'relative',backgroundColor: '#ffffff', height: '745px', width : '1536px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'scroll'}}>
      {loading ? <h1>Loading...</h1> : (
        <div style={{position: 'absolute',height: '745px', width: '1536vw', left: '0px'}}>
          <div style={{position: 'absolute', zIndex: '0',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style = {{height: '742px'}} src ={`https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
            <div style={{width:'228px'}}></div>
          </div>
          <div style={{position: 'absolute', zIndex: '1',display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1536px', height: '745px', backgroundImage: 'linear-gradient(70deg, rgba(10,10,10,0) 30%,rgba(10,10,10,1) 75%)'} }>
          <div style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', fontFamily: 'Garamond', padding: '10px', borderRadius: '5px', fontSize: '24px', fontWeight: 'bold', position: 'absolute', left: '50px', bottom: '50px'}}>
            <div style={{fontFamily: 'Garamond', padding: '0px', margin: '0px', fontSize: '40px', lineHeight: '1.2'}}>
              {data.original_title} ({data.release_date.slice(0, 4)})
            </div>
            <div style={{fontSize: '14px', lineHeight: '1.2'}}>
              {data.genres.map((genre, index) => (
                <span key={index}>
                  {genre.name}{index !== data.genres.length - 1 && " • "}
                </span>
              ))}
              </div>
            </div>
            <div style={{width: '520px', height: '745px', fontFamily: 'Garamond', position: 'absolute', right: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap : '20px'}}>
              <div style={{ position: 'absolute', color: 'grey', top : '10px', left : '25px', right: '25px', fontSize: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Garamond', fontStyle: 'italic', height : '85px'}}>{data.tagline}</div>
              <div style={{width: '520px', height: '350px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap : '20px', position: 'absolute', top : '105px'}}>
                <div style={{position: 'absolute', top : '0px', width: '520px', height: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap : '20px'}}>
                  <img style = {{height: '350px', borderRadius: '5px', position: 'absolute', top : '3px', left : '25px'}} src ={`https://image.tmdb.org/t/p/original${data.poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
                  <i style={{position: 'absolute', zIndex: '5', color: 'rgba(128,128,128,0.8)', opacity: '1', fontSize: '6.1rem', top: '0px', left: '28px'}} className="fa-solid fa-bookmark">
                    <i style={{position: 'absolute', zIndex: '5', color: 'rgba(0,0,0,0.6)', fontSize: '5.6rem', top: '-3px', left: '3px'}} className="fa-solid fa-bookmark">
                      {clicked ? (
                      <i style={{position: 'absolute', zIndex: '6', color: 'yellow', top: '0px', left: '0', fontSize: '1.8rem', top : '28px', left : '17px'}} className='fa-solid fa-star' onClick={() => {setClicked(false)}}/>
                      ) : (
                        <i style={{position: 'absolute', zIndex: '6', color: 'rgba(255,255,255,0.6)', top: '0px', left: '0', fontSize: '1.8rem', top : '28px', left : '17px'}}className='fa-regular fa-star' onClick={() => {setClicked(true)}}/>
                      )}
                    </i>
                  </i>
                </div>
                <div style={{position: 'absolute', zIndex: '5', color: 'white', fontSize: '20px', fontFamily: 'Garamond', fontWeight: 'bold', left : '280px', top: '30px'}}>
                  <div style={{color: 'grey', fontSize: '13px', fontWeight: 'bold'}}>Rating:</div>
                  <div style={{color: 'white', fontSize: '45px', fontFamily: 'Garamond', fontWeight: 'bold'}}>{data.vote_average}
                    <i style={{color: 'yellow', fontSize: '2rem', marginLeft: '5px'}} className='fa-solid fa-star'/>
                  </div>
                  <div style={{color: 'grey', fontSize: '13px', fontWeight: 'bold', marginTop: '10px'}}>Votes: </div>
                  <div style={{color: 'white', fontSize: '45px', fontFamily: 'Garamond', fontWeight: 'bold'}}>{data.vote_count}
                   <i style={{color: 'rgb(200, 200, 250)', fontSize: '2.5rem', marginLeft: '5px', marginBottom: '-5px'}} className='fa-solid fa-check-to-slot'/>
                  </div>
                  <div style={{color: 'grey', fontSize: '13px', fontWeight: 'bold', marginTop: '10px'}}>Runtime: </div>
                  <div style={{color: 'white', fontSize: '45px', fontFamily: 'Garamond', fontWeight: 'bold'}}>{data.runtime} 
                    <span style={{color: 'white', fontSize: '25px', marginLeft: '7px', fontFamily: 'Garamond', fontWeight: 'bold'}}>mins
                    <i className="fa-regular fa-clock" style={{marginLeft: '7px', fontSize: '30px', color: 'rgb(200, 0, 0)'}}></i></span>
                  </div>
                  <div style={{color: 'grey', fontSize: '13px', fontWeight: 'bold', marginTop: '10px'}}>Release Date: </div>
                  <div style={{color: 'white', fontSize: '45px', fontFamily: 'Garamond', fontWeight: 'bold'}}>{data.release_date} 
                  </div>
                </div>
              </div>
              <div style={{position: 'absolute', zIndex: '5', color: 'white', fontSize: '20px', fontFamily: 'Garamond', color : 'grey', left : '20px', fontWeight: 'bold', top: '470px' , height: '30px'}}>Overview: {data.language === 'en' ? null : data.title}</div>
              <div className='movie-info scroll' style={{color: 'white', fontSize: '20px', fontWeight: 'bold', height: '120px', overflowY: 'scroll', position: 'absolute', fontSize: '15px', fontFamily: 'Garamond', fontStyle: 'italic', fontWeight: '300', right: '20px', top: '495px', left: '20px'}}>{data.overview}</div>
              <div style={{position: 'absolute', zIndex: '5', color: 'white', fontSize: '20px', fontFamily: 'Garamond', fontWeight: 'bold', left : '20px', bottom: '30px', height: '100px', width: '524px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', position: 'absolute', right: '50px'}}>
                <button style={{position: 'relative',  bottom: '15px', borderRadius: '4px', fontSize: '17px', fontFamily: 'Garamond', fontWeight: '400', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '160px', marginTop: '5px', height: '55px', border: 'none'}}> <i style={{width: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', fontSize: '2rem'}} className="fa-solid fa-play"></i><span>Play Trailers</span></button>
              </div>
            </div>
          </div>
        </div>
      )}
      {
        !loading && <MovieDetailTwo id={id}/>
      }
      {/* {
        !loading && <MovieCastDetailsOne id={id}/>
      } */}
      </div>
    </div>)
  )
}
