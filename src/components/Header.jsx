import React, { useState } from "react";
import imageLogo from "../images/IC_LLC.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#0575e6",
  };

  const [showLinks, setShowLinks] = useState(false);
  const navToggle = (event) => {
    setShowLinks((current) => !current);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={imageLogo} className="nav-logo" alt="logo" />
          <button className="nav-toggle" onClick={navToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* links */}
        <ul className={showLinks ? "links show-links" : "links"}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
        {/* social media */}
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/webwondersinc" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Web_Wonders_Inc" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/web_wonders_inc/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/randy-chrisp" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
