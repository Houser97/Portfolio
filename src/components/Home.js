import React from 'react'
import '../styles/Home.css'
import { Presentation } from './Presentation'
import HomeSvg from './HomeSvg'

function Home() {
  return (
    <div className='Home' id='home'>
        <Presentation />
        <HomeSvg />
    </div>
  )
}

export default Home