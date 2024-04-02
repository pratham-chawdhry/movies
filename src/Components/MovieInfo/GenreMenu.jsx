import React from 'react'
import genres from './Movie'
import { useState } from 'react'

export default function GenreMenu({genreList, setGenreList, handleGenres}) {

  return (
    <div className='scroll' style={{ height: '222px', overflowY: 'auto', marginTop: '5px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '5px'}}>
    {
        genres.map(({ id, name }) => (
        <div key={id} style={{position: 'relative', paddingLeft: '10px', paddingTop : '7px', paddingBottom: '7px', borderRadius: '2px', fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Robot', fontWeight: '300', color: 'white', fontSize: '15px', cursor: 'pointer', height: '23px',backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.2))'}}>
            <span>{name}</span>
            <input onClick={(e) => handleGenres(name, e.target.checked)} defaultChecked={true} type='checkbox' style={{position: 'absolute', right: '10px', top: '10px'}} />
        </div>
        ))
    }
    </div>
  )
}
