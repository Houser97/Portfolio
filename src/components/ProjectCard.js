import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = ({reversed}) => {
  return (
    <div className='app__project-card'>
        {!reversed ?  
            <div className='app__project-subcontainer'>
                <div className='project-img-container'>
                    <span className='project-card-decoration'></span>
                    <div className='project-img'></div>
                </div>
                <div className='project-description'>

                </div>
            </div>
        : 
            <div className='app__project-subcontainer-reversed'>
                <div className='project-description'>

                </div>
                <div className='project-img-container-reversed'>
                    <span className='project-card-decoration-reversed'></span>
                    <div className='project-img'></div>
                </div>
            </div>
        }
    </div>
  )
}

export default ProjectCard