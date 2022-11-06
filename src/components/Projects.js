import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projects = useRef(null)

  useEffect(() => {
    const ref = projects.current

    gsap.set(ref, {
      autoAlpha: 0,
      y:50,
    })

    gsap.to(ref, {
      scrollTrigger: {
        trigger: ref,
      },
      duration: 1,
      autoAlpha: 1,
      y:0,
      ease: 'power3.out',
    })
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  

  return (
    <div className='app__projects'>
        <div ref={projects} className='app__projects-subcontainer'>
            <ProjectCard reversed = {false}/>
            <ProjectCard reversed = {true}/>
        </div>
    </div>
  )
}

export default Projects