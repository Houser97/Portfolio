import React from 'react'
import '../styles/About.css'
import { icons } from '../constants'
import TechCard from './TechCard'

export const About = () => {
  return (
    <div className='app__about'>
        <span className='about-anchor-helper' id = 'about'></span>
        <div className='app_about-subcontainer'>
            <h1 className='about-title'>About</h1>
            <div className='personal-data-container'>
              <div className='about-text'>
                  Mechatronics engineering graduate who undertook the challenge
                  of learning web development in a self-taugh way. Having said that,
                  I am passionate about the world of technology and the wonders that
                  ingenuity and creativity can bring.
              </div>
              <div className='technologies-container'>
                {
                  icons.map((object, index) => {
                    return(
                      <TechCard key={`tech-${index}`} {...object} />
                    )
                  })
                }
              </div>
            </div>
        </div>
    </div>
  )
}
