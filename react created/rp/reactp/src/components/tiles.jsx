import React from 'react'
import './tiles.css'
const Tiles = () => {
  return (
    <section style={{backgroundColor: 'rgba(0, 0, 139, 0.155)'}}>
        <div className="tiles">
          <div className="tile">
            <div className="icon">👨</div> 
            <h3>Master Chefs</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.</p>
          </div>
          <div className="tile">
            <div className="icon">🍴</div>
            <h3>Quality Food</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.</p>
          </div>
          <div className="tile">
            <div className="icon" style={{color: 'grey'}}>🛍</div>
            <h3>Online Order</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.</p>
          </div>
          <div className="tile">
            <div className="icon">📞</div>
            <h3>24/7 Service</h3>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam.</p>
          </div>
        </div>
      </section>
    );
}

export default Tiles
