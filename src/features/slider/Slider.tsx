import { useState, useRef, useEffect } from "react";

import { PageTransition } from "@/shared/components/PageTransition/PageTransition";
import { Slide } from "@/features/slider/components/Slide";
import { SlideData } from "@/data/projects/types";

import "./Slider.css";


const TRANSITION_CONFIG = {
  exitDuration: 1.2,
  enterDuration: 1.2,
  exitDelay: 0.5,
};

interface Props {
  slides: SlideData[];
}

const SlideCarousel = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [exitingSlide, setExitingSlide] = useState<number | null>(null);
  const [enteringSlide, setEnteringSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<string>("down");
  const [isReady, setIsReady] = useState<boolean>(false);
  const isAnimatingRef = useRef(false);
  const totalSlides = slides.length;

  // Preload first image before showing content
  useEffect(() => {
    if (!slides[0]?.slideImg) {
      setIsReady(true);
      return;
    }

    const img = new Image();
    img.onload = () => setIsReady(true);
    img.onerror = () => setIsReady(true); // Show even if image fails
    img.src = slides[0].slideImg;
  }, [slides]);

  const handleNavigation = (navDirection: string) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setDirection(navDirection);

    // Calculate next slide
    const nextIndex =
      navDirection === "down"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    // Preload next image
    if (slides[nextIndex]?.slideImg) {
      const img = new Image();
      img.src = slides[nextIndex].slideImg;
    }

    // Start exit animation
    setExitingSlide(currentSlide);
    setTransitioning(true);

    // After exitDelay, start entering the new slide
    setTimeout(() => {
      setEnteringSlide(nextIndex);

      // After enter animation completes
      setTimeout(() => {
        setCurrentSlide(nextIndex);
        setExitingSlide(null);
        setEnteringSlide(null);
        setTransitioning(false);
        isAnimatingRef.current = false;
      }, TRANSITION_CONFIG.enterDuration * 1000);
    }, TRANSITION_CONFIG.exitDelay * 1000);
  };

  // Don't render until first image is loaded
  if (!isReady) {
    return (
      <div className="slider">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#666",
            fontFamily: "monospace",
            fontSize: "0.9rem",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="slider">
      {exitingSlide !== null && (
        <Slide
          data={slides[exitingSlide]}
          state="exiting"
          direction={direction as "up" | "down"}
          index={exitingSlide}
          total={totalSlides}
        />
      )}

      {enteringSlide !== null ? (
        <Slide
          data={slides[enteringSlide]}
          state="entering"
          direction={direction as "up" | "down"}
          index={enteringSlide}
          total={totalSlides}
        />
      ) : (
        !transitioning && (
          <Slide
            data={slides[currentSlide]}
            state="current"
            direction={direction as "up" | "down"}
            index={currentSlide}
            total={totalSlides}
          />
        )
      )}

      <button
        className="nav-button nav-button-prev"
        onClick={() => handleNavigation("up")}
        disabled={isAnimatingRef.current}
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      <button
        className="nav-button nav-button-next"
        onClick={() => handleNavigation("down")}
        disabled={isAnimatingRef.current}
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

const SliderCarouselTransition = PageTransition(SlideCarousel);
export default SliderCarouselTransition;
