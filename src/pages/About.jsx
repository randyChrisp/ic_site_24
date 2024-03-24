import React from "react";
import "../components/Carousel.css";
import office from "../images/office2.jpg";
import darkLaptop from "../images/laptop-dark.jpg";
import deskLaptop from "../images/laptop-desk.jpg";
import monitors from "../images/keyboard-monitors.jpg";
import great from "../images/great.jpg";
import earth from "../images/earth.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={great} alt="laptop" className="about-img" />
        </div>
        <div className="about-modals">
          <div className="div1">
            <div className="intro in">
              <h3>Introduction</h3>
            </div>
            <div className="about-us">
              <h3>About Us</h3>
            </div>
            <div className="skills">
              <h3>Experience</h3>
            </div>
            <div className="contact">
              <h3>Contact</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
