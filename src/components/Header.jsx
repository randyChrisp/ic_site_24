import React, { useState } from "react";
import imageLogo from "../images/IC_LLC.png";

const Header = () => {
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
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
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
            <a href="https://www.twitter.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
