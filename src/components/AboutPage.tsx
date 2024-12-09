import React from 'react';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="hero">
        <h1>About Me</h1>
        <p>
          Hi, I'm <strong>Rekik Mengstu</strong>, a Junior Software Engineer with a strong foundation in 
          mathematics and a passion for problem-solving. I specialize in creating efficient software 
          solutions, and I thrive in collaborative environments.
        </p>
      </section>

      <section className="bio">
        <h2>Biography</h2>
        <p>
          I graduated with a Bachelor of Science in Mathematics from Portland State University and am 
          currently pursuing a Master of Science in Software Development at Boston University. I have 
          professional experience as a Technical Intern at Intel Corporation, where I developed frameworks 
          for anomaly detection and collaborated on hardware design simulations.
        </p>
      </section>

      <section className="aspirations">
        <h2>Career Aspirations</h2>
        <p>
          My goal is to leverage my expertise in software development and problem-solving to contribute 
          to innovative and efficient software solutions. I'm particularly interested in web application 
          development, systems integration, and building scalable cloud-based applications.
        </p>
      </section>

      <section className="quote">
        <blockquote>
          <p>"Passion for innovation, a knack for problem-solving, and a dedication to lifelong learning 
          are at the core of my journey as a software engineer."</p>
        </blockquote>
      </section>
    </div>
  );
};

export default AboutPage;
