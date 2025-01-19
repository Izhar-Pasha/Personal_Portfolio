// import React from 'react'
import "./Home.scss";
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div id="home">
      <div id="header" data-aos="zoom-out">
        <h1>Introduction</h1>
        <p>
          Turning creativity into reality with expertise in coding, design, and
          problem-solving. Let’s build something extraordinary together.
        </p>
      </div>
      <div id="content">
        <h1 data-aos="fade-up">
          Hello, I'm <span>Izhar Pasha</span>
        </h1>
        <h3 data-aos="fade-right">FULL STACK DEVELOPER</h3>
        <p data-aos="fade-left">
          I'm passionate about building user-centric applications that solve
          real-world problems. With expertise in both frontend and backend
          development, I bring ideas to life through clean code and innovative
          solutions. Always eager to learn, grow, and collaborate on exciting
          projects.
        </p>
        <p data-aos="zoom-in">
          Outside of the tech bubble, life takes on a different rhythm. I love
          soaking up family time, finding peace in the mosque, getting lost in
          the world of poetry, and, of course, unwinding with a good dose of
          online content.
        </p>
      </div>
    </div>
  );
};

export default Home;
