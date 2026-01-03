import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const Outro = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const stripsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // ---------- TEXT SPLIT ----------
      let outroSplit: SplitText | null = null;

      if (headerRef.current) {
        outroSplit = new SplitText(headerRef.current, {
          type: "words",
          wordsClass: "outro-word",
        });

        gsap.set(outroSplit.words, { opacity: 0 });
      }

      // ---------- PIN + TEXT REVEAL ----------
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          if (!outroSplit) return;

          if (progress >= 0.25 && progress <= 0.75) {
            const textProgress = (progress - 0.25) / 0.5;
            const totalWords = outroSplit.words.length;

            outroSplit.words.forEach((word, index) => {
              const revealPoint = index / totalWords;
              gsap.set(word, {
                opacity: textProgress >= revealPoint ? 1 : 0,
              });
            });
          } else if (progress < 0.25) {
            gsap.set(outroSplit.words, { opacity: 0 });
          } else if (progress > 0.75) {
            gsap.set(outroSplit.words, { opacity: 1 });
          }
        },
      });

      // ---------- STRIPS PARALLAX ----------
      const stripSpeeds = [0.3, 0.4, 0.25, 0.35, 0.2, 0.25];

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: `+=${window.innerHeight * 6}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          stripsRef.current.forEach((strip, index) => {
            if (!strip || stripSpeeds[index] === undefined) return;

            const movement = progress * 100 * stripSpeeds[index];

            gsap.set(strip, {
              x: `${movement}%`,
            });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="outro" ref={sectionRef}>
      <div className="container">
        <h3 ref={headerRef}>Scroll ends but ideas don’t</h3>
      </div>

      <div className="outro-strips">
        {[
          "Frontend,Backend,Mexico,CSS,Creative,Clean Code,Logic,TypeScript",
          "Details,Team Player,Performance,Scalability",
          "GSAP,Systems,Self Learning,Scroll,Swimming,Mindset,Components",
          "Git,APIs,Testing,Flow,Eager,Discipline,Design,Debugging,Planning,Responsive,Keyframes,Animations",
          "SCADA,Traveller,Empathy,Intuition",
        ].map((content, index) => (
          <div
            key={index}
            className={`outro-strip os-${index + 1}`}
            ref={(el) => (stripsRef.current[index] = el)}
          >
            {content.split(",").map((text, i) => (
              <div key={i} className={`skill skill-var-${(i % 3) + 1}`}>
                <p className="mono">{text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
