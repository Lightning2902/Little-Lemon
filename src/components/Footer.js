import React from "react";
import littleLemonLogo from "../images/Asset 20@4x.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Left side: Little Lemon image */}
      <div className="footer-section">
        <img
          src={littleLemonLogo}
          alt="Little Lemon Logo"
          className="footer-logo"
        />
      </div>

      {/* Doormat Navigation section */}
      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <ul className="footer-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="reservations">Reservation</a>
          </li>
          <li>
            <a href="order-online">Order Online</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </div>

      {/* Contacts section */}
      <div className="footer-section">
        <h3>Contacts</h3>
        <ul className="footer-links">
          <li>
            <a href="/address">Address</a>
          </li>
          <li>
            <a href="/phone">Phone Number</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </ul>
      </div>

      {/* Social Media Links section */}
      <div className="footer-section">
        <h3>Social Media Links</h3>
        <ul className="footer-links">
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
