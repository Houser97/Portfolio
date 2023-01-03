import React from 'react'
import '../styles/SectionTitle.css'

const SectionTitle = ({title}) => {
  return (
    <h1 className='app__section-title'>
        <span className='color-line-left color-line'></span>
        <div className='section-title-container'>{title}</div>
        <span className='color-line-right color-line'></span>
    </h1>
  )
}

export default SectionTitle