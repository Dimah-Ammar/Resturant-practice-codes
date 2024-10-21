import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-content" style={{maxWidth: '50%', textAlign: 'left'}}>
          <h1>Enjoy Our<br />Delicious<br />Meal</h1>
          <p>Quality Our Motto Service Our Priority</p>
          <button onClick={() => window.location.href = '#Reservation-form'} className="btn-book">BOOK A TABLE</button>
        </div>
        <div className="hero-image">
          <img src="https://newannapurnajoyoten.com/wp-content/uploads/2023/11/hero-768x768.webp" alt="Delicious Food" />
        </div>
      </section>
    );
}

export default Hero
