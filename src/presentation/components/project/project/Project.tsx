import { useRef } from "react";
import { useParams } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

import { PageTransition } from "@/presentation/components/animations/PageTransition/PageTransition";
import { animateLines } from "@/presentation/animations/animateLines";
import { animateWords } from "@/presentation/animations/animateWords";
import { projects } from "@/data/projects/projects";
import "./Project.css";


gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const projectHeaderRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const snapshotsSectionRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const snapshotsSection = snapshotsSectionRef.current;
    const progressBar = progressBarRef.current;

    if (!wrapper || !snapshotsSection) return;

    let headingSplit: SplitText | null = null;

    const heading =
      projectHeaderRef.current?.querySelector(".project-title h3");

    if (heading) {
      headingSplit = new SplitText(heading, {
        type: "words",
        mask: "words",
      });

      animateWords(heading as HTMLHeadingElement, { delay: 0.3 }, headingSplit);
    }


    const lineSplits: SplitText[] = [];

    const prePinElements = gsap.utils.toArray<HTMLElement>(
      ".project-meta p, .project-stack p, .project-overview-copy p, .next-project-title h3, .next-project-meta p"
    );

    prePinElements.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines",
        mask: "lines",
      });

      lineSplits.push(split);

      animateLines(
        el,
        {
          start: "top 85%",
          delay: 0.1,
        },
        split
      );
    });


    const calculateDimensions = () => {
      const wrapperWidth = wrapper.offsetWidth;
      const viewportWidth = window.innerWidth;
      return -(wrapperWidth - viewportWidth);
    };

    let moveDistance = calculateDimensions();

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const horizontalST = ScrollTrigger.create({
      trigger: snapshotsSection,
      start: "top top",
      end: () => `+=${window.innerHeight * 5}px`,
      pin: true,
      scrub: isSafari && isIOS ? 0.5 : 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        moveDistance = calculateDimensions();
      },
      onUpdate: (self) => {
        gsap.set(wrapper, {
          x: self.progress * moveDistance,
          force3D: true,
        });

        if (progressBar) {
          gsap.set(progressBar, {
            width: `${self.progress * 100}%`,
          });
        }
      },
    });

    ScrollTrigger.refresh();


    const postPinElements = gsap.utils.toArray<HTMLElement>(
      ".project-info-copy p"
    );

    postPinElements.forEach((el) => {
      const split = new SplitText(el, {
        type: "lines",
        mask: "lines",
      });

      lineSplits.push(split);

      animateLines(
        el,
        {
          start: "top 90%",
          delay: 0,
        },
        split
      );
    });


    let resizeTimeout: number;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        moveDistance = calculateDimensions();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);


    return () => {
      horizontalST.kill();
      lineSplits.forEach((s) => s.revert());
      headingSplit?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <>
      <div className="home-spotlight-top-bar">
        <div className="container">
          <div className="symbols-container">
            <div className="symbol">
              <img src="/symbols/s1-dark.png" alt="Symbol" />
            </div>
          </div>
          <div className="symbols-container">
            <div className="symbol">
              <img src="/symbols/s1-dark.png" alt="Symbol" />
            </div>
          </div>
        </div>
      </div>

      <section ref={projectHeaderRef} className="project-header">
        <div className="container">
          <div className="project-title">
            <h3>{project?.title}</h3>
          </div>
          <div className="project-header-divider"></div>
          <div className="project-meta">
            <div className="project-meta-col">
              <p>{project?.context.company}</p>
              <p>{project?.context.location}</p>
            </div>
            <div className="project-meta-col">
              <div className="project-meta-sub-col">
                <p>{project?.context.year}</p>
                <p>{project?.context.role}</p>
              </div>
              <div className="project-meta-sub-col">
                <p>{project?.context.scope}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-banner-img">
        <div className="container">
          <img src={project?.images[1]} alt="Banner" />
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
              {project?.stack.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>

            <div className="project-overview-copy">
              <p>
                <span>&#9654;</span> Background
              </p>
              <br />
              <p>
                {project?.background.map((paragraph, index) => (
                  <>
                    <br />
                    <p key={index}>{paragraph}</p>
                    <br />
                  </>
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
                <img src="/symbols/s1-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s2-light.png" alt="Symbol" />
              </div>
            </div>
            <div className="symbols-container">
              <div className="symbol">
                <img src="/symbols/s2-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s1-light.png" alt="Symbol" />
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
          {project?.images.slice(2).map((imgSrc, index) => (
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
            <div className="project-info-copy">
              <p className="mono">
                <span>&#9654;</span> Client Review
              </p>

              {project?.review!.content.map((paragraph, index) => (
                <>
                  <br />
                  <p key={index}>{paragraph}</p>
                </>
              ))}
            </div>
            <br />
            <br />
            <div className="project-info-copy">
              <p className="mono">
                <span>&#9654;</span> Results
              </p>

              {project?.results.map((paragraph, index) => (
                <>
                  <br />
                  <p key={index}>{paragraph}</p>
                </>
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
                <img src="/symbols/s1-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s2-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s3-light.png" alt="Symbol" />
              </div>
            </div>
            <div className="symbols-container">
              <div className="symbol">
                <img src="/symbols/s3-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s2-light.png" alt="Symbol" />
              </div>
              <div className="symbol">
                <img src="/symbols/s1-light.png" alt="Symbol" />
              </div>
            </div>
          </div>
        </div>

        <div className="container next-project-data">
          <div className="next-project-title">
            <h3>Futureschool</h3>
          </div>
          <div className="next-project-header-divider"></div>
          <div className="next-project-meta">
            <div className="next-project-meta-col">
              <p>Futureschool.com</p>
              <p>Website</p>
            </div>
            <div className="next-project-meta-col">
              <div className="next-project-meta-sub-col">
                <p>March 2022</p>
                <p>UI Design, Theme Concept</p>
              </div>
              <div className="next-project-meta-sub-col">
                <p>Client</p>
                <p>Signal Department</p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-spotlight-bottom-bar">
          <div className="container">
            <p className="mono">
              <span>&#9654;</span> Next fragment
            </p>
            <p className="mono">/ Ability Showcase</p>
          </div>
        </div>
      </section>
    </>
  );
};

const ProjectTransition = PageTransition(Project);
export default ProjectTransition;
