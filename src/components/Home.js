import React, { useEffect } from 'react'
import '../styles/Home.css'
import { Presentation } from './Presentation'
import HomeSvg from './HomeSvg'
import gsap from 'gsap'
import useWindowSize from '../hooks/useWindowSize'

function Home() {

  const { isMobile } = useWindowSize(700);

  useEffect(() => {
    const timeline = gsap.timeline();
  
    gsap.set('.app_presentation', {
      scale: isMobile ? 1 : 2,
      x: isMobile ? 0 : 300,
    });
    gsap.set(['.svg-home', 'header'], { opacity: 0 });
  
    timeline
      .to('.app_presentation', {
        scale: 1,
        x: 0,
        duration: 1,
        delay: 4,
      })
      .to('.svg-home', { opacity: 1, duration: 0.5 }, '-=0.5') 
      .to('header', { opacity: 1, duration: 0.5 }, '<');
  
  }, [isMobile]);

  return (
    <div className='Home' id='home'>
        <Presentation />
        <HomeSvg />
    </div>
  )
}

export default Home