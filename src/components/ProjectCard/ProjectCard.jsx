// src/components/ProjectCard/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'; // Import the CSS module for styling

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img src={project.image} alt={project.title} className={styles.projectImage} />

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>

        {/* This is the div containing the map call */}
        <div className={styles.projectTags}>
          {project.tags.map((tag, index) => ( // This line should now be around line 23-24
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <Link to={project.link} className={styles.projectButton}>
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;