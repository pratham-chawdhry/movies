import React from 'react'
import { useState } from 'react'
import './Menu.css'
import GenreMenu from './GenreMenu'

export default function Menu({query,genreDisplay, setGenreDisplay}) {
  const [listOfGenres, setlistOfGenres] = useState('')
  const [vote, setVote] = useState(1)
  const [rating, setRating] = useState(1)
  const [adultMovie, setAdultMovie] = useState(false)

  const myGenres = () => {
    // setGenreDisplay(listOfGenres.split(","))
    // window.location.href = `/movies/search?query=${query}&genre=${listOfGenres}`
    window.location.href = `/movies/search?query=${query}&adult=${adultMovie}&votes=${vote}&rating=${rating}`
  }

  return (
    <div className = "menu" style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', paddingLeft: '0px', paddingRight: '0px', width : '310px', height : '100vh', gap : '5px', position : 'relative'}}>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: "35px", width:'50px', backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.2))', height : '100vh', left : '0px', position : 'absolute'}}>
        <i className="fa-brands fa-searchengin" style={{color: 'white', fontSize: '2rem'}}></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} class="fa-solid fa-house fa-fw"></i>
        <i style={{color: 'white', fontSize: '1.8rem'}} class="fa-solid fa-right-to-bracket"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} class="fa-solid fa-tv"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} class="fa-regular fa-star"></i>
        <i style={{color: 'white', fontSize: '1.8rem'}} class="fa-solid fa-person"></i>
        <i style={{color: 'white', fontSize: '1.5rem'}} class="fa-solid fa-list"></i>      
      </div>
      <div style={{position: 'absolute', left: '62px'}}>
      <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Genre</label>
      <GenreMenu/>
      <div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'white', marginBottom: '5px'}}>Check the genre you want to search</div>
        <div style={{display: 'flex', justifyContent: 'left', flexDirection: 'row', alignItems: 'left', gap: '5px'}}>
          <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Votes</label>
          <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
            <input onChange={(e) => {setVote(e.target.value)}} min="1" placeholder="Enter min votes" className="slider" id="myRange" style={{width: '100px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
          </div>
        </div>
        { vote.trim === '' || (vote >= 0 && vote % 1 === 0) ? (<div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'white'}}>Enter a number greater than 0 </div>): (<div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'rgb(255,0,0)'}}>*Input is not a positive integer</div>)}
        <div style={{display: 'flex', justifyContent: 'left', flexDirection: 'row', alignItems: 'left', gap: '5px'}}>
          <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Rating</label>
          <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
            <input onChange = {(e) => {setRating(e.target.value)}} min="1" max= "10" placeholder="Enter min rating" className="slider" id="myRange" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
          </div>
        </div>
        { rating === "" || (rating >= 0 && rating <= 10) ? (<div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'white'}}>Enter a number between 0-10 </div>): (<div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'rgb(255,0,0)'}}>*Number is not between 0-10</div>)}
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap : '5px'}}>
          <label style={{position: 'relative', bottom: '15px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '100px', marginTop: '5px', width : '50px', height : '80px'}}>Release Date</label>
          <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5px', borderRadius: '2px'}}>
            <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2px'}}>
              <input onChange={(e) => {console.log(e.target.value)}} type="date" placeholder="yyyy-mm-dd" className="slider" id="myRange" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
            </div>
          </div>
          <div style={{top: '5px', fontSize: '20px', color: 'white', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot'}}>⇌</div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: '2px', gap :'5px'}}>
            <div style={{backgroundColor: 'white', width: '114px', height: '27px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '2px'}}>
              <input onChange = {(e) => {console.log(e.target.value)}} type="date" className="slider" id="myRange" style={{width: '114px', height: '23px', borderRadius : '2px', border: 'none',margin: '2px', outline: 'none'}}/>
            </div>
          </div>
        </div>
      </div>
      <div style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '11px', color: 'white'}}>Enter the range of dates </div>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap : '35px'}}>
        <label style={{position: 'relative', bottom: '15px', height: '23px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', padding: '1px 7px', paddingBottom: '4px', textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', width: '50px', marginTop: '5px'}}>Adult</label>
        <span style={{fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontSize: '15px', color: 'white'}}>{adultMovie ? "True" : "False"}</span>
        <input onClick = {() => {setAdultMovie(!adultMovie)}} type="checkbox" style = {{width : '20px', height : '20px', marginTop: '10px', marginLeft: '-10px'}}></input>
      </div>
      <button onClick = {() => {myGenres()}} style={{marginLeft: '32px', marginTop: '5px', height: '33px', borderRadius: '1.5px', fontSize: '15px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', width: '120px', backgroundImage: 'linear-gradient(45deg, #ff4d4d, #ff1a1a)', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'row', top : '0px', marginTop: '5px'}}>Submit</button>
    </div>
  </div>
  )
}
