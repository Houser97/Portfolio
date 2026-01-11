import { useLayoutEffect } from "react";
import gsap from "gsap";

interface Props { 
    containerRef: React.RefObject<HTMLElement>; 
    pathRef: React.RefObject<SVGPathElement>;
    bgOverlayRef: React.RefObject<HTMLElement>;
    logoSize?: number;
    duration?: number;
}

export const useMaskReveal = ({
  containerRef,
  pathRef,
  bgOverlayRef,
  logoSize = 60,
  duration = 2,
}: Props) => {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const bgOverlay = bgOverlayRef.current;

    if (!container || !path || !bgOverlay) return;

    const bbox = path.getBBox();

    const baseScale = logoSize / Math.max(bbox.width, bbox.height);

    const pathCenterX = bbox.x + bbox.width / 2;
    const pathCenterY = bbox.y + bbox.height / 2;

    let currentScale = baseScale;

    const updateTransform = () => {
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const x = viewportCenterX - pathCenterX * currentScale;
      const y = viewportCenterY - pathCenterY * currentScale;

      path.setAttribute(
        "transform",
        `translate(${x}, ${y}) scale(${currentScale})`
      );
    };

    updateTransform();

    gsap.set(container, { display: "block" });
    gsap.set(bgOverlay, { display: "block", opacity: 0.3 });

    const resizeObserver = new ResizeObserver(updateTransform);
    resizeObserver.observe(container);

    const scaleMultiplier = window.innerWidth < 1000 ? 15 : 40;

    const tween = gsap.to(
      {},
      {
        duration,
        ease: "power2.inOut",
        onUpdate() {
          const progress = this.progress();
          currentScale = baseScale + progress * scaleMultiplier;

          updateTransform();

          gsap.set(bgOverlay, {
            opacity: 0.3 - Math.min(0.3, progress * 2.5),
          });
        },
        onComplete() {
          gsap.set(container, { display: "none" });
          gsap.set(bgOverlay, { display: "none" });
        },
      }
    );

    return () => {
      tween.kill();
      resizeObserver.disconnect();
    };
  }, [containerRef, pathRef, bgOverlayRef, logoSize, duration]);
};
