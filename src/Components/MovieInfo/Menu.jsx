import React from 'react'
import action from '../../Images/GenreIcons/Trakt/TraktIcons/action.png'
import adventure from '../../Images/GenreIcons/Trakt/TraktIcons/adventure.png'
import animation from '../../Images/GenreIcons/Trakt/TraktIcons/animation.png'
import comedy from '../../Images/GenreIcons/Trakt/TraktIcons/comedy.png'
import crime from '../../Images/GenreIcons/Trakt/TraktIcons/crime.png'
import documentary from '../../Images/GenreIcons/Trakt/TraktIcons/documentary.png'
import drama from '../../Images/GenreIcons/Trakt/TraktIcons/drama.png'
import family from '../../Images/GenreIcons/Trakt/TraktIcons/family.png'
import fantasy from '../../Images/GenreIcons/Trakt/TraktIcons/fantasy.png'
import history from '../../Images/GenreIcons/Trakt/TraktIcons/history.png'
import horror from '../../Images/GenreIcons/Trakt/TraktIcons/horror.png'
import music from '../../Images/GenreIcons/Trakt/TraktIcons/music.png'
import mystery from '../../Images/GenreIcons/Trakt/TraktIcons/mystery.png'
import romance from '../../Images/GenreIcons/Trakt/TraktIcons/romance.png'
import scienceFiction from '../../Images/GenreIcons/Trakt/TraktIcons/science-fiction.png'
import tvMovie from '../../Images/GenreIcons/Trakt/TraktIcons/tv-movie.png'
import thriller from '../../Images/GenreIcons/Trakt/TraktIcons/thriller.png'
import war from '../../Images/GenreIcons/Trakt/TraktIcons/war.png'
import western from '../../Images/GenreIcons/Trakt/TraktIcons/western.png'

export default function Menu() {
  return (
    <div class = "menu" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingLeft: '0px', paddingRight: '0px', width : '310px', height : '100vh', gap : '8px'}}>
      {/* <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', gap : '8px'}}>
        <div style = {{display: 'flex', flexDirection: 'column', gap : '8px'}}>
          <img className = "genre" src = {action} alt = "action"/>
          <img className = "genre" src = {adventure} alt = "adventure"/>
          <img className = "genre" src = {animation} alt = "animation"/>
          <img className = "genre" src = {comedy} alt = "comedy"/>
          <img className = "genre" src = {crime} alt = "crime"/>
          <img className = "genre" src = {documentary} alt = "documentary"/>
          <img className = "genre" src = {drama} alt = "drama"/>
          <img className = "genre" src = {family} alt = "family"/>
          <img className = "genre" src = {fantasy} alt = "fantasy"/>
       </div>
       <div style = {{display: 'flex', flexDirection: 'column', gap : '8px'}}>
          <img className = "genre" src = {history} alt = "history"/>
          <img className = "genre" src = {horror} alt = "horror"/>
          <img className = "genre" src = {music} alt = "music"/>
          <img className = "genre" src = {mystery} alt = "mystery"/>
          <img className = "genre" src = {romance} alt = "romance"/>
          <img className = "genre" src = {scienceFiction} alt = "science-fiction"/>
          <img className = "genre" src = {tvMovie} alt = "tv-movie"/>
          <img className = "genre" src = {thriller} alt = "thriller"/>
          <img className = "genre" src = {war} alt = "war"/>
      </div>
    </div> */}
    {/* <img className = "genre" src = {western} alt = "western"/> */}
    </div>
  )
}
