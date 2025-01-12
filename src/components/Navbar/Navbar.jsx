import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="nav">
      <div id="logo">
        <img src="" alt="" />
      </div>
      <div id="routers">
        <ul>
          <li>
            <Link to="/home" className="routes">
              <span>Logo</span> Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="routes">
              <span>Logo</span> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="routes">
              <span>Logo</span> Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" className="routes">
              <span>Logo</span> Experience
            </Link>
          </li>
          <li>
            <Link to="/contact" className="routes">
              <span>Logo</span> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div id="toggle">
        <img src="" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
