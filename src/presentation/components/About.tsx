import { useEffect } from 'react'
import '../styles/About.css'
import { icons } from '../../assets/constants'
import TechCard from './TechCard'
import SectionTitle from './SectionTitle'
import gsap from 'gsap'
import useWindowSize from '../hooks/useWindowSize'

export const About = () => {

  const { isMobile } = useWindowSize(700);

  useEffect(() => {
    gsap.set('.personal-data-container', { opacity: 0, y: 50 });

    gsap.to('.personal-data-container', {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.personal-data-container',
        scroller: 'body',
        start: 'top 80%',
      }
    })
  
  }, [isMobile])


  return (
    <div className='app__about'>
        <span className='about-anchor-helper' id = 'about'></span>
        <div className='app_about-subcontainer'>
            <SectionTitle title={'About'}/>
            <div className='personal-data-container' >
              <div className='about-text'>
              I'm a mechatronics engineer with a strong passion for web development. I'm on a continuous learning journey in this field, driven by the fascination for the technologies it encompasses and the opportunities it provides to enhance problem-solving skills. I'm self-taught, and this path has not only equipped me with the ability to adapt to evolving technologies but has also honed my study habits for efficient learning. I'm committed to staying up-to-date with emerging technologies and best practices as I continue to explore the world of web development.
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
