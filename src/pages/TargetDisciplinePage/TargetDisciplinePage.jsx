// src/pages/TargetDisciplinePage/TargetDisciplinePage.jsx
import React from 'react';
import styles from './TargetDisciplinePage.module.css';
import resumePdf from '../../assets/images/etc/Qui_Diaz_Resume.PDF'; // CORRECTED: The path has been updated to the 'etc' folder

const TargetDisciplinePage = () => {
  return (
    <div className={styles.targetDisciplinePage}>
      <header>
        <h1 className={styles.pageTitle}>My Target Disciplines</h1>
      </header>
      
      {/* NEW: Introduction section */}
      <section className={styles.introSection}>
        <p className={styles.introText}>
          I’m currently studying New Media Design and Web Development at BCIT, focusing on the areas that speak to me most—branding, graphic design, web design, and content creation. I love crafting visuals and experiences that feel intentional, personal, and well-balanced. This page is a look into the creative paths I’m drawn to—disciplines that let me mix design thinking with emotional connection and thoughtful storytelling.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Design Focus Areas</h2>
        <ul className={styles.focusList}>
          <li>Brand & Graphic Design</li>
          <li>Web Design</li>
          <li>Content Design</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Relevant BCIT Courses</h2>

        {/* Role: Web & Graphic Designer */}
        <div className={styles.roleSection}>
          <h3 className={styles.roleTitle}>Role: Web & Graphic Designer</h3>
          <ul className={styles.courseList}>
            <li>MDIA 1905 - Graphic Design for New Media</li>
            <li>MDIA 2166 - Illustration for New Media</li>
            <li>MDIA 3305 - Digital Layouts and Interactive Media</li>
          </ul>
        </div>

        {/* Role: Web Designer */}
        <div className={styles.roleSection}>
          <h3 className={styles.roleTitle}>Role: Web Designer</h3>
          <ul className={styles.courseList}>
            <li>MDIA 1472 - Mobile Web</li>
            <li>MDIA 1190 - Web Technologies</li>
            <li>MDIA 3292 - Web Design & Interaction</li>
          </ul>
        </div>

        {/* Role: Content Designer */}
        <div className={styles.roleSection}>
          <h3 className={styles.roleTitle}>Role: Content Designer</h3>
          <ul className={styles.courseList}>
            <li>MDIA 3292 - Web Design and Interaction</li>
            <li>MDIA 1190 - Web Technologies</li>
          </ul>
        </div>
      </section>
      
      {/* NEW: Button to view resume */}
      <div className={styles.resumeButtonContainer}>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default TargetDisciplinePage;
