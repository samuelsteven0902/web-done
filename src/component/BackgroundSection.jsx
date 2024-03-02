import React from 'react'
import bg1 from '../assets/img/bg/bg1.png'
import bg2 from '../assets/img/bg/bg2.png'

function BackgroundSection() {
  return (
    <>
        <img src={bg1} alt='bg1' className='absolute animate-pulse  '/>
        <img src={bg2} alt='bg1' className='absolute right-0 animate-pulse'/>
    </>
  )
}

export default BackgroundSection