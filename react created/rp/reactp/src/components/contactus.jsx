import React from 'react'
import GoogleMapSheet from './googlemap';
import './contactus.css'
const ContactUs = () => {
    function validate() {
        var a = document.getElementById('name').value;
        var b = document.getElementById('email').value;
        var c = document.getElementById('subject').value;
        var d = document.getElementById('message').value;
    
        if (a === "" || b === "" || c === "" || d === "") {
            alert("All fields are mandatory");
            return false; 
        }
    
        else if (a.length > 50 || c.length > 100 || d.length > 250) {
            alert("Name should be less than 50 letters, subject less than 100 letters and message less than 250 letters");
            return false; 
        }
    
        else if (!/^[a-zA-Z\s\-]+$/.test(a)) {
            alert("Name must only consist of letters, spaces, and hyphens");
            return false; 
        }
        else if (!/^[a-zA-Z\s\-]+$/.test(c)) {
            alert("Subject must only consist of letters, spaces, and hyphens");
            return false; 
        }
        else if (!/^[a-zA-Z\s\-]+$/.test(d)) {
            alert("Message must only consist of letters, spaces, and hyphens");
            return false; 
        }
        alert('Message Sent');
        return true;
    }
    
    /*const submission = document.getElementById('send');
    submission.addEventListener('click', function() {
        validate();
        
    });*/
    
  return (
    <section className="contact-us">
        <div className="container">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <h2>Contact For Any Query</h2>
            <div className="infoC">
              <p style={{fontWeight: 'bold'}}>Booking: <span className="email">booking@gmail.com</span></p>
              <p style={{fontWeight: 'bold'}}>General: <span className="email">general@gmail.com</span></p>
              <p style={{fontWeight: 'bold'}}>Technical: <span className="email">tech@gmail.com</span></p>
            </div>
          </div>
          <div className="form-sectionC">
            {/*<img src="data:image/jpeg;base64,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" alt="Image" />*/}
            <GoogleMapSheet/>
            <div className="contact-form">
              <form id="contactForm">
                <input type="text" id="name" name="name" placeholder="Your Name" maxLength={50} required />
                <input type="email" id="email" name="email" placeholder="Your Email" required />
                <input type="text" id="subject" name="subject" placeholder="Subject" maxLength={100} required />
                <textarea id="message" name="message" placeholder="Message" maxLength={250} required defaultValue={""} />
                <button type="submit" className="send-btn" id="send" onClick={validate}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactUs
