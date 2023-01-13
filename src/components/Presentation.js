import React, { useEffect, useState } from 'react'
import '../styles/Presentation.css'
import svg from '../assets/programming.svg'

export const Presentation = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
  return (
    <div className='app_presentation'>
        <div className={`app_presentation-div hi-card ${mounted ? 'animation-hi' : ''}`}>
            Hi!
        </div>
        <div className={`app_presentation-div name-card ${mounted ? 'animation-name' : ''}`}>
            I am Arturo
        </div>
        {/* 
        <div className={`app_presentation-div lastname-card ${mounted ? 'animation-lname' : ''}`}>
            Arturo
        </div>
        */}
        <div className={`app_presentation-div web-developer-card ${mounted ? 'animation-web-developer' : ''}`}>
           Web Developer
        </div>
        <img className='svg-presentation' src={svg}></img>
    </div>
  )
}
