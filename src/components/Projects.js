import React, { useEffect } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useEffect(() => {

    const decorationYValues = {
      yStart: '0%',
      yEnd: '12%',
      yStartMobile: '-5%',
      yEndMobile: '5%',
    }

    const cardYValues = {
      yStart: '30%',
      yEnd: '-24%',
      yStartMobile: '-5%',
      yEndMobile: '5%',
    }
    
    gsap.utils.toArray('.project-description').forEach(project => {
      gsap.set(project, {
          y: cardYValues.yStart,
      });

      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
        y: cardYValues.yEnd
      })
    });

    gsap.utils.toArray('.project-card-decoration').forEach(decoration => {
      gsap.set(decoration, {
          y: decorationYValues.yStart,
      });

      gsap.to(decoration, {
        scrollTrigger:{
          trigger: decoration,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
        y: decorationYValues.yEnd,
      })
    });

    gsap.utils.toArray('.project-card-decoration-reversed').forEach(decoration => {
      gsap.set(decoration, {
        y: decorationYValues.yStart,
      });

      gsap.to(decoration, {
        scrollTrigger: {
          trigger: decoration,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2
        },
        y: decorationYValues.yEnd,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(animation => animation.kill())
    }
  }, [])
  

  return (
    <div className='app__projects'>
        <h1 className='projects-title'>Projects</h1>
        <div className='app__projects-subcontainer'>
            <ProjectCard reversed = {false}/>
            <ProjectCard reversed = {true}/>
            <ProjectCard reversed = {false}/>
        </div>
    </div>
  )
}

export default Projects