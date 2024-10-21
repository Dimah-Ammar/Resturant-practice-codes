import React from 'react'
import { Link } from 'react-router-dom';
import './contacts.css'
const Contacts = () => {
  return (
    <section className="contact-section">
        <div className="contact">
          <h1>Contact Us</h1>
          <ul className="links" id="links">
            <li><Link to="/" style={{fontWeight: 'bold', fontSize: '15px', color: 'white', textDecoration: 'none'}}>HOME</Link></li>
            <li>/</li>
            <li><Link to="/contact" style={{fontWeight: 'bold', fontSize: '15px', color: 'white', textDecoration: 'none'}}>CONTACT</Link></li>
          </ul>
        </div>
      </section>
    );
}

export default Contacts
