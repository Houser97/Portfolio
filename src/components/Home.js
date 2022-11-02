import React from 'react'
import '../styles/Home.css'
import { Presentation } from './Presentation'

function Home() {
  return (
    <div className='Home'>
        <div className='home-subcontainer'>
          <Presentation />
        </div>
    </div>
  )
}

export default Home