import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimateLinesOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  yPercent?: number;
}

export const animateLinesOnMount = (
  element: HTMLElement,
  options: AnimateLinesOptions = {},
  split?: SplitText
) => {
  const {
    delay = 0,
    duration = 0.8,
    ease = "power4.out",
    yPercent = 120,
  } = options;

  const localSplit =
    split ??
    new SplitText(element, {
      type: "lines",
      mask: "lines",
    });

  // 👇 estado inicial (antes de animar)
  gsap.set(localSplit.lines, {
    yPercent,
    opacity: 0,
  });

  return gsap.to(localSplit.lines, {
    yPercent: 0,
    opacity: 1,
    duration,
    ease,
    delay,
    stagger: 0.08,
  });
};
