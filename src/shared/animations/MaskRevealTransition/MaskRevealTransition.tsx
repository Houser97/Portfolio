import { useMaskReveal } from "@/shared/hooks/useMaskRevealGSAP";
import { useRef } from "react";


const LOGO_PATH =
  "M800 515.749L501.926 343.832V0H297.482V343.832L0 515.749L101.926 693L399.408 521.084L697.482 693L800 515.749Z";

export const MaskRevealTransition = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const bgOverlayRef = useRef(null);

  useMaskReveal({
    containerRef,
    pathRef,
    bgOverlayRef,
  });

  return (
    <>
      <div className="mask-transition" ref={containerRef}>
        <svg width="100%" height="100%">
          <defs>
            <mask id="logoRevealMask">
              <rect width="100%" height="100%" fill="white" />
              <path ref={pathRef} d={LOGO_PATH} fill="black" />
            </mask>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="var(--base-300)"
            mask="url(#logoRevealMask)"
          />
        </svg>
      </div>
      <div className="mask-bg-overlay" ref={bgOverlayRef} />
    </>
  );
}
