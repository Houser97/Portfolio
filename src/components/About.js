import React from 'react'
import '../styles/About.css'
import { icons } from '../constants'
import TechCard from './TechCard'
import SectionTitle from './SectionTitle'

export const About = () => {
  return (
    <div className='app__about'>
        <span className='about-anchor-helper' id = 'about'></span>
        <div className='app_about-subcontainer'>
            <SectionTitle title={'About'}/>
            <div className='personal-data-container'>
              <div className='about-text'>
                Hello, my name is Arturo Rivera, a mechatronics engineer whose interest has gravitated to 
                the programming area. Web development, especially, captured my interest for all the 
                technologies involved and the great opportunity to develop my problem solving skills, 
                which motivated me to learn it in a self-taught way. My learning is still ongoing and 
                always will be, but this journey has helped me develop study habits to make the most of my 
                time and keep pace with new emerging technologies and best practices.
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
