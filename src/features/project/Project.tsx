import { useParams } from "react-router-dom";
import { PageTransition } from "@/shared/components/PageTransition/PageTransition";
import { projects } from "@/data/projects/projects";

import { useProjectScrollAnimationReturn } from "@/features/project/hooks/useProjectScrollAnimationReturn";
import { NextProject } from "@/shared/factories/createNextComponent";
import { ProjectDetailLayout } from "./components/ProjectDetailLayout";

import "./Project.css";






const Project = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];
  const nextProjectId = projects[(projectIndex + 1) % projects.length].id;

  const { projectHeaderRef, wrapperRef, snapshotsSectionRef, progressBarRef } =
    useProjectScrollAnimationReturn();

  return (
    <ProjectDetailLayout
      project={project}
      projectHeaderRef={projectHeaderRef}
      wrapperRef={wrapperRef}
      snapshotsSectionRef={snapshotsSectionRef}
      progressBarRef={progressBarRef}
      nextProjectComponent={<NextProject projectId={nextProjectId} />}
      showCompanyInfo={true}
    />
  );
};

const ProjectTransition = PageTransition(Project);
export default ProjectTransition;
