import React from "react";
import { symbols } from "@/data/symbols";
import { Experiment, Project } from "@/data/projects/types";


interface ProjectDetailLayoutProps {
  project: Project | Experiment;
  projectHeaderRef: React.RefObject<HTMLElement>;
  wrapperRef: React.RefObject<HTMLDivElement>;
  snapshotsSectionRef: React.RefObject<HTMLDivElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  nextProjectComponent: React.ReactNode;
  showCompanyInfo?: boolean;
}

export const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({
  project,
  projectHeaderRef,
  wrapperRef,
  snapshotsSectionRef,
  progressBarRef,
  nextProjectComponent,
  showCompanyInfo = false,
}) => {
  return (
    <>
      <div className="home-spotlight-top-bar">
        <div className="container">
          <div className="symbols-container">
            <div className="symbol">
              <img src={symbols.s1Dark} alt="Symbol" />
            </div>
          </div>
          <div className="symbols-container">
            <div className="symbol">
              <img src={symbols.s1Dark} alt="Symbol" />
            </div>
          </div>
        </div>
      </div>

      <section ref={projectHeaderRef} className="project-header">
        <div className="container">
          <div className="project-title">
            <h3>{project.title}</h3>
          </div>
          <div className="project-header-divider"></div>
          <div className="project-meta">
            {showCompanyInfo ? (
              <div className="project-meta-col">
                <p>{(project as Project).context.company}</p>
                <p>{(project as Project).context.location}</p>
              </div>
            ) : (
              <div className="project-meta-col">
                <a href={(project as Experiment).links?.live}>
                  <span>▶</span> Website
                </a>
                <br />
                <a href={(project as Experiment).links?.github}>
                  <span>▶</span> GitHub
                </a>
              </div>
            )}
            <div className="project-meta-col">
              <div className="project-meta-sub-col">
                <p>{project.context.year}</p>
                <p>{project.context.role}</p>
              </div>
              <div className="project-meta-sub-col">
                <p>{project.context.scope}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-banner-img">
        <div className="container">
          <img src={project.images[1]} alt="Banner" />
        </div>
      </section>

      <section className="project-overview">
        <div className="container">
          <div className="project-overview-col"></div>
          <div className="project-overview-col">
            <div className="project-stack">
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.2"
              >
                <span>&#9654;</span> Stack
              </p>
              <br />
              {project.stack.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>

            <div className="project-overview-copy">
              <p>
                <span>&#9654;</span> Background
              </p>
              <br />
              <p>
                {project.background.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    <br />
                    <p>{paragraph}</p>
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-snapshots" ref={snapshotsSectionRef}>
        <div className="home-spotlight-top-bar">
          <div className="container">
            <div className="symbols-container">
              <div className="symbol">
                <img src={symbols.s1Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s2Light} alt="Symbol" />
              </div>
            </div>
            <div className="symbols-container">
              <div className="symbol">
                <img src={symbols.s2Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s1Light} alt="Symbol" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-spotlight-bottom-bar">
          <div className="container">
            <p
              className="mono"
              data-animate-type="scramble"
              data-animate-delay="0.2"
            >
              <span>&#9654;</span> Interface Study
            </p>
            <p
              className="mono"
              data-animate-type="scramble"
              data-animate-delay="0.25"
            >
              / Moodboard
            </p>
          </div>
        </div>

        <div className="project-snapshots-wrapper" ref={wrapperRef}>
          {project.images.slice(2).map((imgSrc, index) => (
            <div className="project-snapshot" key={index}>
              <img src={imgSrc} alt={`Snapshot ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="snapshots-progress-bar">
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      </section>

      <section className="project-info">
        <div className="container">
          <div className="project-info-col"></div>
          <div className="project-info-col">
            {(project as Project).review && (
              <>
                <div className="project-info-copy">
                  <p className="mono">
                    <span>&#9654;</span> Client Review
                  </p>
                  {(project as Project).review!.content.map(
                    (paragraph, index) => (
                      <React.Fragment key={index}>
                        <br />
                        <p>{paragraph}</p>
                      </React.Fragment>
                    )
                  )}
                </div>
                <br />
                <br />
              </>
            )}

            {(project as Experiment).technicalHighlights && (
              <>
                <div className="project-info-copy">
                  <p className="mono">
                    <span>&#9654;</span> Technical Highlights
                  </p>
                  {(project as Experiment).technicalHighlights.content.map(
                    (paragraph, index) => (
                      <React.Fragment key={index}>
                        <br />
                        <p>{paragraph}</p>
                      </React.Fragment>
                    )
                  )}
                </div>
                <br />
                <br />
              </>
            )}

            <div className="project-info-copy">
              <p className="mono">
                <span>&#9654;</span> Results
              </p>
              {project.results.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <br />
                  <p>{paragraph}</p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="next-project">
        <div className="home-spotlight-top-bar">
          <div className="container">
            <div className="symbols-container">
              <div className="symbol">
                <img src={symbols.s1Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s2Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s3Light} alt="Symbol" />
              </div>
            </div>
            <div className="symbols-container">
              <div className="symbol">
                <img src={symbols.s3Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s2Light} alt="Symbol" />
              </div>
              <div className="symbol">
                <img src={symbols.s1Light} alt="Symbol" />
              </div>
            </div>
          </div>
        </div>

        {nextProjectComponent}
      </section>
    </>
  );
};
