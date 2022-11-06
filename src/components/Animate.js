import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Animate = ({children}) => {

    const project = useRef(null)

    useEffect(() => {
      const ref = project.current;

      gsap.set(ref, {
        autoAlpha: 0,
        y: 0,
      })
      
      gsap.to(ref, {
        scrollTrigger: {
            trigger: ref
        },
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: 'power3.out'
      })
    
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }, [])
    

  return (
    <div className='animate-project-card' ref={project}>
        {children}
    </div>
  )
}

export default Animate