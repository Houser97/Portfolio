import React from 'react'
import '../styles/Projects.css'
import Animate from './Animate'
import ProjectCard from './ProjectCard'


const Projects = () => {

  return (
    <div className='app__projects'>
        <div className='app__projects-subcontainer'>
          <Animate>
            <ProjectCard reversed = {false}/>
          </Animate>
          <Animate>
            <ProjectCard reversed = {true}/>
          </Animate>
          <Animate>
            <ProjectCard reversed = {false}/>
          </Animate>
        </div>
    </div>
  )
}

export default Projects