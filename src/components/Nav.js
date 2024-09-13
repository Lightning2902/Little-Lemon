import React from 'react'

function Nav() {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/Home"className='nav-btn'>Home</a></li>
        <li><a href="/About"className='nav-btn'>About</a></li>
        <li><a href="/Contact"className='nav-btn'>Contact</a></li>
        <li><a href="/Reservation"className='nav-btn'>Reservation</a></li>
        <li><a href="/Order Online"className='nav-btn'>Order Online</a></li>
        <li><a href="/Login"className='nav-btn'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav