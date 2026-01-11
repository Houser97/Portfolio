import { projects } from "@/data/projects/projects";
import { experiments } from "@/data/projects/experiments";
import { slides, experimentSlides } from "@/data/projects/slides";
import { NextProjectCard } from "../../features/project/components/NextProjectCard";

interface CreateNextProjectProps {
  projectId: string;
}

// Factory function to create Next Project components
const createNextProjectComponent = (dataSource: "work" | "personal") => {
  return ({ projectId }: CreateNextProjectProps) => {
    const config =
      dataSource === "work"
        ? { projects, slides, variant: "work" as const }
        : {
            projects: experiments,
            slides: experimentSlides,
            variant: "personal" as const,
          };

    return (
      <NextProjectCard
        projectId={projectId}
        projects={config.projects}
        slides={config.slides}
        variant={config.variant}
      />
    );
  };
};

export const NextProject = createNextProjectComponent("work");
export const NextExperiment = createNextProjectComponent("personal");
