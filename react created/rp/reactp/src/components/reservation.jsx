import React, {useState} from 'react'
import './reservation.css'
const Reservation = () => {
    function validate() {
        var a = document.getElementById('name').value;
        var b = document.getElementById('email').value;
        var c = document.getElementById('date').value;
        var d = document.getElementById('time').value;
        var e = document.getElementById('people').value;
        var f = document.getElementById('request').value;
    
        if (a === "" || b === "" || c === "" || d === "" || e === "") {
            alert("All fields are mandatory except of REQUEST");
            return false; 
        }
    
        else if (a.length > 50 || f.length > 250) {
            alert("Name should be less than 50 letters and request less than 250 letters");
            return false; 
        }
    
        else if (!/^[a-zA-Z\s\-]+$/.test(a)) {
            alert("Name must only consist of letters, spaces, and hyphens");
            return false; 
        }
        alert('Reserved');
        return true;
    }
    
    /*const submission = document.getElementById('submit');
    submission.addEventListener('click', function() {
        validate();
        
    });*/
    
  return (
    <section className="Reservetion-form" id="Reservation-form">
        <div className="form-section">
          <img src="https://cdn2.vectorstock.com/i/1000x1000/88/96/two-friends-have-lunch-or-dinner-sitting-at-table-vector-36338896.jpg" />
          <div className="form-wrapper">
            <h1>Reservation</h1>
            <h2>Book A Table Online</h2>
            <form id="reservationForm" className="reservationForm">
              <input type="text" id="name" name="name" placeholder="Your Name" maxLength={50} required />
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <input type="text" id="date" name="date" placeholder="Date (DD/MM/YY)" required />
              <input type="text" id="time" name="time" placeholder="Time (HH:MM)" required />
              <input type="text" id="people" name="people" placeholder="No of people" required />
              <textarea id="request" name="request" placeholder="Special Request" maxLength={250} defaultValue={""} />
              <button type="submit" id="submit" onClick={validate}>BOOK NOW</button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Reservation
