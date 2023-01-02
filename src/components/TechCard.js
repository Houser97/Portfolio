import React from 'react'
import '../styles/TechCard.css'

const TechCard = ({classIcon, text, isDevicon}) => {
  return (
    <div className='app__TechCard'>
        {isDevicon ? 
          (<i className={classIcon}></i>)
          :
          (<img src={classIcon} className = 'img-tech'></img>
        )}
        <div className='app__TechCard-text'>{text}</div>
    </div>
  )
}

export default TechCard