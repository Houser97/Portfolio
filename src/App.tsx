import gsap from "gsap";
import { Route, Routes, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { AnimatePresence } from "framer-motion";

import { useLenisScroll } from "./shared/hooks/useLenisScroll";
import { Menu } from "./app/layout/Menu/Menu";
import SliderCarouselTransition from "./features/slider/Slider";


import { routes } from "./app/navigation/routes";
import { experimentSlides, slides } from "./data/projects/slides";

import HomeTransition from "./features/home/Home";
import ProjectTransition from "./features/project/Project";
import ExperimentTransition from "./features/experiment/Experiment";

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
          <Route path={routes.experiment.route} element={<ExperimentTransition />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
