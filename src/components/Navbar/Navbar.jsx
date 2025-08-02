// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* NavLink for "Home" is now on the left, separate from the others */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
          onClick={toggleMenu}
        >
          Home
        </NavLink>

        {/* Hamburger menu for mobile - KEEP THIS FOR MOBILE RESPONSIVENESS IF YOUR PREFERRED CSS SUPPORTS IT */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle navigation menu">
          &#9776; {/* Unicode for hamburger icon */}
        </button>

        {/* Navigation links - conditional class for mobile menu */}
        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
