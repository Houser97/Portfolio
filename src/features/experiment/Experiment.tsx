import { useParams } from "react-router-dom";
import { PageTransition } from "@/shared/components/PageTransition/PageTransition";
import { experiments } from "@/data/projects/experiments";

import { ProjectDetailLayout } from "../project/components/ProjectDetailLayout";
import { NextExperiment } from "@/shared/factories/createNextComponent";
import { useProjectScrollAnimationReturn } from "../project/hooks/useProjectScrollAnimationReturn";


const Experiment = () => {
  const { id } = useParams();
  const projectIndex = experiments.findIndex((p) => p.id === id);
  const project = experiments[projectIndex];
  const nextProjectId = experiments[(projectIndex + 1) % experiments.length].id;

  const { projectHeaderRef, wrapperRef, snapshotsSectionRef, progressBarRef } =
    useProjectScrollAnimationReturn();

  return (
    <ProjectDetailLayout
      project={project}
      projectHeaderRef={projectHeaderRef}
      wrapperRef={wrapperRef}
      snapshotsSectionRef={snapshotsSectionRef}
      progressBarRef={progressBarRef}
      nextProjectComponent={<NextExperiment projectId={nextProjectId} />}
      showCompanyInfo={false}
    />
  );
};

const ExperimentTransition = PageTransition(Experiment);
export default ExperimentTransition;
