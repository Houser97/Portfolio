import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import NavLinks from './NavLinks'
import ToggleButton from './ToggleButton'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [isAtTop, setIsAtTop] = useState(false)

  useEffect(() => {
    if(document.documentElement.scrollTop !== 0){
      setIsAtTop(false)
    } else {
      setIsAtTop(true)
    }
    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop !== 0){
        setIsAtTop(false)
      } else {
        setIsAtTop(true)
      }
    })
  }, [])

  return (
    <header>
        <div className={`header-backgound ${isAtTop ? '':'not-at-top-header'}`}></div>
        <div className={`app__header-subcontainer ${isAtTop ? '':'not-at-top'}`}>
            <div className='app_header-logo'>Logo</div>

            <div className='app__header-btns'>
              <NavLinks />
            </div>

            <ToggleButton toggle = {toggle} setToggle ={setToggle}/>

            <nav className={`${toggle ? `${isAtTop ? 'show-nav-at-top':'show-nav-not-at-top'}`:''}`}>
              <NavLinks />
              <div className={`helper-nav ${isAtTop ? 'delay-background':'not-at-top-nav-helper'} `}></div>
            </nav>
        </div>
    </header>
  )
}

export default Header