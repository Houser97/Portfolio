import { ProjectType } from '../../assets/constants';
import '../styles/ProjectCard.css'
import ProjectCardV1 from './ProjectCardV1'
import ProjectCardV2 from './ProjectCardV2'

interface Props {
  reversed: boolean;
  project: ProjectType;
}

const ProjectCard = ({reversed, project}: Props) => {
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