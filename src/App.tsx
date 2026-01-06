import gsap from "gsap";
import { Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { AnimatePresence } from "framer-motion";

import { useLenisScroll } from "./presentation/hooks/useLenisScroll";
import { Menu } from "./presentation/components/shared/Menu";
import SliderCarouselTransition from "./presentation/components/project/slider/Slider";
import HomeTransition from "./presentation/components/home/Home";
import ProjectTransition from "./presentation/components/project/project/Project";
import { routes } from "./data/navigation/routes";
import { experimentSlides, slides } from "./data/projects/slides";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const location = useLocation();
  useLenisScroll();

  return (
    <>
      <Menu />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routes.home.route} element={<HomeTransition />} />
          <Route
            path={routes.selectedWork.route}
            element={<SliderCarouselTransition slides={slides} />}
          />
          <Route
            path={routes.experiments.route}
            element={<SliderCarouselTransition slides={experimentSlides} />}
          />
          <Route path={routes.project.route} element={<ProjectTransition />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
