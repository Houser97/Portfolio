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
                        <div className='tecnologies-list'>
                            {technologies.join(', ')}
                        </div>
                    </div>
                    <div className='preview-code-links'>
                        <div className='link-project github-link'>
                            Github
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" />
                            </svg>
                        </div>
                        <div className='link-project preview-link'>
                            Live Preview
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" />
                            </svg>
                        </div>
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
                            {technologies.join(', ')}
                        </div>
                    </div>
                    <div className='preview-code-links'>
                        <div className='link-project github-link'>
                            Github
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" />
                            </svg>
                        </div>
                        <div className='link-project preview-link'>
                            Live Preview
                            <svg className='arrow github-arrow' viewBox="0 0 24 24">
                                <path fill="currentColor" d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" />
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