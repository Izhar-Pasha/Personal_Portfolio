import { Link } from "react-router-dom";
import "./Navbar.scss";
// import logo from "../../assets/logo.gif";
// import darkmode from "../../assets/darkmode.png";
// import lightmode from "../../assets/lightmode.png";
import profile from "../../assets/Profile.png";
import project from "../../assets/Project.png";
import skills from "../../assets/Skills.png";
import contact from "../../assets/Contact.png";
import experience from "../../assets/Experience.png";

const Navbar = () => {
  return (
    <nav id="nav">
      <div id="logo">{/* <img src={logo} alt="logo.png" /> */}</div>
      <div id="routers">
        <ul>
          <li>
            <Link to="/" className="routes">
              <span className="icon">
                <img src={profile} alt="profile.png" title="Profile" />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="routes">
              <span className="icon">
                <img src={skills} alt="profile.png" />
              </span>
              <span className="text">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className="routes">
              <span className="icon">
                <img src={project} alt="profile.png" />
              </span>
              <span className="text">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/experience" className="routes">
              <span className="icon">
                <img src={experience} alt="profile.png" />
              </span>
              <span className="text">Experience</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="routes">
              <span className="icon">
                <img src={contact} alt="profile.png" />
              </span>
              <span className="text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <div id="toggle">
        <img src={darkmode} alt="darkmode.png" id="dark" />
        <img src={lightmode} alt="lightmode.png" id="light" />
      </div> */}
    </nav>
  );
};

export default Navbar;
