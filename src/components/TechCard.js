import React from 'react'
import '../styles/TechCard.css'

const TechCard = ({img, text}) => {
  return (
    <div className='app__TechCard'>
        <img className='app__TechCard-img'>{img}</img>
        <div className='app__TechCard-text'>{text}</div>
    </div>
  )
}

export default TechCard