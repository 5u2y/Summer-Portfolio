// src/pages/projects/CssPreloaderPage/CssPreloaderPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CssPreloaderPage.module.css';

const CssPreloaderPage = () => {
    const navigate = useNavigate();

    // The back button now navigates to the Projects page
    const handleBackClick = () => {
        navigate('/projects');
    };
    
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barcode Loading Animation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="barcode">
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
            <div class="barcode-bar"></div>
        </div>
        <div class="loading-text">Loading...</div>
    </div>
</body>
</html>`;

const cssCode = `/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #1a1a1a; /* Dark grey background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}

/* Container for barcode and text */
.container {
    text-align: center;
}

/* Barcode styles */
.barcode {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
}

.barcode-bar {
    width: 6px;
    height: 50px;
    margin: 0 2px;
    background-color: white;
    opacity: 0;
    animation: barcodeAnimation 1.5s forwards infinite;
}

.barcode-bar:nth-child(1) {
    animation-delay: 0s;
}

.barcode-bar:nth-child(2) {
    animation-delay: 0.2s;
}

.barcode-bar:nth-child(3) {
    animation-delay: 0.4s;
}

.barcode-bar:nth-child(4) {
    animation-delay: 0.6s;
}

.barcode-bar:nth-child(5) {
    animation-delay: 0.8s;
}

.barcode-bar:nth-child(6) {
    animation-delay: 1s;
}

.barcode-bar:nth-child(7) {
    animation-delay: 1.2s;
}

/* Keyframe animation for the barcode bars */
@keyframes barcodeAnimation {
    0% {
        opacity: 0;
        transform: scaleY(0);
    }
    50% {
        opacity: 1;
        transform: scaleY(1);
    }
    100% {
        opacity: 0;
        transform: scaleY(0);
    }
}

/* Loading text styles */
.loading-text {
    font-size: 24px;
    font-weight: bold;
}
`;

  return (
    <div className={styles.projectPage}>
      <button onClick={handleBackClick} className={styles.backButton}>
        Back
      </button>
      <h1 className={styles.projectTitle}>CSS Pre-Loader</h1>

      {/* Live Demo Section - Now correctly implementing the barcode animation */}
      <section className={styles.demoSection}>
        <h2 className={styles.demoTitle}>Live Demo</h2>
        <div className={styles.container}>
          <div className={styles.barcode}>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
            <div className={styles.barcodeBar}></div>
          </div>
          <div className={styles.loadingText}>Loading...</div>
        </div>
      </section>

      <div className={styles.projectHeader}>
        <div className={styles.headerItem}>
          <p className={styles.headerLabel}>Project Number:</p>
          <p className={styles.headerValue}>1</p>
        </div>
        <div className={styles.headerItem}>
          <p className={styles.headerLabel}>Start Date:</p>
          <p className={styles.headerValue}>January 23, 2025</p>
        </div>
        <div className={styles.headerItem}>
          <p className={styles.headerLabel}>End Date:</p>
          <p className={styles.headerValue}>January 30, 2025</p>
        </div>
        <div className={styles.headerItem}>
          <p className={styles.headerLabel}>Total Hours:</p>
          <p className={styles.headerValue}>1.50 hrs</p>
        </div>
        <div className={styles.headerItem}>
          <p className={styles.headerLabel}>Designer/Artist:</p>
          <p className={styles.headerValue}>Qui Diaz</p>
        </div>
      </div>

      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Project Goal</h2>
        <p className={styles.sectionText}>
          The main goal of this animation assignment was to practice incorporating the `keyframes` function into the code to have a design animate. The instructor emphasized the importance of finding inspiration, researching, and learning from other creators' work to achieve this.
        </p>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Narrative</h2>
        <p className={styles.sectionText}>
          The primary idea was to create an animation that utilizes a "keyframe" section. This was the second animation I created for this assignment. After completing the first version, which took longer and wasn't entirely to my liking, I decided to create a second pre-loader to further practice the concepts taught by the instructor.
        </p>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Source Code</h2>
        <div className={styles.codeFlexContainer}>
          <div className={styles.codeContainer}>
            <h3 className={styles.codeTitle}>index.html</h3>
            <pre className={styles.codeBlock}>
              <code className={styles.codeText}>{htmlCode}</code>
            </pre>
          </div>
          <div className={styles.codeContainer}>
            <h3 className={styles.codeTitle}>styles.css</h3>
            <pre className={styles.codeBlock}>
              <code className={styles.codeText}>{cssCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Technical Information</h2>
        <div className={styles.technicalInfo}>
          <p><strong>Software Used:</strong> Visual Studio Code</p>
          <p><strong>Source References:</strong></p>
          <ul className={styles.sourceList}>
            <li>
              <a href="https://codepen.io/MD-Sirajul-Islam-the-builder/pen/qEWVxRW" target="_blank" rel="noopener noreferrer">
                First assignment reference
              </a>
            </li>
            <li>
              <a href="https://codepen.io/ahdigital/pen/prXBzN" target="_blank" rel="noopener noreferrer">
                Current portfolio version inspiration
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CssPreloaderPage;