import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AnimateWordsOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  yPercent?: number;
}

export const animateWords = (
  element: HTMLElement,
  options: AnimateWordsOptions = {},
  split?: SplitText
) => {

   const localSplit =
     split ??
     new SplitText(element, {
       type: "words",
       wordsClass: "hero-word",
     });

   const {
     delay = 0,
     duration = 0.75,
     stagger = 0.1,
     ease = "power4.out",
     yPercent = 120,
   } = options;

   gsap.set(localSplit.words, {
     yPercent
   });

   return gsap.to(localSplit.words, {
     yPercent: 0,
     duration,
     ease,
     stagger,
     delay,
   });
};
