import React from 'react'
import './about.css'
const About = () => {
  return (
    <section className="about-us">
        <div className="about-images">
          <div className="image-row">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK7vP8h-92GnYhTH3KP_bFQYp79BMYKbggIlphHEqJ058flua" className="im1" alt="image1" />
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSySrsANH0l-NQuzqpSQ-Kf3G4uaMmZkmjRZpfD2CEA6_Un5qPv" className="im2" alt="image2" />
          </div>
          <div className="image-row">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTaNMXsQo1BsLq-4edDQumKD240rZ-xbhSH9L1c6P7TX6bVtxPC" className="im3" alt="image3" />
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSjoh1pKQ8JY4LfGX1czww8T-bqszibdGwLVytRNeVg2jv-OeN" className="im4" alt="image4" />
          </div>
        </div>
        <div className="about-content">
          <h3>About Us</h3>
          <h1>Welcome to <span>🍴</span> Restoran</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <div className="about-info">
            <div className="info-box">
              <h2> 13 </h2>
              <p>Years of <span>Experience</span></p>
            </div>
            <div className="info-box">
              <h2> 50 </h2>
              <p>Popular <span>Master Checfs</span></p>
            </div>
          </div>
          <button href="#" className="btn-read">READ MORE</button> 
        </div>
      </section>
    );
}

export default About
