// src/pages/AboutPage/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';
import headshotImage from '../../assets/images/about/Qui_Diaz_Headshot.jpg';

// UPDATED: All visual work images have been moved to the icons folder
import afterEffectsImage from '../../assets/icons/Adobe_After_Effects.png';
import illustratorImage from '../../assets/icons/Adobe_Illustrator.png';
import inDesignImage from '../../assets/icons/Adobe_InDesign.png';
import photoshopImage from '../../assets/icons/Adobe_Photoshop.png';
import premiereProImage from '../../assets/icons/Adobe_Premiere_Pro.png';
import figmaImage from '../../assets/icons/Figma.png';
import htmlImage from '../../assets/icons/HTML.png';
import cssImage from '../../assets/icons/CSS.png';
import jsImage from '../../assets/icons/JS.png';

const AboutPage = () => {
  const designPrinciples = [
    {
      id: 1,
      title: 'Empathy',
      description: 'Understanding and designing for real people and their experiences. Central to user centred design, I craft thoughtful, accessible solutions that connect emotionally and functionally'
    },
    {
      id: 2,
      title: 'Creativity',
      description: 'Pushing visual boundaries through exploration and expression. Whether crafting a brand, a website, or a content piece, my designs are imaginative and impactful'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Partnering across disciplines to bring ideas to life. I thrive with other creatives and clients to create cohesive, innovative solutions'
    },
  ];

  return (
    <div className={styles.aboutPage}>
      <header className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <div className={styles.profilePicContainer}>
             <img src={headshotImage} alt="Qui Diaz Headshot" className={styles.profilePic} />
          </div>
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>About Qui</h1>
            <p className={styles.heroSubtitle}>The Quiet Adventurer</p>
          </div>
        </div>
      </header>

      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p className={styles.introText}>
            Empathetic, introspective, and visually attuned, I create meaningful, emotional, and human-centered experiences. My design philosophy is rooted in understanding how technology and aesthetics can intuitively connect to people and environments, informing every choice. Translating into designs that genuinely resonate with users, I am passionate about blending authenticity and emotional depth. My work is driven by purpose and a refined aesthetic touch.
          </p>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <h2 className={styles.sectionHeading}>What Guides My Design</h2>
        <div className={styles.principlesGrid}>
          {designPrinciples.map((principle) => (
            <div key={principle.id} className={styles.principleCard}>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleDescription}>{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.educationSection}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <h3 className={styles.educationInstitute}>British Columbia Institute of Technology (BCIT)</h3>
        <div className={styles.educationCourses}>
          <p className={styles.educationProgram}>Digital Design and Development Program</p>
          <Link to="/target-discipline" className={styles.educationButton}>Learn about my Target Disciplines</Link>
        </div>
      </section>

      <section className={styles.imageSection}>
        <h2 className={styles.sectionHeading}>My Skills Set</h2>
        <div className={styles.imageGrid}>
          <div className={styles.imageFrame}>
            <img 
              src={afterEffectsImage} 
              alt="Adobe After Effects logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={illustratorImage} 
              alt="Adobe Illustrator logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={inDesignImage} 
              alt="Adobe InDesign logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={photoshopImage} 
              alt="Adobe Photoshop logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={premiereProImage} 
              alt="Adobe Premiere Pro logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={figmaImage} 
              alt="Figma logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={htmlImage} 
              alt="HTML logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={cssImage} 
              alt="CSS logo" 
              className={styles.image} 
            />
          </div>
          <div className={styles.imageFrame}>
            <img 
              src={jsImage} 
              alt="JavaScript logo" 
              className={styles.image} 
            />
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.sectionHeading}>Skills</h2>
        <div className={styles.skillsContent}>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Creative Skills</h3>
            <ul>
              <li>Visual Identity and Branding</li>
              <li>Layout & Address Design</li>
              <li>Typography Systems</li>
              <li>Wireframes & Prototypes</li>
              <li>Web Interface</li>
              <li>Content Writing & Copywriting</li>
              <li>Motion Graphics & Visual Storytelling</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.skillCategoryTitle}>Soft Skills</h3>
            <ul>
              <li>Deep Empathy & Active Listening</li>
              <li>Adaptability & Flexibility</li>
              <li>Self-Motivation & Independence</li>
              <li>Problem-Solving</li>
              <li>Strong Visual Attention to Detail</li>
              <li>Emotionally-Aware Collaboration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
