import React from 'react';
import '../styles/ProjectsPage.css';
import projectsData from '../data/projects.json';

const ProjectsPage = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projectsData.map((project) => (
        <div className="project" key={project.name}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
