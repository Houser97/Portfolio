import React from 'react'
import '../styles/NavLinks.css'

const NavLinks = () => {
  return (
    <div className='buttons-header'>
        <a href='#home' className={`Home-btn btn`}>Home</a>
        <a href='#about' className={`About-btn btn`}>About</a>
        <a href='#projects' className={`Projects-btn btn`}>Projects</a>
    </div>
  )
}

export default NavLinks