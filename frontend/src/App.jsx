import React, { useEffect, useRef } from 'react'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import PrizePool from './components/PrizePool'
import Sponsor from './components/Sponsor'
import Timeline from './components/Timeline'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

const App = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div data-scroll-container ref={scrollRef} className='w-full h-full'>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <PrizePool />
      <Sponsor />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App