import React, { useState } from "react";
import black_techs from "../images/black_techs.jpg";
import apps from "../images/pexels-apps.jpg";
import code from "../images/html.jpg";
import ww from "../images/WW_bizcard.png";
import switches from "../images/slide22.jpg";
import server from "../images/server_room.jpg";

const Services = ({ id, title, image, description }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="service-card">
      <div className="id">{id}</div>
      <div>
        <img className="image" src={image} alt={title} />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
  //   const [service, setService] = useState([
  //     {
  //       id: 1,
  //       title: "IT Consulting",
  //       img: `${black_techs}`,
  //       description:
  //         "Unlock the full potential of your organization's IT infrastructure with our specialized consulting services. At Innovative Connexions, we understand that every business is unique, which is why we offer personalized IT consulting solutions tailored to your specific needs and goals.",
  //     },
  //     {
  //       id: 2,
  //       title: "Mobile Applications",
  //       img: `${apps}`,
  //       description:
  //         "Elevate your business with custom-designed mobile applications that cater to your unique needs and objectives. At Innovative Connexions, we specialize in crafting original, user-friendly mobile apps that drive engagement, streamline processes, and enhance brand visibility.",
  //     },
  //     {
  //       id: 3,
  //       title: "Web Development",
  //       img: `${code}`,
  //       description:
  //         "We specialize in offering comprehensive web development solutions tailored to meet the unique needs of our clients. Our expert team of developers possesses a wealth of experience and technical expertise to craft dynamic and engaging websites that elevate your online presence.",
  //     },
  //     {
  //       id: 4,
  //       title: "Graphic Design",
  //       img: `${ww}`,
  //       description:
  //         "From logos and branding materials to marketing collateral and digital assets, I offer a comprehensive range of design services tailored to suit your specific requirements.",
  //     },
  //     {
  //       id: 5,
  //       title: "Network Maintenance",
  //       img: `${switches}`,
  //       description:
  //         "As a seasoned network administrator, I understand the critical role that technology plays in the success of your business, and I'm here to ensure that your network operates at peak performance.",
  //     },
  //     {
  //       id: 6,
  //       title: "Infrastructure Configuration",
  //       img: `${server}`,
  //       description:
  //         "With a passion for technology and a knack for problem-solving, I specialize in keeping your IT infrastructure running smoothly and efficiently.",
  //     },
  //   ]);
};

export default Services;
