import "./Project.scss";
import link from "../../assets/link.png";
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import { useEffect } from "react";
import AOS from "aos";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div id="Project">
      <div id="header" data-aos="zoom-out">
        <h1>Projects</h1>
        <p>
          Showcasing innovative solutions through real-world projects. Each line
          of code and every design detail reflects my passion for solving
          problems and delivering impactful results.
        </p>
      </div>

      <div id="projects">
        <div className="project" data-aos="fade-up-right">
          <div className="project-image">
            <img src={P2} alt="" />
          </div>

          <div className="content">
            <div className="heading">
              <span>Task Management System</span>
              <a
                href="https://task-management-brown-eight.vercel.app/"
                target="_blank"
                rel="nooperner noreference"
              >
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Design and Developed Task management system to manage the
              important task with user friendly design patterns.
              <br />
              <br />
              Techs Used : Node JS, Express JS, React JS, Restfull API's and
              more....
            </p>
          </div>
        </div>

        <div className="project" data-aos="fade-up-left">
          <div className="project-image">
            <img src={P1} alt="Project.png" />
          </div>

          <div className="content">
            <div className="heading">
              <span>E-COMMERCE</span>
              <a
                href="https://e-commerce-sooty-gamma.vercel.app/"
                target="_blank"
                rel="nooperner noreference"
              >
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Design and Developed E-Commerce web app for food Orders.
              <br />
              <br />
              Techs Used : Node JS, Express JS, Validation, React JS, Sass and
              more....
            </p>
          </div>
        </div>

        <div className="project" data-aos="fade-up-right">
          <div className="project-image">
            <img src={P3} alt="Project.png" />
          </div>

          <div className="content">
            <div className="heading">
              <span>Job Finder</span>
              <a
                href="https://izhar-pasha.github.io/Job-Finder/"
                target="_blank"
                rel="nooperner noreference"
              >
                <img src={link} alt="link.png" />
              </a>
            </div>
            <p>
              Design and Developed Get Hired.com to show case my skills and tech
              experience.
              <br />
              <br />
              Techs Used : React JS, Tailwind CSS, Sass and more....
            </p>
          </div>
        </div>

        {/* <div className="project">
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
        </div> */}
      </div>
    </div>
  );
};

export default Project;
