import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = ({reversed, image, description, technologies}) => {
  return (
    <div className='app__project-card'>
        {!reversed ?  
            <div className='app__project-subcontainer'>
                <div className='project-img-container project-img-container-commun'>
                    <span className='project-card-decoration'></span>
                    <img className='project-img' src={image}></img>
                </div>
                <div className='project-description'>
                    {description}
                    <div className='tecnologies-project'>
                        <h3>Tecnologies:</h3>
                        <div className='tecnologies-list'></div>
                    </div>
                </div>
            </div>
        : 
            <div className='app__project-subcontainer-reversed'>
                <div className='project-description'>
                    {description}
                    <div className='tecnologies-project'>
                        <h3>Tecnologies:</h3>
                        <div className='tecnologies-list'>
                            React, MongoDB, Node JS, Express
                        </div>
                    </div>
                </div>
                <div className='project-img-container-reversed project-img-container-commun'>
                    <span className='project-card-decoration-reversed'></span>
                    <img className='project-img' src={image}></img>
                </div>
            </div>
        }
    </div>
  )
}

export default ProjectCard