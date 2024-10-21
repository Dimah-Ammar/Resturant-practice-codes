import React from 'react'
import './teaminfo.css'
const Teaminfo = () => {
  return (
    <section className="team-info">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <div className="team-member">
          <h2>Team Members</h2>
          <h1>Our Master Chefs</h1>
          <div className="team-grid">
            <div className="profile-pic">
              <img src="https://www.hotelierindia.com/cloud/2023/01/30/F38XtTDO-Maharaj-Pratap-Swami_Sofitel-Mumbai-BKC-1200x1200.jpg" alt="chef" />
              <div className="info">
                <h3>Peter</h3>
                <p>Executive Chef</p>
                <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="profile-pic">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPrkvQfBHxQWx64m7jwRJ_-5B1Nh8nqTAAA&s" alt="chef" />
              <div className="info">
                <h3>Henry</h3>
                <p>Head Chef</p>
                <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
            <div className="profile-pic">
              <img src="https://www.hotelierindia.com/cloud/2023/05/09/yG5SxXFh-Executive-Chef_Ren-Ahmedabad-1200x1200.jpg" alt="chef" />
              <div className="info">
                <h3>Alex</h3>
                <p>Butcher Chef</p>
                <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  
}

export default Teaminfo
