import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home' style={{height: '100vh'}}>
      <div className = 'login'>
        <div className='details'>
            <label className='label-design'>Username</label>
            <input className='input-design'></input>
        </div>
        <div className='details'>
            <label className='label-design'>Password</label>
            <input className='input-design'></input>
        </div>
        <Link to = "/search?query=Rocky">Abhinav</Link>
      </div>
    </div>
  )
}
