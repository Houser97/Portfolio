import React, { useEffect, useState } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useWindowSize from '../hooks/windowSizeHook'
import { projects } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const windowSize = useWindowSize();

  const [isMobile, setIsMobile] = useState(windowSize.width <= 580)

  useEffect(() => {
    if(windowSize.width <= 580){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize])

  useEffect(() => {
    const decorationYValues = {
      yStart: isMobile ? '-5%':'0%',
      yEnd: isMobile ? '5%':'12%',
    }

    const cardYValues = {
      yStart: isMobile ? '-5%':'30%',
      yEnd: isMobile ? '-10%':'-24%',
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
        <span className='project-helper-header' id='projects'></span>
        <h1 className='projects-title'>
          <span className='color-line-left color-line'></span>
          <div className='section-title-container'>Projects</div>
          <span className='color-line-right color-line'></span>
        </h1>
        <div className='app__projects-subcontainer'>
            {projects.map((project, index) => {
              return(
                <ProjectCard reversed={index%2 ? true : false} 
                image = {project.image} 
                description = {project.description}
                technologies = {project.technologies}/>
              )
            })}
        </div>
    </div>
  )
}

export default Projects