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
      name: "E-commerce App",
      description: "This is another project",
      image: `${sale}`,
    },
    {
      id: 2,
      name: "Cocktails App",
      description: "This is another project",
      image: `${cocktails}`,
      link: "/cocktails",
    },
    {
      id: 3,
      name: "Stocks App",
      description: "This is a project",
      image: `${stocks}`,
      link: "/stocks",
    },
    {
      id: 4,
      name: "Weather App",
      description: "This is another project",
      image: `${weather}`,
    },
    {
      id: 5,
      name: "Tic Tac Toe",
      description: "This is another project",
      image: `${tic_tac_toe}`,
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
