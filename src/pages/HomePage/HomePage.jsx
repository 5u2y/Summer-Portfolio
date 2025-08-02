// src/pages/HomePage/HomePage.jsx
import React from 'react';
import styles from './HomePage.module.css';

// Placeholder imports for your icons. Replace with your actual image file names.
import icon1 from '../../assets/icons/Photography.png'; // CORRECTED path to icons folder
import icon2 from '../../assets/icons/Wild_Rift_logo.png'; // CORRECTED path to icons folder
import icon3 from '../../assets/icons/Writing.png'; // CORRECTED path to icons folder
import icon4 from '../../assets/icons/Book.png'; // CORRECTED path to icons folder

// Placeholder imports for the two new images. Replace with your actual file names.
import image1 from '../../assets/images/etc/IMG1.jpg';
import image2 from '../../assets/images/etc/IMG2.jpg';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Hi, I'm Qui Diaz
          </h1>
          <p className={styles.heroSubtitle}>
            Designing with empathy, creativity, and purpose
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>
            Quiet creativity. Deep Connection
          </h2>
          <p className={styles.introText}>
            I design with empathy and quiet intention, creating emotional, human-centred experiences
          </p>
        </div>
      </section>

      {/* Two Images Section */}
      <section className={styles.imagesSection}>
        <div className={styles.imagesContainer}>
          <img src={image1} alt="Image 1" className={styles.contentImage} />
          <img src={image2} alt="Image 2" className={styles.contentImage} />
        </div>
      </section>

      {/* Icons Section */}
      <section className={styles.iconsSection}>
        <h2 className={styles.iconsHeading}>Hobbies</h2>
        <div className={styles.iconsContainer}>
          <div className={styles.iconWrapper}>
            <img src={icon1} alt="Photography Icon" className={styles.icon} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={icon2} alt="Wild Rift Icon" className={styles.icon} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={icon3} alt="Writing Icon" className={styles.icon} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={icon4} alt="Book Icon" className={styles.icon} />
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className={styles.featuredWorkSection}>
        <h2 className={styles.sectionHeading}>Featured Work</h2>
        <div className={styles.workGrid}>
          {/* Project Card 1 */}
          <div className={styles.workCard}>
            <p className={styles.workTitle}>Project Title 1</p>
            <p className={styles.workDescription}>Description</p>
            <button className={styles.workButton}>View Project</button>
          </div>
          {/* Project Card 2 */}
          <div className={styles.workCard}>
            <p className={styles.workTitle}>Project Title 2</p>
            <p className={styles.workDescription}>Description</p>
            <button className={styles.workButton}>View Project</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
