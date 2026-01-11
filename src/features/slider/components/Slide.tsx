
import { useRef } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";


import { SlideData } from "@/data/projects/types";
import { animateLinesOnMount } from "@/shared/animations/animateLinesOnMount";


type SlideProps = {
  data: SlideData;
  state: "current" | "entering" | "exiting";
  direction: string;
  index: number;
  total: number;
};

export const Slide = ({ data, state, direction, index, total }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!slideRef.current) return;

      const splits: SplitText[] = [];

      const elements = gsap.utils.toArray<HTMLElement>(
        ".slide-title h2, .slide-description p, .slide-link a, .slide-tags p",
        slideRef.current
      );

      elements.forEach((el) => {
        const split = new SplitText(el, {
          type: "lines",
          mask: "lines",
        });

        splits.push(split);

        if (state === "entering") {
          gsap.set(split.lines, {
            yPercent: 120,
            opacity: 0,
          });
        }
      });

      if (state === "current") {
        elements.forEach((el, i) => {
          animateLinesOnMount(el, {
            delay: 0.2 + i * 0.1,
          });
        });
      }

      return () => {
        splits.forEach((s) => s.revert());
      };
    },
    {
      scope: slideRef,
      dependencies: [state],
    }
  );

  let slideClass = "slide";
  if (state === "exiting") slideClass += ` slide-exit-${direction}`;
  if (state === "entering")
    slideClass += ` slide-enter slide-enter-${direction}`;

  return (
    <div className={slideClass} ref={slideRef}>
      <div className="slide-img">
        <img
          src={data.slideImg}
          alt=""
          className={state === "entering" ? "img-enter" : ""}
        />
      </div>

      <div className="slide-header">
        <div className="slide-title">
          <h2>{data.slideTitle}</h2>
        </div>
        <div className="slide-description">
          <p>{data.slideDescription}</p>
        </div>
        <div className="slide-link">
          <Link to={data.slideUrl}>View Project</Link>
        </div>
      </div>

      <div className="slide-info">
        <div className="slide-tags">
          <p className="mono">Tags</p>
          {data.slideTags.map((tag: string, i: number) => (
            <p key={i} className="mono">
              {tag}
            </p>
          ))}
        </div>

        <div className="slide-index-wrapper">
          <p className="mono">{String(index + 1).padStart(2, "0")}</p>
          <p className="mono">/</p>
          <p className="mono">{String(total).padStart(2, "0")}</p>
        </div>
      </div>
    </div>
  );
};
