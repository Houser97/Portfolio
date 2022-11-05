import React from 'react'

const TechCard = ({img, text}) => {
  return (
    <div className='app__TechCard'>
        <img className='app__TechCard-img'>{img}</img>
        <div className='app__TechCard-text'>{text}</div>
    </div>
  )
}

export default TechCard