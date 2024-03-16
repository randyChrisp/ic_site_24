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
      text:
        `As an IT consulting service provider, we offer tailored expertise and support to businesses seeking to optimize their technology utilization and maximize their digital potential. Our service encompasses a comprehensive range of solutions designed to address the unique challenges and objectives of each client.` +
        ` Our team of experienced IT consultants works closely with your organization to develop strategic IT plans aligned with your business objectives. Whether you're looking to improve efficiency, enhance security, or drive innovation, we provide expert guidance every step of the way.`,
    },
    {
      id: 2,
      title: "Mobile Applications",
      image: `${apps}`,
      description:
        "Elevate your business with custom-designed mobile applications that cater to your unique needs and objectives. At Innovative Connexions, we specialize in crafting original, user-friendly mobile apps that drive engagement, streamline processes, and enhance brand visibility.",
      text:
        `From concept to deployment, we provide end-to-end mobile app development services to ensure a seamless and efficient process. Our experienced team handles everything from initial ideation and design to coding, testing, and final deployment, keeping you informed and involved every step of the way.` +
        ` Furthermore, our commitment to your success doesn't end with the launch of your app. We provide ongoing support and maintenance services to keep your app running smoothly and efficiently. Whether it's bug fixes, updates, or enhancements, our team is here to ensure your app remains at the top of its game.` +
        ` Contact us today to learn more about our mobile app development services and start your journey towards mobile success.`,
    },
    {
      id: 3,
      title: "Web Development",
      image: `${code}`,
      description:
        "We specialize in offering comprehensive web development solutions tailored to meet the unique needs of our clients. Our expert team of developers possesses a wealth of experience and technical expertise to craft dynamic and engaging websites that elevate your online presence.",
      text:
        `Whether you're a startup looking to establish your brand identity or an established enterprise seeking to revamp your digital footprint, we have the skills and resources to bring your vision to life. Our collaborative approach ensures that we understand your goals, target audience, and business objectives, allowing us to create customized solutions that resonate with your audience and drive results.` +
        ` From front-end design to back-end functionality, our web development services cover every aspect of the development process. We leverage the latest technologies and industry best practices to build responsive, mobile-friendly websites that deliver seamless user experiences across devices.` +
        ` Get in touch with us today to learn more about our web development services and how we can help you achieve your online goals.`,
    },
    {
      id: 4,
      title: "Graphic Design",
      image: `${ww}`,
      description:
        "Our approach to graphic design is rooted in collaboration and communication. We take the time to understand your unique vision, objectives, and target audience, allowing us to create designs that not only meet your needs but exceed your expectations.",
      text:
        `From logos and branding materials to marketing collateral and digital assets, we offer a comprehensive range of design services tailored to suit your specific requirements. Whether you're a startup looking to establish your brand identity or an established business seeking to refresh your visual presence, we have the skills and expertise to bring your ideas to life.` +
        ` With a focus on quality, creativity, and client satisfaction, I am committed to delivering designs that not only meet your objectives but exceed your expectations. Let's work together to bring your vision to life and take your brand to the next level.`,
    },
    {
      id: 5,
      title: "Network Maintenance",
      image: `${switches}`,
      description:
        "As a seasoned network administrator, I understand the critical role that technology plays in the success of your business, and I'm here to ensure that your network operates at peak performance.",
      text: `We will analyze your existing network architecture to identify areas for improvement and optimization. Whether it's enhancing network speed, reducing latency, or improving overall reliability, we implement solutions tailored to your specific needs to maximize efficiency and productivity.`,
    },
    {
      id: 6,
      title: "Infrastructure Configuration",
      image: `${server}`,
      description:
        "With a passion for technology and a knack for problem-solving, I specialize in keeping your IT infrastructure running smoothly and efficiently.",
      text:
        `No two businesses are alike, which is why we offer tailored solutions to meet your unique needs. Whether you're a small business looking to streamline your IT operations or a large enterprise in need of enterprise-grade solutions, we have the skills, expertise, and dedication to meet your requirements.` +
        ` Ready to take your IT infrastructure to the next level? Get in touch with us today to discuss your infrastructure needs, and let's work together to ensure that your systems are always running at their best!`,
    },
  ]);

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
          // description={selectedService.description}
          text={selectedService.text}
          image={selectedService.image}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Carousel;
