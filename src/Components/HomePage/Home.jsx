import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter a username')
      return
    }
    localStorage.setItem('username', username.trim())
    navigate('/search?query=Rocky')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className='home' style={{height: '100vh', background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)'}}>
      <div className = 'login' style={{background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)'}}>
        <div style={{textAlign:'center', marginBottom: '10px'}}>
          <div style={{fontFamily:'Garamond, serif', fontSize:'42px', color:'white', fontWeight:'700', letterSpacing:'2px'}}>
            🎬 CineSearch
          </div>
          <div style={{fontFamily:'Garamond, serif', fontSize:'15px', color:'rgba(255,255,255,0.5)', marginTop:'4px'}}>
            Discover your next favourite film
          </div>
        </div>

        <div className='details'>
          <label className='label-design'>Username</label>
          <input
            className='input-design'
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Enter username'
            style={{background:'rgba(255,255,255,0.1)', color:'white', border:'1px solid rgba(255,255,255,0.2)', paddingLeft:'10px'}}
          />
        </div>
        <div className='details'>
          <label className='label-design'>Password</label>
          <input
            className='input-design'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Enter password'
            style={{background:'rgba(255,255,255,0.1)', color:'white', border:'1px solid rgba(255,255,255,0.2)', paddingLeft:'10px'}}
          />
        </div>

        {error && <div style={{color:'#ff4d4d', fontSize:'13px', textAlign:'center', fontFamily:'sans-serif'}}>{error}</div>}

        <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
          <button
            onClick={handleLogin}
            style={{
              backgroundImage:'linear-gradient(45deg, #ff4d4d, #ff1a1a)',
              color:'white',
              border:'none',
              borderRadius:'6px',
              padding:'10px 50px',
              fontSize:'16px',
              fontFamily:'Garamond, serif',
              fontWeight:'600',
              cursor:'pointer',
              letterSpacing:'1px',
              boxShadow:'0 4px 20px rgba(255,77,77,0.4)',
              transition:'transform 0.1s ease'
            }}
            onMouseOver={e => e.target.style.transform = 'scale(1.03)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}
