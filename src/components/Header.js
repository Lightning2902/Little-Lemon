import React from 'react'
import Logo from '../images/Asset 16@4x.png'

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt="Logo" className='logo'/>
    </div>
  )
}

export default Header