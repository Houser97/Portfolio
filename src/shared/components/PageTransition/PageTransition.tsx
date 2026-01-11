import { motion } from "framer-motion";

import { PAGE_ANIMATION_DURATION_IN_SECONDS } from "@/constants/animations";

import "./PageTransition.css";

export const PageTransition = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <>
        <Component {...props} />

        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: PAGE_ANIMATION_DURATION_IN_SECONDS,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: PAGE_ANIMATION_DURATION_IN_SECONDS,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </>
    );
  };
};
