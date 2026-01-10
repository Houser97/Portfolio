import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { animateWords } from "@/presentation/animations/animateWords";
import { animateLines } from "@/presentation/animations/animateLines";
import { cards } from "@/data/cards";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let headingSplit: SplitText | null = null;
      const lineSplits: SplitText[] = [];

      const heading = heroRef.current?.querySelector("h1");
      const lines = gsap.utils.toArray<HTMLElement>(".hero-line");

      if (heading) {
        headingSplit = new SplitText(heading, {
          type: "words",
          mask: "words",
        });

        animateWords(
          heading,
          {
            delay: 0.2,
          },
          headingSplit
        );
      }

      lines.forEach((line, index) => {
        const split = new SplitText(line, {
          type: "lines",
          mask: "lines",
        });

        lineSplits.push(split);

        animateLines(
          line,
          {
            delay: 0.4 + index * 0.1,
            start: "top 100%",
          },
          split
        );
      });

      const cards = gsap.utils.toArray<HTMLElement>(".hero-cards .card");

      gsap.set(cards, {
        scale: 0,
        transformOrigin: "center center",
      });

      gsap.to(cards, {
        scale: 1,
        duration: 0.75,
        delay: 0.25,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          gsap.set("#hero-card-1", { transformOrigin: "top right" });
          gsap.set("#hero-card-3", { transformOrigin: "top left" });
        },
      });

      if (window.innerWidth > 1000) {
        const smoothStep = (p: number) => p * p * (3 - 2 * p);

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "75% top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            gsap.set(".hero-cards", {
              opacity: gsap.utils.interpolate(1, 0.5, smoothStep(progress)),
            });

            cards.forEach((card, index) => {
              const delay = index * 0.9;
              const cardProgress = gsap.utils.clamp(
                0,
                1,
                (progress - delay * 0.1) / (1 - delay * 0.1)
              );

              let x = "0%";
              let rotation = 0;

              if (index === 0) {
                x = gsap.utils.interpolate(
                  "0%",
                  "90%",
                  smoothStep(cardProgress)
                );
                rotation = gsap.utils.interpolate(
                  0,
                  -15,
                  smoothStep(cardProgress)
                );
              }

              if (index === 2) {
                x = gsap.utils.interpolate(
                  "0%",
                  "-90%",
                  smoothStep(cardProgress)
                );
                rotation = gsap.utils.interpolate(
                  0,
                  15,
                  smoothStep(cardProgress)
                );
              }

              gsap.set(card, {
                y: gsap.utils.interpolate(
                  "0%",
                  "400%",
                  smoothStep(cardProgress)
                ),
                scale: gsap.utils.interpolate(
                  1,
                  0.75,
                  smoothStep(cardProgress)
                ),
                x,
                rotation,
              });
            });
          },
        });
      }

      return () => {
        headingSplit?.revert();
        lineSplits.forEach((split) => split.revert());
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="hero">
      <div className="home-services-top-bar">
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
      <div className="container">
        <div className="hero-content">
          <div className="hero-header">
            <h1 data-animate-type="reveal" data-animate-delay="0.25">
              Arturo Rivera
            </h1>
          </div>
          <div className="hero-footer">
            <div className="hero-footer-copy">
              <p className="md hero-line">
                I design and build interactive web experiences where motion,
                structure, and clarity work together — from thoughtful UI to
                solid backend systems.
              </p>
            </div>
            <div className="hero-footer-tags">
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.5"
              >
                <span>&#9654;</span> Interface Alchemy
              </p>
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.5"
              >
                <span>&#9654;</span> Scroll Sorcery
              </p>
            </div>
          </div>
        </div>
        <div className="hero-cards">
          {cards.map((card) => (
            <div className="card" id={`hero-card-${card.id}`} key={card.id}>
              <div className="hero-card-inner">
                <div className="card-title">
                  <p className="mono">{card.title}</p>
                  <p className="mono">{String(card.id).padStart(2, "0")}</p>
                </div>
                <div className="card-title">
                  <p className="mono">{String(card.id).padStart(2, "0")}</p>
                  <p className="mono">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
