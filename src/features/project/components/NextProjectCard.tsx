import { Link } from "react-router-dom";

interface ProjectContext {
  company?: string;
  location?: string;
  projectType?: string;
  year: string;
  role: string;
}

interface ProjectLinks {
  live?: string;
  github?: string;
}

interface ProjectData {
  id: string;
  title: string;
  context: ProjectContext;
  links?: ProjectLinks;
}

interface NextProjectCardProps {
  projectId: string;
  projects: ProjectData[];
  slides: Array<{ id: string; slideUrl: string }>;
  variant: "work" | "personal"; 
}

export const NextProjectCard = ({
  projectId,
  projects,
  slides,
  variant,
}: NextProjectCardProps) => {
  const project = projects.find((p) => p.id === projectId);
  const projectUrl = slides.find((s) => s.id === projectId)?.slideUrl || "#";

  if (!project) return null;

  return (
    <>
      <>
        <div className="container next-project-data">
          <Link
            to={projectUrl}
            className="next-project-title next-project-link"
          >
            <h3>{project.title}</h3>
          </Link>

          <div className="next-project-header-divider"></div>
          <div className="next-project-meta">
            <div className="next-project-meta-col">
              <p>
                {variant === "work"
                  ? project.context.location
                  : project.context.projectType}
              </p>
            </div>

            <div className="next-project-meta-col">
              <div className="next-project-meta-sub-col">
                <p>{project.context.year}</p>
                <p>{project.context.role}</p>
              </div>

              <div className="next-project-meta-sub-col">
                {variant === "work" ? (
                  <>
                    <p>Client</p>
                    <p>{project.context.company}</p>
                  </>
                ) : (
                  <>
                    {project.links?.live && (
                      <>
                        <a href={project.links.live}>
                          <span>▶</span> Website
                        </a>
                      </>
                    )}
                    {project.links?.github && (
                      <>
                        <a href={project.links.github}>
                          <span>▶</span> GitHub
                        </a>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>

      <div className="home-spotlight-bottom-bar">
        <div className="container">
          <p className="mono">
            <span>&#9654;</span> Next fragment
          </p>
          <p className="mono">/ Ability Showcase</p>
        </div>
      </div>
    </>
  );
};
