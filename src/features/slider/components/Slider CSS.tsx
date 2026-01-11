import { useState, useRef } from "react";

import { slides } from "../../../../data/projects/slides";

import "./Slider.css";

const TRANSITION_CONFIG = {
  exitDuration: 1.2,
  enterDuration: 1.2,
  exitDelay: 0.5,
};

const SlideCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [exitingSlide, setExitingSlide] = useState<number | null>(null);
  const [enteringSlide, setEnteringSlide] = useState<number | null>(null);
  const [direction, setDirection] = useState<string>("down");
  const isAnimatingRef = useRef(false);
  const totalSlides = slides.length;

  const handleNavigation = (navDirection: string) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setDirection(navDirection);

    // Calculate next slide
    const nextIndex =
      navDirection === "down"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

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

  const renderSlide = (
    slideIndex: number,
    state: string,
    slideDirection: string
  ) => {
    const slideData = slides[slideIndex];
    const isExiting = state === "exiting";
    const isEntering = state === "entering";

    let slideClass = "slide";
    if (isExiting) {
      slideClass += ` slide-exit-${slideDirection}`;
    } else if (isEntering) {
      slideClass += ` slide-enter slide-enter-${slideDirection}`;
    }

    return (
      <div className={slideClass} key={`${state}-${slideIndex}`}>
        <div className="slide-img">
          <img
            src={slideData.slideImg}
            alt=""
            className={isEntering ? "img-enter" : ""}
          />
        </div>

        <div className="slide-header">
          <div className="slide-title">
            <h2>{slideData.slideTitle}</h2>
          </div>
          <div className="slide-description">
            <p>{slideData.slideDescription}</p>
          </div>
          <div className="slide-link">
            <a href={slideData.slideUrl}>View Project</a>
          </div>
        </div>

        <div className="slide-info">
          <div className="slide-tags">
            <p className="mono">Tags</p>
            {slideData.slideTags.map((tag, index) => (
              <p key={index} className="mono">
                {tag}
              </p>
            ))}
          </div>
          <div className="slide-index-wrapper">
            <p className="mono">
              {(slideIndex + 1).toString().padStart(2, "0")}
            </p>
            <p className="mono">/</p>
            <p className="mono">{totalSlides.toString().padStart(2, "0")}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="slider">
      {exitingSlide !== null && renderSlide(exitingSlide, "exiting", direction)}

      {enteringSlide !== null
        ? renderSlide(enteringSlide, "entering", direction)
        : !transitioning && renderSlide(currentSlide, "current", direction)}

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

export default SlideCarousel;

