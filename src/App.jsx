import { useState } from 'react'
import NavbarDefault from './component/NavbarDefault'
import HeroSection from './component/HeroSection'
import PortofolioSection from './component/PortofolioSection'
import BackgroundSection from './component/BackgroundSection'
import ClientSection from './component/ClientSection'
import TestimoniSection from './component/TestimoniSection'
import ProsesSection from './component/ProsesSection'
import PaketSection from './component/PaketSection'
import FooterDefault from './component/FooterDefault'

function App() {

  return (
    <div className='bg-[#0C1127] relative overflow-hidden w-full'>
      <BackgroundSection />
      {/* <p className='text-white'>asdasddd</p> */}
      <NavbarDefault />
      <HeroSection />
      <ClientSection />
      <PortofolioSection />
      <TestimoniSection />
      <ProsesSection />
      <PaketSection />
      <FooterDefault />
    </div>
  )
}

export default App
