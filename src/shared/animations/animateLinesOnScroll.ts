import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimateLinesOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  yPercent?: number;
  start?: string;
}

export const animateLinesOnScroll = (
  element: HTMLElement,
  options: AnimateLinesOptions = {},
  split?: SplitText
) => {
  const {
    delay = 0,
    duration = 0.8,
    ease = "power4.out",
    yPercent = 120,
    start = "top 80%",
  } = options;

  const localSplit =
    split ??
    new SplitText(element, {
      type: "lines",
      mask: "lines",
    });

  gsap.set(localSplit.lines, {
    yPercent,
    opacity: 1,
  });

  return gsap.to(localSplit.lines, {
    yPercent: 0,
    opacity: 1,
    duration,
    ease,
    delay,
    stagger: 0.1,
    scrollTrigger: {
      trigger: element,
      start,
      once: true,
    },
  });
};
