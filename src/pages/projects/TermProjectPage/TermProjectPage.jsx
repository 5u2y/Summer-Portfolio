import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./TermProjectPage.module.css";
// Corrected the import paths to include the "assets" folder, as seen in your screenshot.
import LogoImage from "../../../assets/images/projects/term-project/Logo2.png";
import ColorPaletteImage from "../../../assets/images/projects/term-project/ColourPalette2.png";

const TermProjectPage = () => {
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
      <h1 className={styles.projectTitle}>Product Design - Term Project</h1>
      <div className={styles.projectHeader}>
        <div className={styles.headerItem}>
          <div className={styles.headerLabel}>Project Number</div>
          <div className={styles.headerValue}>1</div>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerLabel}>Designer/Artist Name</div>
          <div className={styles.headerValue}>Qui Diaz</div>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerLabel}>Project Title</div>
          <div className={styles.headerValue}>Product Design (Term Project)</div>
        </div>
        <div className={styles.headerItem}>
          <div className={styles.headerLabel}>Total Hours</div>
          <div className={styles.headerValue}>9.5 hrs</div>
        </div>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Goal</h2>
        <p className={styles.sectionText}>
          The goal for this product design term project is to demonstrate my Illustrator skills in
          designing and crafting original elements and establish a brand identity for a physical product.
        </p>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Narrative</h2>
        <p className={styles.sectionText}>
          The product design that I worked on for Adobe Illustrator's term project is a branding board for a
          scented candle line to sell to customers.
        </p>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Overall Inspiration Process</h2>
        <p className={styles.sectionText}>
          The overall inspiration for coming up with a scented candle line came to be through drawing
          inspiration through the work of other creators. I was going for a design that included a clean and
          minimalist look with modern typography and a simple logo. I was also inspired by other branded
          candle lines to see their packaging and label design to get a better idea of how I would want my
          branding board to look.
        </p>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Branding Guide</h2>
        <p className={styles.sectionText}>
          A key part of the product design was establishing a clean and minimalist brand identity for the scented candle line, "Candles & Hearth." Below are the core brand elements.
        </p>

        <div className={styles.imageContainer}>
          <h3 className={styles.imageTitle}>Brand Logo</h3>
          <img
            src={LogoImage}
            alt="Candles & Hearth Logo"
            className={`${styles.projectImage} ${styles.logoImage}`}
          />
        </div>

        <div className={styles.imageContainer}>
          <h3 className={styles.imageTitle}>Main and Accent Colours</h3>
          <img
            src={ColorPaletteImage}
            alt="Candles & Hearth Color Palette"
            className={`${styles.projectImage} ${styles.colorPaletteImage}`}
          />
        </div>

        <div className={styles.projectSection}>
          <h3 className={styles.sectionTitle}>Typography</h3>
          <p className={styles.sectionText}>The brand utilizes a clean and modern font hierarchy to maintain its minimalist aesthetic.</p>
          <div className={styles.typographySection}>
            <div className={styles.fontItem}>
              <div className={`${styles.fontName} ${styles.fontMerriweather}`}>Merriweather</div>
              <div className={styles.fontUsage}>Headings/Logo</div>
              <div className={`${styles.fontExample} ${styles.fontMerriweather}`}>The quick brown fox jumps over the lazy dog.</div>
            </div>
            <div className={styles.fontItem}>
              <div className={`${styles.fontName} ${styles.fontOpenSans}`}>Open Sans</div>
              <div className={styles.fontUsage}>Body text/paragraphs/captions</div>
              <div className={`${styles.fontExample} ${styles.fontOpenSans}`}>The five boxing wizards jump quickly.</div>
            </div>
            <div className={styles.fontItem}>
              <div className={`${styles.fontName} ${styles.fontQuicksand}`}>Quicksand</div>
              <div className={styles.fontUsage}>Longer text blocks/Captions</div>
              <div className={`${styles.fontExample} ${styles.fontQuicksand}`}>Pack my box with five dozen liquor jugs.</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Product Designing Creation</h2>
        <p className={styles.sectionText}>
          After a long week of gathering inspiration from other creators, I was able to sit down to start creating
          my Adobe Illustrator branding style guide. On Adobe Illustrator, I created and sectioned my artboards
          according to what was previously taught in the class. While the main assets were created on Adobe
          Illustrator, a candle mockup of what the logo would look like was made on Adobe Photoshop and put
          together in the final Adobe Illustrator file.
        </p>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Actions</h2>
        <ul className={styles.techList}>
          <li>Week 1 (March 24 - March 28): Inspiration walk: 1 hour, Adobe Illustrator document set up: 30 minutes</li>
          <li>Week 2 (March 31 - April 4): Primary logo Refinement: 2.5 hours, Secondary Logos: 30 minutes, Colour Palette: 45 minutes, Graphic Elements: 30 minutes</li>
          <li>Week 3 (April 7 - April 11): Typeface: 15 minutes, Mockup (PSD): 1.5 hours, Presentation preparation: 2 hours</li>
          <li>Week 4 (April 14): Presentation</li>
        </ul>
      </div>

      <div className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Technical Info</h2>
        <ul className={styles.techList}>
          <li>Adobe Illustrator</li>
          <li>Adobe Photoshop</li>
        </ul>
      </div>
    </div>
  );
};

export default TermProjectPage;