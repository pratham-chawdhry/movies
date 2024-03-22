import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import background from '../../Images/background.jpg'

export default function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${background})`, height: '100vh'}}>
      <div className = 'login'>
        <div className='details'>
            <label className='label-design'>Username</label>
            <input className='input-design'></input>
        </div>
        <div className='details'>
            <label className='label-design'>Password</label>
            <input className='input-design'></input>
        </div>
        <Link to = "/AbhinavTheSkeleton/1">Abhinav</Link>
      </div>
    </div>
  )
}
