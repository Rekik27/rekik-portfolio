import React from 'react';
import skills from '../data/skills.json';
import '../styles/SkillsPage.css';

// Defined a type for the skill data structure
interface Skill {
  name: string;
  level: string;
}

const SkillsPage: React.FC = () => {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill: Skill, index: number) => (
          <div className="skill-card" key={index}>
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
