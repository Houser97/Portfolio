import React from 'react'
import '../styles/Projects.css'
import ProjectCard from './ProjectCard'


const Projects = () => {

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