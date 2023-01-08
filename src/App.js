import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { About } from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import useWindowSize from './hooks/windowSizeHook'

gsap.registerPlugin(ScrollTrigger)

function App() {

  const windowSize = useWindowSize();

  const [isMobile, setIsMobile] = useState(windowSize.width <= 800)

  useEffect(() => {
    if(windowSize.width <= 800){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowSize])

  useEffect(() => {
    const decorationYValues = {
      yStart: isMobile ? '-15%':'-20%',
      yEnd: isMobile ? '15%':'12%',
    }

    const cardYValues = {
      yStart: isMobile ? '5%':'30%',
      yEnd: isMobile ? '-20%':'-24%',
    }
    
    gsap.utils.toArray('.project-description').forEach(project => {
      gsap.set(project, {
          y: cardYValues.yStart,
      });

      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
        y: cardYValues.yEnd
      })
    });

    gsap.utils.toArray('.project-card-decoration').forEach(decoration => {
      gsap.set(decoration, {
          y: decorationYValues.yStart,
      });

      gsap.to(decoration, {
        scrollTrigger:{
          trigger: decoration,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2,
        },
        y: decorationYValues.yEnd,
      })
    });

    gsap.utils.toArray('.project-card-decoration-reversed').forEach(decoration => {
      gsap.set(decoration, {
        y: decorationYValues.yStart,
      });

      gsap.to(decoration, {
        scrollTrigger: {
          trigger: decoration,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.2
        },
        y: decorationYValues.yEnd,
      })
    });

    gsap.utils.toArray('.preview-code-links').forEach(decoration => {
      gsap.set(decoration, {
        y: '0%',
      });

      gsap.to(decoration, {
        scrollTrigger: {
          trigger: decoration,
          start: '-200% bottom',
          end: '-300px top',
          scrub: 0.2,
          markers: true
        },
        y: '-100px',
      })
    });

    gsap.utils.toArray('.color-line-left').forEach(project => {
      gsap.set(project, {
          x: '-100%',
      });

      gsap.to(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top bottom',
          end: 'bottom 15%',
          scrub: 0.2,
        },
        x: '-50%'
      })
  });

    gsap.utils.toArray('.color-line-right').forEach(project => {
        gsap.set(project, {
            x: '100%',
        });
    
        gsap.to(project, {
            scrollTrigger: {
            trigger: project,
            start: '-70px bottom',
            end: '-70px 15%',
            scrub: 0.2,
            },
            x: '50%'
        })
    });

    return () => {
      ScrollTrigger.getAll().forEach(animation => animation.kill())
    }
  }, [isMobile])
  

  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
