import React, { useEffect, useState } from 'react'
import '../styles/Presentation.css'

export const Presentation = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
  return (
    <div className='app_presentation'>
        <div className='circle small-circle-top'></div>
        <div className='circle medium-circle-top'></div>
        <div className='circle large-circle-top'></div>
        <div className={`app_presentation-div hi-card ${mounted ? 'animation-hi' : ''}`}>
            Hi!
        </div>
        <div className={`app_presentation-div name-card ${mounted ? 'animation-name' : ''}`}>
            I'm Arturo
        </div>
        <div className={`app_presentation-div lastname-card ${mounted ? 'animation-lname' : ''}`}>
            Rivera
        </div>
        <div className={`app_presentation-div web-developer-card ${mounted ? 'animation-web-developer' : ''}`}>
           Web Developer
        </div>
        <div className='circle small-circle-bottom'></div>
        <div className='circle medium-circle-bottom'></div>
        <div className='circle large-circle-bottom'></div>
    </div>
  )
}
