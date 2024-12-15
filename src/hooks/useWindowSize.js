import { useEffect } from "react";
import { useState } from "react";

export default function useWindowSize(mobileThreshold = 800){
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined, 
    })

    const isMobile = windowSize.width <= mobileThreshold
    
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
    
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return {
      windowSize,
      isMobile
    };
}