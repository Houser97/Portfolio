import { useEffect } from "react";
import { useState } from "react";

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined, 
    })

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
      }
    
      return () => {
        second
      }
    }, [third])
    
}