import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import background from '../../Images/background.jpg'

export default function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${background})`, height: '100vh'}}>
      Hello
      <div className = 'login'></div>
      <Link to = "/AbhinavTheSkeleton">Abhinav</Link>
    </div>
  )
}
