import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <p>&#169; 2024 INNOVATIVE CONNEXIONS LLC</p>
        <ul className="footer-icons">
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
    </footer>
  );
};

export default Footer;
