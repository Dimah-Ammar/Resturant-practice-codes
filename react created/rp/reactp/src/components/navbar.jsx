import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import Spinner from './spinner' // Importing the spinner component
const Navbar = () => {
    const handleMenuClick = () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks) {
          navLinks.classList.toggle('active');
        } else {
          console.error('Element with id "nav-links" not found');
        }
      };

      const handleLinkClick = () => {
      const [loading, setLoading] = useState(true); // State to manage the spinner
     // UseEffect to handle the spinner timing
     useEffect(() => {
     const timer = setTimeout(() => {
     setLoading(false); // Set loading to false after 3 seconds
     }, 1000);
    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
    }, []);

    if (loading) {
    return <Spinner />; // Display the spinner while loading is true
    }
  };
      
      
  return (
    <header>
        <nav>
          <div className="logo">
            <span className="icon">🍴</span>
            <span className="brand">Restoran</span>
          </div>
         
          <ul className="nav-links" id="nav-links">
            <li><Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', fontSize: '1.5rem', position: 'relative' }} className="linker" onClick={handleLinkClick}>HOME</Link></li>
            <li><Link to="/contact" style={{ fontWeight: 'bold', textDecoration: 'none', fontSize: '1.5rem', position: 'relative' }} className="linker" onClick={handleLinkClick}>CONTACT</Link></li>
            <button className="btn-bookM" style={{ marginLeft: '2rem' }}> <Link to="/reservation" style={{ textDecoration: 'none', fontSize: '1.5rem', position: 'relative', color: 'whitesmoke' }}onClick={handleLinkClick}>BOOK A TABLE</Link></button>
          </ul>
          <div className="menu-icon" id="menuIcon"onClick={handleMenuClick}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div />
          </div>
        </nav>
      </header>
  );
}

export default Navbar
