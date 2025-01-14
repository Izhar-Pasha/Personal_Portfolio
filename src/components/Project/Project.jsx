import "./Project.scss";
import link from "../../assets/link.png";
import P1 from "../../assets/P1.png";

const Project = () => {
  return (
    <div id="Project">
      <div id="header">
        <h1>Tech Skills</h1>
        <p>
          Showcasing innovative solutions through real-world projects. Each line
          of code and every design detail reflects my passion for solving
          problems and delivering impactful results.
        </p>
      </div>

      <div id="projects">
        <div className="project">
          <div className="project-image">
            <img src={P1} alt="" />
          </div>

          <div className="content">
            <div className="heading">
              <span>E-COMMERCE</span>
              <a href="/image">
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              in aliquid corporis dolor reprehenderit nemo ratione porro.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={P1} alt="Project.png" />
          </div>

          <div className="content">
            <div className="heading">
              <span>E-COMMERCE</span>
              <a href="/image">
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              in aliquid corporis dolor reprehenderit nemo ratione porro.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={P1} alt="" />
          </div>

          <div className="content">
            <div className="heading">
              <span>E-COMMERCE</span>
              <a href="/image">
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              in aliquid corporis dolor reprehenderit nemo ratione porro.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="project-image">
            <img src={P1} alt="link.png" />
          </div>

          <div className="content">
            <div className="heading">
              <span>E-COMMERCE</span>
              <a href="/image">
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              in aliquid corporis dolor reprehenderit nemo ratione porro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
