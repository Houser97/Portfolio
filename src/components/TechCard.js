import React from 'react'
import '../styles/TechCard.css'

const TechCard = ({classIcon, text}) => {
  return (
    <div className='app__TechCard'>
        <i className={classIcon}></i>
        <div className='app__TechCard-text'>{text}</div>
    </div>
  )
}

export default TechCard