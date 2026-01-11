import { useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { animateLinesOnScroll } from "@/shared/animations/animateLinesOnScroll";
import { animateWords } from "@/shared/animations/animateWords";

gsap.registerPlugin(ScrollTrigger);

interface UseProjectScrollAnimationReturn {
  projectHeaderRef: MutableRefObject<HTMLElement | null>;
  wrapperRef: MutableRefObject<HTMLDivElement | null>;
  snapshotsSectionRef: MutableRefObject<HTMLDivElement | null>;
  progressBarRef: MutableRefObject<HTMLDivElement | null>;
}

export const useProjectScrollAnimationReturn =
  (): UseProjectScrollAnimationReturn => {
    const projectHeaderRef = useRef<HTMLElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const snapshotsSectionRef = useRef<HTMLDivElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
      const wrapper = wrapperRef.current;
      const snapshotsSection = snapshotsSectionRef.current;
      const progressBar = progressBarRef.current;

      if (!wrapper || !snapshotsSection) return;

      let initialized = false;

      // Initial setup
      gsap.set(wrapper, { x: 0, force3D: true });
      if (progressBar) {
        gsap.set(progressBar, { width: "0%" });
      }

      let headingSplit: SplitText | null = null;
      const lineSplits: SplitText[] = [];

      // Animate heading
      const heading =
        projectHeaderRef.current?.querySelector(".project-title h3");
      if (heading) {
        headingSplit = new SplitText(heading, {
          type: "words",
          mask: "words",
        });
        animateWords(
          heading as HTMLHeadingElement,
          { delay: 0.3 },
          headingSplit
        );
      }

      // Helper function to animate lines
      const animateLinesSafe = (selector: string, start: string, delay = 0) => {
        const elements = gsap.utils.toArray<HTMLElement>(selector);
        elements.forEach((el) => {
          const split = new SplitText(el, {
            type: "lines",
            mask: "lines",
          });
          lineSplits.push(split);
          animateLinesOnScroll(el, { start, delay }, split);
        });
      };

      // Animate pre-pin elements
      animateLinesSafe(
        ".project-meta p, .project-stack p, .project-overview-copy p, .project-meta-col a",
        "top 85%",
        0.1
      );

      // Calculate horizontal scroll distance
      const calculateMoveDistance = () => {
        const wrapperWidth = wrapper.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(wrapperWidth - viewportWidth);
      };

      let moveDistance = calculateMoveDistance();

      // Browser detection for scrub smoothness
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      // Create horizontal scroll trigger
      const horizontalST = ScrollTrigger.create({
        trigger: snapshotsSection,
        start: "top top",
        end: () => `+=${window.innerHeight * 5}px`,
        pin: true,
        scrub: isSafari && isIOS ? 0.5 : 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          moveDistance = calculateMoveDistance();
        },
        onUpdate: (self) => {
          if (!initialized || self.progress < 0.001) return;

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

      // Wait for images to load before initializing scroll
      const images = wrapper.querySelectorAll("img");
      Promise.all(
        Array.from(images).map(
          (img) =>
            img.complete ||
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      ).then(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          initialized = true;
        });
      });

      // Wait for fonts to load
      if ("fonts" in document) {
        document.fonts.ready.then(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        });
      }

      // Animate post-pin elements
      animateLinesSafe(".project-info-copy p", "top 90%", 0);

      // Handle resize
      let resizeTimeout: number;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      // Cleanup
      return () => {
        horizontalST.kill();
        lineSplits.forEach((s) => s.revert());
        headingSplit?.revert();
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }, []);

    return {
      projectHeaderRef,
      wrapperRef,
      snapshotsSectionRef,
      progressBarRef,
    };
  };
