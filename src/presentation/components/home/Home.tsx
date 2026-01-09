import { PageTransition } from "../animations/PageTransition/PageTransition";
import { About } from "./about/About";
import { Footer } from "./footer/Footer";
import { Hero } from "./hero/Hero";
import { Outro } from "./outro/Outro";
import { Services } from "./services/Services";
import { Spotlight } from "./spotlight/Spotlight";

import "./Home.css";

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Spotlight />
        <Outro />
        <Footer />
    </>
  );
}

const HomeTransition = PageTransition(Home);
export default HomeTransition;