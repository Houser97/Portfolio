import { useGSAP } from "@gsap/react";
import "./Hero.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

   useGSAP(
     (context) => {
       const q = context.selector!;

       /* ------------------ SPLITS ------------------ */

       const heading = q(".hero-header h1")[0];
       const lines = q(".hero-line");
       const cards = q(".hero-cards .card");

       if (!heading || !cards.length) return;

       const headingSplit = new SplitText(heading, {
         type: "chars",
         charsClass: "hero-char",
       });

       const lineSplits = lines.map(
         (el: HTMLElement) =>
           new SplitText(el, {
             type: "lines",
             mask: "lines",
           })
       );

       /* ------------------ INTRO TIMELINE ------------------ */

       const introTl = gsap.timeline({ delay: 0.1 });

       introTl
         // Heading chars
         .fromTo(
           headingSplit.chars,
           { yPercent: 100, opacity: 0 },
           {
             yPercent: 0,
             opacity: 1,
             duration: 0.8,
             ease: "power4.out",
             stagger: 0.04,
           }
         )

         // Copy lines
         .fromTo(
           lineSplits.flatMap((s: SplitText) => s.lines),
           { yPercent: 120 },
           {
             yPercent: 0,
             duration: 0.8,
             ease: "power4.out",
             stagger: 0.1,
           },
           "<+=0"
         )

         // Cards scale in
         .fromTo(
           cards,
           { scale: 0 },
           {
             scale: 1,
             duration: 0.75,
             stagger: 0.1,
             ease: "power4.out",
           },
           "<+=0"
         );

       /* ------------------ SCROLL ------------------ */

       if (window.innerWidth > 1000) {
         const st = ScrollTrigger.create({
           trigger: heroRef.current,
           start: "top top",
           end: "75% top",
           scrub: 1,
           onUpdate: (self) => {
             const p = self.progress;

             cards.forEach((card: HTMLElement, index: number) => {
               let x = 0;
               let rotation = 0;

               if (index === 0) {
                 x = gsap.utils.interpolate(0, 90, p);
                 rotation = gsap.utils.interpolate(0, -15, p);
               } else if (index === 2) {
                 x = gsap.utils.interpolate(0, -90, p);
                 rotation = gsap.utils.interpolate(0, 15, p);
               }

               gsap.set(card, {
                 y: `${gsap.utils.interpolate(0, 400, p)}%`,
                 x: `${x}%`,
                 scale: gsap.utils.interpolate(1, 0.75, p),
                 rotation,
               });
             });
           },
         });

         context.add(() => st.kill());
       }

       /* ------------------ CLEANUP ------------------ */

       return () => {
         headingSplit.revert();
         lineSplits.forEach((s: SplitText) => s.revert());
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
                Juno Watts builds websites with the focus of a final boss fight
                and the flair of your favorite anime opening. Every build starts
                with a solid plan and ends with a clean launch. No filler
                episodes.
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
          <div className="card" id="hero-card-1">
            <div className="hero-card-inner">
              <div className="card-title">
                <p className="mono">Plan</p>
                <p className="mono">01</p>
              </div>
              <div className="card-title">
                <p className="mono">01</p>
                <p className="mono">Plan</p>
              </div>
            </div>
          </div>
          <div className="card" id="hero-card-2">
            <div className="hero-card-inner">
              <div className="card-title">
                <p className="mono">Design</p>
                <p className="mono">02</p>
              </div>
              <div className="card-title">
                <p className="mono">02</p>
                <p className="mono">Design</p>
              </div>
            </div>
          </div>
          <div className="card" id="hero-card-3">
            <div className="hero-card-inner">
              <div className="card-title">
                <p className="mono">Develop</p>
                <p className="mono">03</p>
              </div>
              <div className="card-title">
                <p className="mono">03</p>
                <p className="mono">Develop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
