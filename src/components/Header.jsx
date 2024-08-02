import React, { useState } from "react";
import imageLogo from "../images/IC_LLC.png";
import { NavLink } from "react-router-dom";

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
            to="projects"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Projects
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            About
          </NavLink>
          <NavLink
            to="cap"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Capability Statement
          </NavLink>
        </ul>
        {/* social media */}
        <ul className="social-icons">
          <li>
            <a
              href="https://www.facebook.com/innovativeconnexions"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/_IC_LLC_" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/innovative_connexions/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/randy-chrisp" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
