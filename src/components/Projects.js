import React, { useEffect } from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'
import SectionTitle from './SectionTitle'
import gsap from 'gsap'
import useWindowSize from '../hooks/useWindowSize'

const Projects = () => {

  const { isMobile } = useWindowSize(700);

  useEffect(()=> {
    gsap.set('.projects-note', {opacity: 0, y:50});
    gsap.to('.projects-note', {
      duration: 1,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.projects-note',
        scroller: 'body',
        start: 'top 80%',
      }
    })
  }, [isMobile]);

  return (
    <div className='app__projects'>
        <span className='project-helper-header' id='projects'></span>
        <SectionTitle title={'Projects'} />
        <div className='projects-note'>My frontend projects have been deployed on <b>GitHub Pages</b>. As for the full-stack projects, a free-tier <b>Render</b> plan was employed, so the live preview may take a few seconds while the server starts up.</div>
        <div className='app__projects-subcontainer'>
            {projects.map((project, index) => {
              return(
                <ProjectCard reversed={index%2 ? true : false} 
                key = {`project-card-${index}`} 
                project = {project} />
              )
            })}
        </div>
    </div>
  )
}

export default Projects