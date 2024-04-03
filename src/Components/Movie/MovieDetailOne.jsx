import React, { useState, useEffect } from 'react'
import { useMemo } from 'react'

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
  return (
    <div style={{backgroundColor: '#000000', height: '745px', width : '1536px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {loading ? <h1>Loading...</h1> : (
        <div style={{position: 'relative', height: '745px', width: '1536vw'}}>
          <div style={{position: 'absolute', zIndex: '0',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style = {{height: '742px'}} src ={`https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
            <div style={{width:'228px'}}></div>
          </div>
          <div style={{position: 'absolute', zIndex: '1',display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1536px', height: '745px', backgroundImage: 'linear-gradient(70deg, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 75%)'} }>
            <span style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', fontFamily: 'Garamond', padding: '10px', borderRadius: '5px', fontSize: '40px', fontWeight: 'bold', position: 'absolute', left: '50px', bottom: '50px'}}>{data.title} ({data.release_date.slice(0, 4)})</span>
            <div style={{width: '520px', height: '745px', borderLeft: '1px solid white', fontFamily: 'Garamond', position: 'absolute', right: '0px', bottom: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap : '20px'}}>
              <div>
                <img style = {{height: '350px', borderRadius: '5px', position: 'absolute', left : '15px', top : '105px'}} src ={`https://image.tmdb.org/t/p/original${data.poster_path}?api_key=294c3bed71b4dc93880885f944b67ed6`}/>
              </div>
              <div style={{color: 'white', fontSize: '20px', fontWeight: 'bold', height: '350px', position: 'absolute', left: '260px', top: '105px'}}>
              </div>
              {/* <div style={{color: 'white', fontSize: '20px', fontFamily: 'Garamond', position: 'absolute', zIndex: '2', top: '300px', left: '50px'}}>
                {data.overview}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
