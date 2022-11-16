import React, { useEffect } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  useEffect(() => {

    const decorationYValues = {
      yStart: '-10%',
      yEnd: '17%',
    }
    
    gsap.utils.toArray('.app__project-card').forEach(project => {
      gsap.set(project, {
          y: '30%'
      });

      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
          markers: true,
        },
        y: '-30%'
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
        <div className='app__projects-subcontainer'>
            <ProjectCard reversed = {false}/>
            <ProjectCard reversed = {true}/>
            <ProjectCard reversed = {false}/>
        </div>
    </div>
  )
}

export default Projects