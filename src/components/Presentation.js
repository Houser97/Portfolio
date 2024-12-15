import React, { useEffect, useState } from 'react'
import '../styles/Presentation.css'
import TextAnimation from './TextAnimation'

export const Presentation = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    
  return (
    <div className='app_presentation'>
        <TextAnimation />
    </div>
  )
}
