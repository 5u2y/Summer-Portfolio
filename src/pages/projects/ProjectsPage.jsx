// src/pages/ProjectsPage/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>A collection of my work, showcasing my skills and design process.</p>
      
      <section className={styles.projectsGrid}>
        {/* Project Card 1: CSS Pre-loader */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>CSS Pre-loader</h3>
          <p className={styles.projectDescription}>
          This project involved the creation of an animated CSS pre-loader. The main goal was to practice using the keyframes function to animate a design. My role was to find inspiration, design, and code a pre-loader that was a clean and polished final product. The version in this portfolio is the result of an iterative process where I focused on creating a simple design that I was happy with.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Web Animation</span>
            <span className={styles.tag}>CSS</span>
          </div>
          <Link to="/projects/css-preloader" className={styles.projectButton}>View Project</Link>
        </div>
        
        {/* Project Card 2: GSAP Animation */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>GSAP Animation</h3>
          <p className={styles.projectDescription}>
          This project's goal was to create a sequence of timeline animations using the GreenSock Animation Platform's (GSAP) timeline method. My role involved independently designing and hand-coding a complex animated button, learning from an existing example, and troubleshooting challenges to create a final product that was unique and aligned with my own aesthetic. I focused on building a button with on/off functionality and a corresponding color change that was precisely timed to the animation.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Web Animation</span>
            <span className={styles.tag}>GSAP</span>
            <span className={styles.tag}>JavaScript</span>
          </div>
          <Link to="/projects/gsap-animation" className={styles.projectButton}>View Project</Link>
        </div>

        {/* Project Card 3: Company Branding */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>"Katz Alley" - Company Branding</h3>
          <p className={styles.projectDescription}>
          This project was a branding and logo development assignment for a fictional bowling alley called "Katz Alley." The goal was to practice and demonstrate my skills in Adobe Illustrator by creating a full branding guide. My role included the entire creative process, from developing a retro-inspired visual style to designing the main logo, secondary logos, and a color palette. I was also responsible for the document layout, typography, and graphic elements, which were all compiled into a single-page brand guide.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Branding</span>
            <span className={styles.tag}>Logo Design</span>
            <span className={styles.tag}>Illustrator</span>
          </div>
          <Link to="/projects/company-branding" className={styles.projectButton}>View Project</Link>
        </div>

        {/* Project Card 4: Term Project */}
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Candles & Hearth - Scented Candles Project</h3>
          <p className={styles.projectDescription}>
          This was a term project focused on designing and establishing a brand identity for a physical product: a scented candle line. The project's goal was to demonstrate my proficiency in Adobe Illustrator by designing and crafting original branding elements. My role involved the entire creative process, from an initial inspiration walk to developing a minimalist, pastel-toned style guide. The final deliverables included primary and secondary logos, a color palette, and a candle mockup created in Adobe Photoshop, all compiled into a final branding board.
          </p>
          <div className={styles.projectTags}>
            <span className={styles.tag}>Product Design</span>
            <span className={styles.tag}>Branding</span>
            <span className={styles.tag}>Illustrator</span>
          </div>
          <Link to="/projects/term-project" className={styles.projectButton}>View Project</Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
