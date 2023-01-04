import React from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'
import SectionTitle from './SectionTitle'

const Projects = () => {

  return (
    <div className='app__projects'>
        <span className='project-helper-header' id='projects'></span>
        <SectionTitle title={'Projects'} />
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