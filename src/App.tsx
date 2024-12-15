import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './App.css';
import Header from './presentation/components/Header';
import Home from './presentation/components/Home';
import { About } from './presentation/components/About';
import Projects from './presentation/components/Projects';
import Footer from './presentation/components/Footer';
import { useEffect } from 'react';
import useWindowSize from './presentation/hooks/useWindowSize'

gsap.registerPlugin(ScrollTrigger)

function App() {

  const { isMobile } = useWindowSize();

  useEffect(() => {
    const decorationYValues = {
      yStart: isMobile ? '-5%':'-20%',
      yEnd: isMobile ? '10%':'12%',
    }

    const cardYValues = {
      yStart: isMobile ? '5%':'30%',
      yEnd: isMobile ? '-20%':'-24%',
    }
    
    gsap.utils.toArray('.project-description').forEach(project => {
      gsap.set(project as HTMLElement, {
          y: cardYValues.yStart,
      });

      gsap.to(project as HTMLElement, {
        scrollTrigger: {
          trigger: project as HTMLElement,
          start: 'top 100%',
          end: '10%',
          scrub: 1,
        },
        y: cardYValues.yEnd
      })
    });

    gsap.utils.toArray('.project-card-decoration').forEach(decoration => {
      gsap.set(decoration as HTMLElement, {
          y: decorationYValues.yStart,
      });

      gsap.to(decoration as HTMLElement, {
        scrollTrigger:{
          trigger: decoration as HTMLElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: decorationYValues.yEnd,
      })
    });

    gsap.utils.toArray('.project-card-decoration-reversed').forEach(decoration => {
      gsap.set(decoration as HTMLElement, {
        y: decorationYValues.yStart,
      });

      gsap.to(decoration as HTMLElement, {
        scrollTrigger: {
          trigger: decoration as HTMLElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: decorationYValues.yEnd,
      })
    });

    gsap.utils.toArray('.preview-code-links').forEach(decoration => {
      gsap.set(decoration as HTMLElement, {
        y: '0%',
      });

      gsap.to(decoration as HTMLElement, {
        scrollTrigger: {
          trigger: decoration as HTMLElement,
          start: '-200% bottom',
          end: '-300px top',
          scrub: 1,
        },
        y: '-100px',
      })
    });

    gsap.utils.toArray('.color-line-left').forEach(project => {
      gsap.set(project as HTMLElement, {
          x: '-100%',
      });

      gsap.to(project as HTMLElement, {
        scrollTrigger: {
          trigger: project as HTMLElement,
          start: 'top bottom',
          end: 'bottom 15%',
          scrub: 1,
        },
        x: '-50%'
      })
  });

    gsap.utils.toArray('.color-line-right').forEach(project => {
        gsap.set(project as HTMLElement, {
            x: '100%',
        });
    
        gsap.to(project as HTMLElement, {
            scrollTrigger: {
            trigger: project as HTMLElement,
            start: '-70px bottom',
            end: '-70px 15%',
            scrub: 1,
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
