import "./Sidebar.scss";
import profile_picture from "../../assets/Profile-Picture.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="photo">
        <img src={profile_picture} alt="Profile.png" />
      </div>
      <div id="text-content">
        <h1>Izhar Pasha</h1>
        <h3>Full-Stack Developer | Web Designer | Tech Enthusiast</h3>
        <p>
          Passionate about technology, constantly learning, and bringing ideas
          to life through innovative solutions.
        </p>
      </div>
      <div id="social-icons">
        <a
          href="https://github.com/Izhar-Pasha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/izharpasha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:mdizharpasha07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail />
        </a>
      </div>
      <div id="resume">
        <a
          href="https://drive.google.com/file/d/1fZ4EQSpT1URRJt9QugaNA434si70kMao/view?usp=drive_link"
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
