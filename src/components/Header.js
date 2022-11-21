import React, { useEffect, useState } from 'react'
import '../styles/Header.css'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
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
                <a href='#home' className={`Home-btn btn ${activeLink === 'Home' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Home')}>Home</a>
                <a href='#about' className={`About-btn btn ${activeLink === 'About' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('About')}>About me</a>
                <a className={`Skills-btn btn ${activeLink === 'Skills' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Skills')}>Skills</a>
                <a href='#projects' className={`Projects-btn btn ${activeLink === 'Projects' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Projects')}>Projects</a>
            </div>

            <div className='app_header-btn-toggle' onClick={() => setToggle(prev => !prev)}>
              {/*<svg className={`app_header-hamburger app_header-svg ${toggle ? 'hide-svg' : ''}`} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
              <svg className={`app_header-close app_header-svg ${toggle ? 'show-svg' : 'hide-svg'}`} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>*/}
              <span className={`upper-line-nav ${toggle ? 'upper-animate return-animation' : 'line-navbar'}`}></span>
              <span className={`middle-line-nav ${toggle ? 'middle-animate return-animation' : 'line-navbar'}`}></span>
              <span className={`lower-line-nav ${toggle ? 'lower-animate return-animation' : 'line-navbar'}`}></span>
            </div>

            <nav className={`${toggle ? 'show-nav':''} ${isAtTop ? '':'not-at-top-nav'}`}>
               <a href='#home' className={`Home-btn btn ${activeLink === 'Home' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Home')}>Home</a>
                <a href='#about' className={`About-btn btn ${activeLink === 'About' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('About')}>About me</a>
                <a href='#skills' className={`Skills-btn btn ${activeLink === 'Skills' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Skills')}>Skills</a>
                <a href='#projects' className={`Projects-btn btn ${activeLink === 'Projects' ? 'selected-link' : ''}`}
                onClick={() => setActiveLink('Projects')}>Projects</a>
                <div className={`helper-nav ${isAtTop ? 'delay-background':'not-at-top-nav'} `}></div>
            </nav>
        </div>
    </header>
  )
}

export default Header