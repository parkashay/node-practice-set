import React from 'react'
import {NavLink, Link } from 'react-router-dom'

 function Navbar() {


  return (
    <div className='navbar'>
        <Link to="/" className='appName'>App</Link>
        <ul className='links'>
            <li ><NavLink to="/" className='link'>Home</NavLink></li>
            <li><NavLink to="/news" className='link'>News</NavLink></li>
            <li><NavLink to="/about" className='link'>About</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar