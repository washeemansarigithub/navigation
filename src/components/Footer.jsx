// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Client</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Service</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>Technology</li>
            <li>Digital Marketing</li>
            <li>SEO Service</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><strong>Head Office :</strong></p>
          <p>3C, A1 Sector 10, Noida, Uttar Pradesh, India</p>
          <p><strong>New Branch Office :</strong></p>
          <p>2nd floor plot no.-64 Block-F, Sector-8, Noida, Uttar Pradesh, India</p>
          <p><strong>Branch Office :</strong></p>
        </div>
        <div className="footer-section subscription">
          <h4>Subscription</h4>
          <p>Join Our Newsletter</p>
          <div className="subscription-content">
            <img src="your-image-url.jpg" alt="Namrata Universal" className="logo" />
            <button className="youtube-button">YouTube</button>
          </div>
          <p>Email: info@namratauniversal.com</p>
          <p>Email: namratauniversal@gmail.com</p>
          <button className="pay-now-button">PAY NOW !</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
