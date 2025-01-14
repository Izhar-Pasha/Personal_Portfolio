import "./Sidebar.scss";
import profile_picture from "../../assets/Profile-Picture.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

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
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <IoMail />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
