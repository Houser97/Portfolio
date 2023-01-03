import React from 'react'
import '../styles/NavLinks.css'

const NavLinks = ({activeLink,setActiveLink}) => {
  return (
    <div className='buttons-header'>
        <a href='#home' className={`Home-btn btn ${activeLink === 'Home' ? 'selected-link' : ''}`}
        onClick={() => setActiveLink('Home')}>Home</a>
        <a href='#about' className={`About-btn btn ${activeLink === 'About' ? 'selected-link' : ''}`}
        onClick={() => setActiveLink('About')}>About</a>
        <a href='#projects' className={`Projects-btn btn ${activeLink === 'Projects' ? 'selected-link' : ''}`}
        onClick={() => setActiveLink('Projects')}>Projects</a>
    </div>
  )
}

export default NavLinks