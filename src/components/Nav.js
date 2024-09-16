import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from '../images/Asset 16@4x.png'

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/reservation">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/order-online">
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
