
import { Hero } from "@/features/home/components/Hero/Hero";
import { PageTransition } from "@/shared/components/PageTransition/PageTransition";
import { About } from "@/features/home/components/About/About";
import { Footer } from "@/features/home/components/Footer/Footer";
import { Outro } from "@/features/home/components/Outro/Outro";
import { Services } from "@/features/home/components/Services/Services";
import { Spotlight } from "@/features/home/components/Spotlight/Spotlight";

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