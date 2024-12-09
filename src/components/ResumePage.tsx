import React from 'react';
import '../styles/ResumePage.css';

// Define the functional component as a React.FC (Functional Component)
const ResumePage: React.FC = () => {
  return (
    <div className="resume-page">
      <h1>Rekik Mengstu</h1>
      <p className="contact-info">
        310 Falcons Way, Wylie, TX 75098 | (971)-336-8956 | mengstu.rekik@gmail.com | 
        <a href="https://www.linkedin.com/in/rekik-mengstu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      
      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Motivated and detail-oriented junior software engineer with a strong foundation in mathematics and a passion 
          for problem-solving and logical reasoning. Hands-on experience in programming, systems integration, and web 
          application development. Known for quickly mastering new technologies and collaborating effectively in 
          cross-functional teams.
        </p>
      </section>

      <section className="resume-section">
        <h2>Core Competencies</h2>
        <ul>
          <li>Java Programming</li>
          <li>Web Application Development</li>
          <li>Requirements Gathering & Analysis</li>
          <li>Systems Integration</li>
          <li>Database Design</li>
          <li>Testing and Debugging</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Java, Python, JavaScript, SQL</li>
          <li><strong>Web Technologies:</strong> HTML5, CSS3, JSON, AJAX, jQuery, JavaScript</li>
          <li><strong>Databases:</strong> Postgres, MySQL</li>
          <li><strong>SDLC:</strong> Agile-Scrum, Waterfall</li>
          <li><strong>Tools:</strong> Maven, Git, JIRA, Kibana, Visual Studio Code, IntelliJ</li>
          <li><strong>Cloud Technologies:</strong> Cloud Computing Services</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p>
          <strong>Master of Science in Software Development</strong> (In Progress)<br />
          Boston University, Boston, MA
        </p>
        <p>
          <strong>Bachelor of Science in Mathematics</strong> (2023)<br />
          Portland State University, Portland, OR
        </p>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        <div>
          <p><strong>Technical Intern</strong> | Intel Corporation, Hillsboro, OR | June 2022 - September 2022</p>
          <ul>
            <li>Developed a framework to detect and visualize hardware anomalies using Python, YAML, and Kibana dashboards.</li>
            <li>Executed simulations to validate layout designs and troubleshoot/debug code with the development team.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
