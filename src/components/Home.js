import React from 'react'
import '../styles/Home.css'
import { Presentation } from './Presentation'

function Home() {
  return (
    <div className='Home' id='home'>
        <div className='home-subcontainer'>
          <Presentation />
        </div>
        {/*
        <div className='border-bottom border'></div>
        <div className='border-top border'></div>
        */}
    </div>
  )
}

export default Home