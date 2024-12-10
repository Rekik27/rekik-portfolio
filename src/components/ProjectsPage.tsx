import React from 'react';
import '../styles/ProjectsPage.css';
import projectsData from '../data/projects.json';

// Defined types for the project structure
interface Project {
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projectsData.map((project: Project) => (
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
