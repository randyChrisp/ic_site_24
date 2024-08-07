import React from "react";
import { useEffect, useState } from "react";
import "./Projects.css";
import stocks from "../images/stocks.jpg";
import cocktails from "../images/cocktails.jpg";
import sale from "../images/sale.jpg";
import weather from "../images/weather3.jpg";
import tic_tac_toe from "../images/tic-tac-toe.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "ShopEase Demo",
      description:
        "ShopEase Demo is a feature-rich web application designed to showcase the functionality of a modern online store.",
      image: `${sale}`,
      link: "/notFound",
    },
    {
      id: 2,
      name: "CocktailFinder",
      description:
        "CocktailFinder is an innovative web application that allows users to search for cocktails by name and access detailed recipes.",
      image: `${cocktails}`,
      link: "/cocktails",
    },
    {
      id: 3,
      name: "StockView",
      description:
        "StockView is a dynamic web application designed to provide comprehensive stock market details.",
      image: `${stocks}`,
      link: "/stocks",
    },
    {
      id: 4,
      name: "WeatherNow",
      description:
        "WeatherNow is a user-centric web application that delivers accurate and timely weather information based on user input.",
      image: `${weather}`,
      link: "/notFound",
    },
    {
      id: 5,
      name: "TicTacToeMaster",
      description:
        "TicTacToeMaster is a sleek web application that lets users play the classic game of tic-tac-toe against a computer opponent.",
      image: `${tic_tac_toe}`,
      link: "/notFound",
    },
  ]);
  const openLink = (project) => {
    setSelectedProject(project);
  };

  useEffect(() => {
    const activate = (e) => {
      const slider = document.querySelector(".slider");
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
  }, []);

  return (
    <>
      <div className="project-container">
        <main>
          <ul className="slider">
            {projects.map((project) => {
              return (
                <li
                  className="item"
                  key={project.id}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="content" id={project.id}>
                    <h2 className="name">{project.name}</h2>
                    <p className="description"> {project.description} </p>
                    <button>
                      <Link style={{ color: "white" }} to={project.link}>
                        Go To Project
                      </Link>
                    </button>
                  </div>
                </li>
              );
            })}
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

export default Projects;
