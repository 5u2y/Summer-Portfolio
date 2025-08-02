// src/pages/ContactPage/ContactPage.jsx
import React from 'react';
import styles from './ContactPage.module.css'; // Import the CSS module

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <header className={styles.contactHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>I'd love to hear from you!</p>
        </div>
      </header>

      <section className={styles.contactContent}>
        <p>
          Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
          You can contact me via:
        </p>

        <div className={styles.contactMethods}>
          <div className={styles.methodItem}>
            <h3>Email</h3>
            <p><a href="mailto:your.email@example.com">quidiaz0417@gmail.com</a></p>
          </div>
          <div className={styles.methodItem}>
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/qui-diaz-4412b1346/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>

        
        <h2 className={styles.formHeading}>Send me a message</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        
      </section>
    </div>
  );
};

export default ContactPage;