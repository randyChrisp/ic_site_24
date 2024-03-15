import React from "react";
import "./Carousel.css";
import { useEffect, useState, useCallback } from "react";
import apps from "../images/pexels-apps.jpg";
import black_techs from "../images/black_techs.jpg";
import code from "../images/html.jpg";
import ww from "../images/WW_bizcard.png";
import switches from "../images/slide22.jpg";
import server from "../images/server_room.jpg";
import Modal from "./Modal";

const Carousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [services, setServices] = useState([
    {
      id: 1,
      title: "IT Consulting",
      image: `${black_techs}`,
      description:
        "Unlock the full potential of your organization's IT infrastructure with our specialized consulting services. At Innovative Connexions, we understand that every business is unique, which is why we offer personalized IT consulting solutions tailored to your specific needs and goals.",
    },
    {
      id: 2,
      title: "Mobile Applications",
      image: `${apps}`,
      description:
        "Elevate your business with custom-designed mobile applications that cater to your unique needs and objectives. At Innovative Connexions, we specialize in crafting original, user-friendly mobile apps that drive engagement, streamline processes, and enhance brand visibility.",
    },
    {
      id: 3,
      title: "Web Development",
      image: `${code}`,
      description:
        "We specialize in offering comprehensive web development solutions tailored to meet the unique needs of our clients. Our expert team of developers possesses a wealth of experience and technical expertise to craft dynamic and engaging websites that elevate your online presence.",
    },
    {
      id: 4,
      title: "Graphic Design",
      image: `${ww}`,
      description:
        "From logos and branding materials to marketing collateral and digital assets, I offer a comprehensive range of design services tailored to suit your specific requirements.",
    },
    {
      id: 5,
      title: "Network Maintenance",
      image: `${switches}`,
      description:
        "As a seasoned network administrator, I understand the critical role that technology plays in the success of your business, and I'm here to ensure that your network operates at peak performance.",
    },
    {
      id: 6,
      title: "Infrastructure Configuration",
      image: `${server}`,
      description:
        "With a passion for technology and a knack for problem-solving, I specialize in keeping your IT infrastructure running smoothly and efficiently.",
    },
  ]);

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
            {services.map((service) => {
              return (
                <li
                  className="item"
                  key={service.id}
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="content" id={service.id}>
                    <h2 className="title">{service.title}</h2>
                    <p className="description"> {service.description} </p>
                    <button onClick={() => openModal(service)}>
                      Read More
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
      {showModal && selectedService && (
        <Modal
          id={selectedService.id}
          title={selectedService.title}
          description={selectedService.description}
          image={selectedService.image}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Carousel;
