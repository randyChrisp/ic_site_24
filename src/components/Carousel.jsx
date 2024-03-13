import React from "react";
import "./Carousel.css";
import { useEffect } from "react";
import apps from "../images/pexels-apps.jpg";
import black_techs from "../images/black_techs.jpg";
import code from "../images/html.jpg";
import ww from "../images/WW_bizcard.png";
import switches from "../images/slide22.jpg";
import server from "../images/server_room.jpg";
import repair from "../images/repair.png";

const Carousel = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    const activate = (e) => {
      const items = document.querySelectorAll(".item");

      if (e.target.matches(".next")) {
        slider.append(items[0]);
      }

      if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };

    document.addEventListener("click", activate, false);

    return () => {
      // Cleanup or remove event listeners if needed
      document.removeEventListener("click", activate, false);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <div className="carousel-container">
        <main>
          <ul className="slider">
            <li
              className="item"
              style={{ backgroundImage: `url(${black_techs})` }}
            >
              <div className="content">
                <h2 className="title">"IT Consulting"</h2>
                <p className="description">
                  {" "}
                  Unlock the full potential of your organization's IT
                  infrastructure with our specialized consulting services. At
                  Innovative Connexions, we understand that every business is
                  unique, which is why we offer personalized IT consulting
                  solutions tailored to your specific needs and goals.{" "}
                </p>
                <button>Read More</button>
              </div>
            </li>
            <li
              className="item"
              style={{
                backgroundImage: `url(${apps})`,
              }}
            >
              <div className="content">
                <h2 className="title">"Mobile Applications"</h2>
                <p className="description">
                  {" "}
                  Elevate your business with custom-designed mobile applications
                  that cater to your unique needs and objectives. At Innovative
                  Connexions, we specialize in crafting original, user-friendly
                  mobile apps that drive engagement, streamline processes, and
                  enhance brand visibility.{" "}
                </p>
                <button>Read More</button>
              </div>
            </li>
            <li
              className="item"
              style={{
                backgroundImage: `url(${code})`,
              }}
            >
              <div className="content">
                <h2 className="title">"Web Development"</h2>
                <p className="description">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore fuga voluptatum, iure corporis inventore praesentium
                  nisi. Id laboriosam ipsam enim.{" "}
                </p>
                <button>Read More</button>
              </div>
            </li>
            <li
              className="item"
              style={{
                backgroundImage: `url(${ww})`,
              }}
            >
              <div className="content">
                <h2 className="title">"Graphic Design"</h2>
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore fuga voluptatum, iure corporis inventore praesentium
                  nisi. Id laboriosam ipsam enim.
                </p>
                <button>Read More</button>
              </div>
            </li>
            <li
              className="item"
              style={{
                backgroundImage: `url(${switches})`,
              }}
            >
              <div className="content">
                <h2 className="title">"Network Maintenance"</h2>
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore fuga voluptatum, iure corporis inventore praesentium
                  nisi. Id laboriosam ipsam enim.
                </p>
                <button>Read More</button>
              </div>
            </li>
            <li
              className="item"
              style={{
                backgroundImage: `url(${server})`,
              }}
            >
              <div className="content">
                <h2 className="title">"Infrastructure Configuration"</h2>
                <p className="description">
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempore fuga voluptatum, iure corporis inventore praesentium
                  nisi. Id laboriosam ipsam enim.{" "}
                </p>
                <button>Read More</button>
              </div>
            </li>
          </ul>
          <nav className="carousel-nav">
            <button className="btn prev" name="arrow-back-outline">
              &#8249;
            </button>
            <button className="btn next" name="arrow-forward-outline">
              &#8250;
            </button>
          </nav>
        </main>
      </div>
    </>
  );
};

export default Carousel;
