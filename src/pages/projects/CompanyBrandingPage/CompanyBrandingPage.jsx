//CompanyBrandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CompanyBrandingPage.module.css';

// Corrected import path for the final product image
import finalProductImage from '../../../assets/images/projects/company-branding/MDIA_2166_Qui_Diaz_Excerise_5.jpg';

const CompanyBrandingPage = () => {
    const navigate = useNavigate();

    // The back button now navigates to the Projects page
    const handleBackClick = () => {
        navigate('/projects');
    };

    return (
        <div className={styles.projectPage}>
            <button onClick={handleBackClick} className={styles.backButton}>
                Back
            </button>
            <h1 className={styles.projectTitle}>Company Branding Guide</h1>
            
            <div className={styles.projectHeader}>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Project Number:</p>
                    <p className={styles.headerValue}>2</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Start Date:</p>
                    <p className={styles.headerValue}>February 24, 2025</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>End Date:</p>
                    <p className={styles.headerValue}>March 10, 2025</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Total Hours:</p>
                    <p className={styles.headerValue}>5 hours</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Designer:</p>
                    <p className={styles.headerValue}>Qui Diaz</p>
                </div>
            </div>

            <div className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Project Goal</h2>
                <p className={styles.sectionText}>
                    The goal for this branding and logo development assignment is to practice and
                    demonstrate Illustrator skills in branding and logo development with the
                    "customer's" given requirements.
                </p>
            </div>

            <div className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Narrative</h2>
                <p className={styles.sectionText}>
                    The branding and logo development assignment that was given to the cohort by the
                    instructor (Christine) was to create a branding guide for a fictional local
                    bowling alley called "Katz Alley;" the visual styling was up to the designer
                    (myself) to come up with.
                </p>
            </div>

            <div className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Final Product</h2>
                <div className={styles.finalProductImageContainer}>
                    <img
                        src={finalProductImage}
                        alt="Final product of the Katz Alley branding guide"
                        className={styles.finalProductImage}
                    />
                </div>
            </div>

            <div className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Technical Info</h2>
                <p className={styles.sectionText}>
                    The following applications and software were used for this project:
                </p>
                <ul className={styles.techList}>
                    <li>Adobe Illustrator</li>
                    <li>Canva</li>
                </ul>
            </div>
        </div>
    );
};

export default CompanyBrandingPage;