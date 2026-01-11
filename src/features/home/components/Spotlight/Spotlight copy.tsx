
import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { animateLinesOnScroll } from "@/shared/animations/animateLinesOnScroll";

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



    const lines = gsap.utils.toArray<HTMLElement>(".spotlight-intro-header h3");

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




    
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 7}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,

      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.5) {
          const animationProgress = progress / 0.5;
          const startY = 5;
          const endY = -(totalMovement / containerHeight) * 100;

          gsap.set(spotlightImages, {
            y: `${startY + (endY - startY) * animationProgress}%`,
          });
        }

        if (maskContainerRef.current && maskImageRef.current) {
          if (progress >= 0.25 && progress <= 0.75) {
            const maskProgress = (progress - 0.25) / 0.5;

            maskContainerRef.current.style.setProperty(
              "mask-size",
              `${maskProgress * 475}%`
            );
            maskContainerRef.current.style.setProperty(
              "-webkit-mask-size",
              `${maskProgress * 475}%`
            );

            gsap.set(maskImageRef.current, {
              scale: 1.25 - maskProgress * 0.25,
            });
          } else if (progress < 0.25) {
            maskContainerRef.current.style.setProperty("mask-size", "0%");
            maskContainerRef.current.style.setProperty(
              "-webkit-mask-size",
              "0%"
            );
            gsap.set(maskImageRef.current, { scale: 1.25 });
          } else {
            maskContainerRef.current.style.setProperty("mask-size", "475%");
            maskContainerRef.current.style.setProperty(
              "-webkit-mask-size",
              "475%"
            );
            gsap.set(maskImageRef.current, { scale: 1 });
          }
        }

        if (headerSplit) {
          if (progress >= 0.75 && progress <= 0.95) {
            const textProgress = (progress - 0.75) / 0.2;
            const totalWords = headerSplit.words.length;

            headerSplit.words.forEach((word, index) => {
              gsap.set(word, {
                opacity: textProgress >= index / totalWords ? 1 : 0,
              });
            });
          } else if (progress < 0.75) {
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
    };
  },
  {
    scope: sectionRef,
    dependencies: [],
  }
);



  return (
    <section ref={sectionRef} className="home-spotlight">
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
      <div className="home-spotlight-bottom-bar">
        <div className="container">
          <p
            className="mono"
            data-animate-type="scramble"
            data-animate-delay="0.2"
            data-animate-on-scroll="true"
          >
            <span>&#9654;</span> Visual logs
          </p>
          <p
            className="mono"
            data-animate-type="scramble"
            data-animate-delay="0.25"
            data-animate-on-scroll="true"
          >
            / Portfolio Arc
          </p>
        </div>
      </div>
      <div className="container">
        <div className="spotlight-intro-header">
          <h3>
            Problems arise, I solve them
          </h3>
        </div>
      </div>
      <div ref={imagesRef} className="home-spotlight-images">
        <div className="home-spotlight-images-row">
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img
              src="./spotlight-images/spotlight-img-1.jpg"
              alt=""
            />
          </div>
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-2.jpg" alt="" />
          </div>
        </div>
        <div className="home-spotlight-images-row">
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-3.jpg" alt="" />
          </div>
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image"></div>
        </div>
        <div className="home-spotlight-images-row">
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-4.jpg" alt="" />
          </div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-5.jpg" alt="" />
          </div>
          <div className="home-spotlight-image"></div>
        </div>
        <div className="home-spotlight-images-row">
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-6.jpg" alt="" />
          </div>
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-7.jpg" alt="" />
          </div>
        </div>
        <div className="home-spotlight-images-row">
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-8.jpg" alt="" />
          </div>
          <div className="home-spotlight-image"></div>
          <div className="home-spotlight-image image-holder">
            <img src="./spotlight-images/spotlight-img-9.jpg" alt="" />
          </div>
          <div className="home-spotlight-image"></div>
        </div>
      </div>
      <div ref={maskContainerRef} className="spotlight-mask-image-container">
        <div ref={maskImageRef} className="spotlight-mask-image">
          <img src="./spotlight-images/spotlight-banner.jpg" alt="" />
        </div>
        <div className="container">
          <div className="spotlight-mask-header">
            <h3 ref={headerRef}>Built This Face with Flexbox</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
