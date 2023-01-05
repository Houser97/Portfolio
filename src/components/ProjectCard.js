import React from 'react'
import '../styles/ProjectCard.css'
import ProjectCardV1 from './ProjectCardV1'
import ProjectCardV2 from './ProjectCardV2'

const ProjectCard = ({reversed, project}) => {
  return (
    <div className='app__project-card'>
        {!reversed ?  
            <ProjectCardV1 {...project} />
        : 
            <ProjectCardV2 {...project} />
        }
    </div>
  )
}

export default ProjectCard