import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Menu.css'
import GenreMenu from './GenreMenu'

export default function Menu({query, genreDisplay, setGenreDisplay, setVotes, rating, setRating, releaseDate, setReleaseDate, maxReleaseDate, setMaxReleaseDate, favoritesOnly, setFavoritesOnly}) {
  const [searchInput, setSearchInput] = useState(query || '')
  const navigate = useNavigate()
  const username = localStorage.getItem('username') || 'User'

  const handleGenres = (name, checked) => {
    if (checked) {
      setGenreDisplay(genreDisplay => [...genreDisplay, name])
    } 
    else {
      setGenreDisplay(genreDisplay.filter(genre => genre !== name))
    }
  }

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchInput.trim())}`)
      window.location.reload()
    }
  }

  const handleSearchKey = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className = "menu" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: '0px', paddingRight: '0px', width : '310px', height : '100vh', gap : '5px', position : 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: "35px", width:'50px', backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.2))', height : '100vh', left : '0px', position : 'absolute'}}>
        <i className="fa-brands fa-searchengin" style={{color: 'white', fontSize: '2rem'}}></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} className="fa-solid fa-house fa-fw"></i>
        <i style={{color: 'white', fontSize: '1.8rem'}} className="fa-solid fa-right-to-bracket"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} className="fa-solid fa-tv"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} className="fa-regular fa-star"></i>
        <i style={{color: 'white', fontSize: '1.8rem'}} className="fa-solid fa-person"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} className="fa-solid fa-list"></i>      
      </div>
      <div style={{position: 'absolute', left: '62px'}}>
        {/* Username display */}
        <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px'}}>
          <i className="fa-solid fa-circle-user" style={{color:'#ff4d4d', fontSize:'1.3rem'}}></i>
          <span style={{fontFamily:'Garamond, serif', fontSize:'15px', color:'rgba(255,255,255,0.8)'}}>{username}</span>
        </div>

        <span style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '30px', color: 'white'}}>Movie Filters:</span>

        {/* Search bar */}
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'4px', marginTop:'8px', marginBottom:'4px'}}>
          <div style={{backgroundColor:'white', borderRadius:'3px', display:'flex', alignItems:'center', overflow:'hidden', flex:1}}>
            <input
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              onKeyDown={handleSearchKey}
              placeholder='Search movies...'
              style={{width:'118px', height:'27px', border:'none', outline:'none', padding:'0 8px', fontSize:'13px', fontFamily:'sans-serif'}}
            />
          </div>
          <button
            onClick={handleSearch}
            style={{backgroundImage:'linear-gradient(45deg, #ff4d4d, #ff1a1a)', border:'none', borderRadius:'3px', color:'white', height:'27px', width:'30px', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}
          >
            <i className="fa-solid fa-magnifying-glass" style={{fontSize:'12px'}}></i>
          </button>
        </div>

        {/* Favorites only toggle */}
        <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px', marginTop:'4px'}}>
          <button
            onClick={() => setFavoritesOnly && setFavoritesOnly(!favoritesOnly)}
            style={{
              backgroundImage: favoritesOnly ? 'linear-gradient(45deg, #f5c518, #e5a800)' : 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              border: favoritesOnly ? '1px solid #f5c518' : '1px solid rgba(255,255,255,0.2)',
              borderRadius:'3px', color: favoritesOnly ? '#000' : 'white',
              height:'27px', cursor:'pointer', display:'flex', alignItems:'center', gap:'6px',
              padding:'0 10px', fontFamily:'sans-serif', fontSize:'12px', fontWeight: favoritesOnly ? '700' : '400'
            }}
          >
            <i className={`fa-${favoritesOnly ? 'solid' : 'regular'} fa-star`} style={{color: favoritesOnly ? '#000' : '#f5c518', fontSize:'12px'}}></i>
            {favoritesOnly ? 'Showing Starred' : 'Show Starred Only'}
          </button>
        </div>

      <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '3px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '170px', marginTop: '5px'}}>Genre</label>
      <GenreMenu genreDisplay={genreDisplay} setGenreDisplay={setGenreDisplay} handleGenres={handleGenres}/>
        <div style={{display: 'flex', justifyContent: 'left', flexDirection: 'row', alignItems: 'left', gap: '5px'}}>
          <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '3px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Votes</label>
          <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
            <input onChange={(e) => {if (e.target.value > 0 && e.target.value % 1 === 0) {setVotes(e.target.value)}}} min="1" placeholder="Enter min votes" className="slider" id="myRange" style={{width: '100px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'left', flexDirection: 'row', alignItems: 'left', gap: '5px'}}>
          <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '3px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Rating</label>
          <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
            <input onChange = {(e) => {if (e.target.value >= 0 && e.target.value <= 10) {setRating(e.target.value)}}} min="1" max= "10" placeholder="Enter min rating" className="slider" id="myRange2" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap : '5px'}}>
          <label style={{position: 'relative', bottom: '15px', borderRadius: '3px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px', height : '80px'}}>Release Date</label>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
              <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2px'}}>
                <input onChange={(e) => {setReleaseDate(e.target.value);}} type="date" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
              </div>
            </div>
          <div style={{top: '5px', fontSize: '20px', color: 'white', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot'}}>⇌</div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: '2px', gap :'5px'}}>
            <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2px'}}>
              <input onChange = {(e) => {setMaxReleaseDate(e.target.value)}} type="date" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
