import "./Sidebar.scss";
import profile_picture from "../../assets/Profile-Picture.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";

const Sidebar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div id="sidebar">
      <div id="photo" data-aos="zoom-out">
        <img src={profile_picture} alt="Profile.png" />
      </div>
      <div id="text-content">
        <h1 data-aos="fade-up-right">Izhar Pasha</h1>
        <h3 data-aos="fade-up-left">
          Full-Stack Developer | Web Designer | Tech Enthusiast
        </h3>
        <p data-aos="fade-down-right">
          Passionate about technology, constantly learning, and bringing ideas
          to life through innovative solutions.
        </p>
      </div>
      <div id="social-icons">
        <a
          href="https://github.com/Izhar-Pasha"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/izharpasha/"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:mdizharpasha07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-left"
        >
          <IoMail />
        </a>
      </div>
      <div id="resume">
        <a
          href="https://drive.google.com/file/d/1R6uAL3XQNcYju8-sIG6f7eczZS1DG40a/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <span>
            <FaArrowRightLong />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
