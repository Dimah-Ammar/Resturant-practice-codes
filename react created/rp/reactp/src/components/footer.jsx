import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return (
    <footer>
        <p>© Restaurant.All Right Reserved.</p>
        <ul className="footer-links" id="links">
          <li><Link to="/" style={{fontWeight: 'bold', fontSize: '10px', color: 'white', textDecoration: 'none'}}>HOME</Link></li>
          <li><Link to="/contact" style={{fontWeight: 'bold', fontSize: '10px', color: 'white', textDecoration: 'none'}}>CONTACT</Link></li>
        </ul>
      </footer>
    );
}

export default Footer
