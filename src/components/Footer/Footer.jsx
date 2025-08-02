// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Qui Diaz. All rights reserved.</p>
      <span>|</span>
      <p>Email: quidiaz0417@gmail.com</p>
      <span>|</span>
      <a href="https://www.linkedin.com/in/qui-diaz-4412b1346/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
};

export default Footer;