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
                    <div className='description-part'>{description}</div>
                    <div className='tecnologies-project'>
                        <h3>Tecnologies:</h3>
                        <div className='tecnologies-list'>
                            {technologies.join(', ')}
                        </div>
                    </div>
                    <div className='preview-code-links'>
                        <div className='link-project github-link'>
                            Github
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                            </svg>
                        </div>
                        <div className='link-project preview-link'>
                            Live Preview
                            <svg className='arrow preview-arrow'  viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        : 
            <div className='app__project-subcontainer-reversed'>
                <div className='project-description'>
                    <div className='description-part'>{description}</div>
                    <div className='tecnologies-project'>
                        <h3>Tecnologies:</h3>
                        <div className='tecnologies-list'>
                            {technologies.join(', ')}
                        </div>
                    </div>
                    <div className='preview-code-links'>
                        <div className='link-project github-link'>
                            Github
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                            </svg>
                        </div>
                        <div className='link-project preview-link'>
                            Live Preview
                            <svg className='arrow preview-arrow'  viewBox="0 0 24 24">
                                <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
                            </svg>
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