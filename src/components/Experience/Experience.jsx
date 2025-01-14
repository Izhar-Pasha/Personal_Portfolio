// import React from 'react'
import "./Experience.scss";

const Experience = () => {
  return (
    <div id="Experience">
      <div id="header">
        <h1>Experience</h1>
        <p>
          Leveraging hands-on experience in dynamic environments to drive
          success and add value. I thrive on collaborating, learning, and
          achieving excellence in every project I undertake.
        </p>
      </div>
      <div className="content">
        <div className="history">
          <div className="company">
            <h1>Novum Global Consultancy</h1>
            <span>Full Stack Developer</span>
          </div>
          <div className="duration">
            <i>Jul 2024</i>
            <p></p>
            <i>Dec 2024</i>
          </div>
          <div className="role">
            <ul>
              <li>
                Designed and developed a real-time logging system leveraging
                Microservices Architecture, actively monitoring and tracking
                client tasks to enhance transparency and operational efficiency
              </li>
              <li>
                {" "}
                Utilized RabbitMQ for message queuing to seamlessly transfer
                logs from the backend to the frontend, storing them in local
                storage for easy retrieval.
              </li>
              <li>
                Enhanced functionality for crypto exchanges, integrating APIs,
                trading features, and implementing robust security protocols,
                leading to an improved user experience.
              </li>
              <li>
                Optimized backend performance using Node.js and Express.js,
                ensuring scalability and reliability for high-traffic financial
                platforms.
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                responsive, user-friendly interfaces using React.js, adhering to
                best practices in UI/UX design.
              </li>
              <li>
                Conducted comprehensive testing and debugging, reducing system
                errors by 20% and improving overall platform stability.
              </li>
            </ul>
          </div>
        </div>

        <div className="history">
          <div className="company">
            <h1>Pierian Services Pvt Ltd</h1>
            <span>Technical Associate</span>
          </div>
          <div className="duration">
            <i>Mar 2022</i>
            <p></p>
            <i>Jul 2024</i>
          </div>
          <div className="role">
            <ul>
              <li>
                Built and maintained scalable servers for web applications using
                Node.js and Express.js, ensuring high performance and
                reliability.
              </li>
              <li>
                Designed and developed static and dynamic websites, tailored to
                meet diverse client needs and business objectives.
              </li>
              <li>
                Created small-scale, feature-rich web applications, focusing on
                user experience, performance, and scalability.
              </li>
              <li>
                Provided end-to-end technical support, troubleshooting complex
                software issues and managing seamless backend service
                installations to minimize downtime and improve client
                satisfaction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
