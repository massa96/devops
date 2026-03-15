import React from 'react';
import { Project } from '../data/projects';

const ProjectHighlight: React.FC<{ projects: Project[] }> = ({ projects }) => {
    return (
        <section className="project-highlight">
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectHighlight;