import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { animateLinesOnScroll } from "@/shared/animations/animateLinesOnScroll";
import { HeroImage, spotlightProjects } from "@/data/projects/spotlight";

gsap.registerPlugin(ScrollTrigger);

export const Spotlight = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const maskContainerRef = useRef<HTMLDivElement | null>(null);
  const maskImageRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !imagesRef.current) return;

      const spotlightImages = imagesRef.current;
      const containerHeight = spotlightImages.offsetHeight;
      const viewportHeight = window.innerHeight;

      const initialOffset = containerHeight * 0.05;
      const totalMovement = containerHeight + initialOffset + viewportHeight;

      let headerSplit: SplitText | null = null;
      const lineSplits: SplitText[] = [];

      if (headerRef.current) {
        headerSplit = new SplitText(headerRef.current, {
          type: "words",
          mask: "words",
        });

        gsap.set(headerSplit.words, { opacity: 0 });
      }

      const lines = gsap.utils.toArray<HTMLElement>(
        ".spotlight-intro-header h3"
      );

      lines.forEach((line, index) => {
        const split = new SplitText(line, {
          type: "lines",
          mask: "lines",
        });

        lineSplits.push(split);

        animateLinesOnScroll(
          line,
          {
            delay: 0.2 + index * 0.1,
            start: "top 90%",
          },
          split
        );
      });

      // ============================================
      // RESPONSIVE TIMING CALCULATION
      // ============================================
      const isSmallScreen = window.innerWidth <= 1200;
      
      // Adjust scroll length based on screen size
      const scrollMultiplier = isSmallScreen ? 8 : 10;
      
      // Calculate when images should stop scrolling (earlier on small screens)
      const imageScrollEnd = isSmallScreen ? 0.4 : 0.5;
      
      // Adjust mask timing to start earlier on small screens
      const maskStart = isSmallScreen ? 0.15 : 0.25;
      const maskEnd = isSmallScreen ? 0.55 : 0.65;
      
      // Adjust text reveal timing
      const textStart = isSmallScreen ? 0.7 : 0.75;
      const textEnd = isSmallScreen ? 0.9 : 0.95;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${viewportHeight * scrollMultiplier}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,

        onUpdate: (self) => {
          const progress = self.progress;

          // -----------------------------
          // IMAGES VERTICAL MOVEMENT (Adjusted)
          // -----------------------------
          if (progress <= imageScrollEnd) {
            const animationProgress = progress / imageScrollEnd;
            const startY = 5;
            const endY = -(totalMovement / containerHeight) * 100;

            gsap.set(spotlightImages, {
              y: `${startY + (endY - startY) * animationProgress}%`,
            });
          }

          // -----------------------------
          // MASK ANIMATION (Responsive)
          // -----------------------------
          if (maskContainerRef.current && maskImageRef.current) {
            if (progress >= maskStart && progress <= maskEnd) {
              const maskProgress =
                (progress - maskStart) / (maskEnd - maskStart);

              // Adjust max mask size based on screen
              const maxMaskSize = isSmallScreen ? 400 : 475;

              maskContainerRef.current.style.setProperty(
                "mask-size",
                `${maskProgress * maxMaskSize}%`
              );
              maskContainerRef.current.style.setProperty(
                "-webkit-mask-size",
                `${maskProgress * maxMaskSize}%`
              );

              gsap.set(maskImageRef.current, {
                scale: 1.25 - maskProgress * 0.25,
              });
            } else if (progress < maskStart) {
              maskContainerRef.current.style.setProperty("mask-size", "0%");
              maskContainerRef.current.style.setProperty(
                "-webkit-mask-size",
                "0%"
              );
              gsap.set(maskImageRef.current, { scale: 1.25 });
            } else {
              const maxMaskSize = isSmallScreen ? 400 : 475;
              maskContainerRef.current.style.setProperty("mask-size", `${maxMaskSize}%`);
              maskContainerRef.current.style.setProperty(
                "-webkit-mask-size",
                `${maxMaskSize}%`
              );
              gsap.set(maskImageRef.current, { scale: 1 });
            }
          }

          // -----------------------------
          // MASK HEADER TEXT (Adjusted timing)
          // -----------------------------
          if (headerSplit) {
            if (progress >= textStart && progress <= textEnd) {
              const textProgress = (progress - textStart) / (textEnd - textStart);
              const totalWords = headerSplit.words.length;

              headerSplit.words.forEach((word, index) => {
                gsap.set(word, {
                  opacity: textProgress >= index / totalWords ? 1 : 0,
                });
              });
            } else if (progress < textStart) {
              gsap.set(headerSplit.words, { opacity: 0 });
            } else {
              gsap.set(headerSplit.words, { opacity: 1 });
            }
          }
        },
      });

      return () => {
        headerSplit?.revert();
        lineSplits.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="home-spotlight">
      <div className="container">
        <div className="spotlight-intro-header">
          <h3>Problems arise, I solve them</h3>
        </div>
      </div>

      <div ref={imagesRef} className="home-spotlight-images">
        {spotlightProjects.map((img, i) => (
          <div key={i} className="home-spotlight-images-row">
            <div className="home-spotlight-image image-holder">
              <img src={img} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div ref={maskContainerRef} className="spotlight-mask-image-container">
        <div ref={maskImageRef} className="spotlight-mask-image">
          <img src={HeroImage} alt="" />
        </div>
        <div className="container">
          <div className="spotlight-mask-header">
            <h3 ref={headerRef}>The person behind the code</h3>
          </div>
        </div>
      </div>
    </section>
  );
};