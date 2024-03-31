import React from 'react'
import { useState } from 'react'

export default function Menu({query,genreDisplay, setGenreDisplay}) {
  const [active, setActive] = useState('')

  const myGenres = () => {
    setGenreDisplay(active.split(","))
    window.location.href = `/movies/search?query=${query}&genre=${active}`
  }
  return (
    <div className = "menu" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingLeft: '0px', paddingRight: '0px', width : '310px', height : '100vh', gap : '8px'}}>
      <div style={{display: 'flex', borderRadius: '7px', border: 'none', justifyContent: 'center', alignItems: 'center', width: '215px', height: '50px', background: 'none', color: 'white', backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'}}>
          <input placeholder='Search' onChange = {(e)=> {setActive(e.target.value)}} style={{borderRadius: '5px', border: 'none', width: '165px', height: '35px', background: 'none', color: 'white', marginRight: '5px'}} />
          <i onClick = {() => {myGenres()}} className="fa-brands fa-searchengin" style={{color: 'white', fontSize: '2rem'}}></i>
      </div>
    </div>
  )
}
