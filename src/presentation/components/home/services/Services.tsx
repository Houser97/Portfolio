import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { cards } from "@/data/cards";

export const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const smoothStep = (t: number) => t * t * (3 - 2 * t);

  useGSAP(
    () => {
      const isMobile = window.innerWidth <= 1000;

      if (isMobile) {
        cardsRef.current.forEach((card) => {
          if (card) {
            gsap.set(card, { clearProps: "all" });
          }
        });
        innerCardsRef.current.forEach((inner) => {
          if (inner) {
            gsap.set(inner, { clearProps: "all" });
          }
        });
        return;
      }

      const ctx = gsap.context(() => {
        const vh = window.innerHeight;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${vh * 3}`,
          pin: true,
          pinSpacing: true,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: `+=${vh * 2.8}`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // ---------- HEADER ----------
            const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
            const headerY = gsap.utils.interpolate(
              "300%",
              "0%",
              smoothStep(headerProgress)
            );

            gsap.set(headerRef.current, { y: headerY });

            // ---------- CARDS ----------
            cardsRef.current.forEach((card, index) => {
              const inner = innerCardsRef.current[index];
              if (!card || !inner) return;

              const delay = index * 0.5;
              const cardProgress = gsap.utils.clamp(
                0,
                1,
                (progress - delay * 0.1) / (0.9 - delay * 0.1)
              );

              // Y
              let y = "0%";
              if (cardProgress < 0.4) {
                y = gsap.utils.interpolate(
                  "-100%",
                  "50%",
                  smoothStep(cardProgress / 0.4)
                );
              } else if (cardProgress < 0.6) {
                y = gsap.utils.interpolate(
                  "50%",
                  "0%",
                  smoothStep((cardProgress - 0.4) / 0.2)
                );
              }

              // SCALE
              let scale = 1;
              if (cardProgress < 0.4) {
                scale = gsap.utils.interpolate(
                  0.25,
                  0.75,
                  smoothStep(cardProgress / 0.4)
                );
              } else if (cardProgress < 0.6) {
                scale = gsap.utils.interpolate(
                  0.75,
                  1,
                  smoothStep((cardProgress - 0.4) / 0.2)
                );
              }

              // OPACITY
              const opacity =
                cardProgress < 0.2 ? smoothStep(cardProgress / 0.2) : 1;

              // X / ROTATE / FLIP
              let x = index === 0 ? "100%" : index === 2 ? "-100%" : "0%";
              let rotate = index === 0 ? -5 : index === 2 ? 5 : 0;
              let rotationY = 0;

              if (cardProgress > 0.6) {
                const t = smoothStep((cardProgress - 0.6) / 0.4);
                x = gsap.utils.interpolate(x, "0%", t);
                rotate = gsap.utils.interpolate(rotate, 0, t);
                rotationY = t * 180;
              }

              gsap.set(card, {
                x,
                y,
                scale,
                rotate,
                opacity,
              });

              gsap.set(inner, {
                rotationY,
              });
            });
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="home-services" ref={sectionRef}>
      <div className="container">
        <div className="home-services-header" ref={headerRef}>
          <p className="md">Equipped and ready for coding battles</p>
        </div>
      </div>

      <div className="home-services-top-bar">
        <div className="container">
          <div className="symbols-container">
            <div className="symbol">
              <img src="/symbols/s1-dark.png" alt="Symbol" />
            </div>
            <div className="symbol">
              <img src="/symbols/s3-dark.png" alt="Symbol" />
            </div>
          </div>
          <div className="symbols-container">
            <div className="symbol">
              <img src="/symbols/s3-dark.png" alt="Symbol" />
            </div>
            <div className="symbol">
              <img src="/symbols/s1-dark.png" alt="Symbol" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-services-bottom-bar">
        <div className="container">
          <p className="mono">
            <span>&#9654;</span> Deployed abilities
          </p>
          <p className="mono">[ Stats synced: 2025 ]</p>
        </div>
      </div>

      <div className="cards">
        <div className="cards-container">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="card"
              id={`card-${card.id}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card-wrapper">
                <div
                  className="flip-card-inner"
                  ref={(el) => (innerCardsRef.current[index] = el)}
                >
                  <div className="flip-card-front">
                    <div className="card-title">
                      <p className="mono">{card.title}</p>
                      <p className="mono">{String(card.id).padStart(2, "0")}</p>
                    </div>
                    <div className="card-title">
                      <p className="mono">{String(card.id).padStart(2, "0")}</p>
                      <p className="mono">{card.title}</p>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <div className="card-title">
                      <p className="mono">{card.title}</p>
                      <p className="mono">{String(card.id).padStart(2, "0")}</p>
                    </div>

                    <div className="card-copy">
                      {card.items?.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>

                    <div className="card-title">
                      <p className="mono">{String(card.id).padStart(2, "0")}</p>
                      <p className="mono">{card.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
