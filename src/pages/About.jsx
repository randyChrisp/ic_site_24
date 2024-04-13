import React, { useState } from "react";
import "../components/Carousel.css";
import Modal from "../components/Modal";
import office from "../images/office2.png";
import logo from "../images/logoModal.png";
import simple from "../images/simple.png";
import great from "../images/great.jpg";
import earth from "../images/earth.jpg";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const openModal = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [options, setOptions] = useState([
    {
      id: 1,
      title: "Introduction",
      text: (
        <>
          <p>
            Hello, I'm Randy, a seasoned network administrator and web developer
            with over 10 years of hands-on experience in crafting digital
            solutions. I hold a bachelor's degree in Information Technology,
            complemented by associate's degrees in both network/system
            administration and programming and development. Additionally, I am
            proud to hold a CompTIA Network+ certification, solidifying my
            expertise in networking technologies.
          </p>{" "}
          <br></br>
          <p>
            I'm from Cleveland, Ohio, so of course I'm a devoted Cleveland
            sports fan. When I'm not busy building networks or developing
            websites, you'll likely find me cheering for the Browns, Cavs, or
            Guardians, or engaging in my other passions. I enjoy boxing,
            execercising, attending concerts, and traveling to new places. And
            let's not forget my love for comedy shows – laughter truly is the
            best medicine.
          </p>{" "}
          <br></br>
          <p>
            My journey into web development started with a personal project:
            creating a website for my music. Since then, I've honed my skills
            and expanded my expertise, helping businesses and individuals alike
            bring their online visions to life.
          </p>{" "}
          <br></br>
          <p>
            Whether you're here to explore my portfolio, seek professional
            services, or simply share a passion for technology, I'm thrilled to
            have you visit my corner of the web. Let's connect, collaborate, and
            make something amazing together!
          </p>
        </>
      ),
      image: `${office}`,
    },
    {
      id: 2,
      title: "About Us",
      text: (
        <>
          <p>
            At Innovative Connexions LLC, our mission is to empower businesses
            and individuals with innovative digital solutions that harness the
            full potential of technology. With over a decade of experience in
            network administration and web development, we are dedicated to
            delivering unparalleled expertise and support to our clients.
          </p>{" "}
          <br></br>
          <p>
            Driven by a passion for excellence and fueled by a relentless
            pursuit of knowledge, we strive to exceed expectations in every
            project we undertake. Our commitment to staying at the forefront of
            technological advancements ensures that we provide cutting-edge
            solutions that address the unique needs and challenges of our
            clients.
          </p>{" "}
          <br></br>
          <p>
            Guided by integrity, professionalism, and a customer-centric
            approach, we foster long-lasting partnerships built on trust,
            transparency, and mutual respect. We understand that our success is
            intrinsically linked to the success of our clients, and we are
            unwavering in our dedication to helping them achieve their goals.
          </p>{" "}
          <br></br>
          <p>
            From crafting dynamic websites to optimizing network
            infrastructures, we are committed to delivering results that drive
            growth, enhance efficiency, and elevate the digital presence of our
            clients. At Innovative Connexions LLC, we don't just build solutions
            – we build relationships, and we're honored to be your trusted
            partner on your journey to success.
          </p>
        </>
      ),
      image: `${logo}`,
    },
    {
      id: 3,
      title: "Experience",
      text: (
        <>
          <h4>Front-End Development:</h4>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>HTML5</li>
            <li>Material-UI</li>
            <li>Bootstrap</li>
            <li>CSS3</li>
          </ul>
          <h4>Back-End Development:</h4>
          <ul>
            <li>Python</li>
            <li>C#</li>
            <li>.NET</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>C++</li>
          </ul>
          <h4>Database Management:</h4>
          <ul>
            <li>MySQL</li>
            <li>SQL Server</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
          <h4>Cloud & DevOps:</h4>
          <ul>
            <li>Azure</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>CI/CD</li>
            <li>Git</li>
          </ul>
          <h4>Infrastructure & Networking:</h4>
          <ul>
            <li>Active Directory</li>
            <li>DNS</li>
            <li>Firewalls</li>
            <li>DHCP</li>
            <li>Linux Servers</li>
            <li>Windows Servers</li>
            <li>LAN/WAN</li>
            <li>VPN</li>
            <li>VoIP</li>
            <li>Cloud Networking</li>
            <li>VMWare</li>
          </ul>
          <h4>Other Skills:</h4>
          <ul>
            <li>Agile Methodologies</li>
            <li>Scrum</li>
            <li>Project Management</li>
            <li>Technical Support</li>
            <li>ServiceNow</li>
            <li>Unit Testing</li>
            <li>UI/UX Design</li>
            <li>Documentation</li>
            <li>Training & Development</li>
          </ul>
        </>
      ),
      image: `${simple}`,
    },
    {
      id: 4,
      title: "Contact",
      text: (
        <>
          <div className="contact">
            <p>Innovative Connexions LLC</p>
            <p>1468 W. 9th St</p>
            <p>Cleveland, OH 44113</p>
            <p>Phone: (216) 545-1170</p>
            <p>Email: innovativeconnexionsllc@gmail.com</p>
          </div>
        </>
      ),
      image: `${earth}`,
    },
  ]);

  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={great} alt="laptop" className="about-img" />
        </div>
        <div className="about-modals">
          <div className="div1">
            {options.map((option) => {
              return (
                <div className="option" key={option.id}>
                  <button onClick={() => openModal(option)}>
                    <h3>{option.title}</h3>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showModal && selectedOption && (
        <Modal
          id={selectedOption.id}
          title={selectedOption.title}
          text={selectedOption.text}
          image={selectedOption.image}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default About;
