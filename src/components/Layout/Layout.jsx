// src/components/Layout/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        {/* NEW: Changed <p> to <span> to align it with the link */}
        <span className={styles.footerText}>© 2024 Qui Diaz.</span>
        {/* NEW: LinkedIn link added to the footer */}
        <a href="https://www.linkedin.com/in/qui-diaz-4412b1346/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
      </footer>
    </div>
  );
};

export default Layout;
