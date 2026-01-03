import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

const getLenisOptions = (isMobile: boolean): LenisOptions => ({
  duration: isMobile ? 0.8 : 1.2,
  easing,
  touchMultiplier: isMobile ? 1.5 : 2,
  infinite: false,
  lerp: isMobile ? 0.05 : 0.1,
  wheelMultiplier: 1,
  orientation: "vertical",
  smoothWheel: true,
  syncTouch: true,
});

export const useLenisScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const isMobileRef = useRef<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const setupLenis = (isMobile: boolean) => {
      // destruir si existe
      lenisRef.current?.destroy();

      const lenis = new Lenis(getLenisOptions(isMobile));
      lenis.on("scroll", ScrollTrigger.update);

      lenisRef.current = lenis;
      isMobileRef.current = isMobile;
    };

    // init
    setupLenis(mediaQuery.matches);

    // GSAP ticker → Lenis
    const update = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // resize listener (solo cuando cambia mobile/desktop)
    const handleChange = (e: MediaQueryListEvent) => {
      if (isMobileRef.current !== e.matches) {
        setupLenis(e.matches);
        ScrollTrigger.refresh();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      gsap.ticker.remove(update);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);
}
