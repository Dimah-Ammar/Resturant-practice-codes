import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Tiles from './components/tiles';
import About from './components/about';
import Menu from './components/menu';
import Reservation from './components/reservation';
import Teaminfo from './components/teaminfo';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tiles/>
      <About/>
      <Menu/>
      <Reservation/>
      <Teaminfo/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
