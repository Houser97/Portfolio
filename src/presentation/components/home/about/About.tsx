import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { animateLines } from "../../../animations/animateLines";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lineSplits: SplitText[] = [];

      const groups = [
        {
          selector: ".home-about-header h3",
          baseDelay: 0.2,
        },
        {
          selector: ".home-about-card h4",
          baseDelay: 0.3,
        },
        {
          selector: ".home-about-card .description",
          baseDelay: 0.3,
        },
      ];

      groups.forEach(({ selector, baseDelay }) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        elements.forEach((el) => {
          const split = new SplitText(el, {
            type: "lines",
            mask: "lines",
          });

          lineSplits.push(split);

          animateLines(
            el,
            {
              delay: baseDelay,
              start: "top 100%",
            },
            split
          );
        });
      });

      return () => {
        lineSplits.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: aboutRef }
  );

  return (
    <section ref={aboutRef} className="home-about">
      <div className="container">
        <div className="home-about-col">
          <div className="symbols-container">
            <div className="symbol">
              <img src="/symbols/s2-light.png" alt="Symbol" />
            </div>
          </div>

          <div className="home-about-header">
            <p className="mono">
              <span>&#9654;</span> Skillset
            </p>
            <h3>I turn ideas into clear, solid, and scalable software.</h3>
          </div>
        </div>

        <div className="home-about-col">
          <div className="home-about-col-row">
            <div className="home-about-card">
              <p className="mono">[ Move 01 ]</p>
              <p className="mono description">
                I analyze the problem, the business context, and technical
                constraints before writing code.
              </p>
              <h4>Strategy</h4>
            </div>

            <div className="home-about-card">
              <p className="mono">[ Move 02 ]</p>
              <p className="mono description">
                I define clear flows, contracts, and structures to reduce rework
                and technical debt.
              </p>
              <h4>Architecture & Flow</h4>
            </div>
          </div>

          <div className="home-about-col-row">
            <div className="home-about-card">
              <p className="mono">[ Move 03 ]</p>
              <p className="mono description">
                Readable code, clear naming, and decisions the whole team can
                understand.
              </p>
              <h4>Clean Design</h4>
            </div>

            <div className="home-about-card">
              <p className="mono">[ Move 04 ]</p>
              <p className="mono description">
                Frontend and backend development focused on maintainability,
                testing, and scalability.
              </p>
              <h4>Development</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
