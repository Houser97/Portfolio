import { useEffect, useRef } from 'react'
import '../styles/Home.css'
import Lottie from 'lottie-web'
import animation from '../../assets/Lottie/animation.json'

const HomeSvg = () => {

  const lottieContainer = useRef(null)

  useEffect(() => {
    if(!lottieContainer.current) return;
    const instance = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    })

    return () => {
      instance.destroy()
    }
  }, [lottieContainer])
  
  return (
    <div className='svg-home' ref={lottieContainer}></div>
  )
}

export default HomeSvg