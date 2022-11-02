import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <div className='header-subcontainer'>
            <div className='logo-header'>Logo</div>
            <div className='btns-header'>
                <a className='Home-btn'>Home</a>
                <a>Projects</a>
            </div>
        </div>
    </header>
  )
}

export default Header