import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GsapAnimationPage.module.css';
import { gsap } from 'gsap';

const GSAPProjectPage = () => {
    const navigate = useNavigate();

    // The back button now navigates to the Projects page
    const handleBackClick = () => {
        navigate('/projects');
    };

    // Refs to directly target the elements for GSAP animation
    const switchRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const toggleRef = useRef(null);
    const textRef = useRef(null);
    const moonMaskRef = useRef(null);

    // The provided HTML and CSS code as strings for the "Source Code" section
    const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playful Toggle Switch</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="switch">
            <div class="toggle-button">
                <div class="toggle"></div>
                <div class="moon-mask"></div>
                <div class="circles-wrapper">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <div class="text">
            <p>On</p>
            <p>Off</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>`;

    const cssCode = `/* ***** Colors - Start ***** */
:root {
    --black: #111;
    --yellow: #fdb813;
    --grey: #514e4b;
    --white: #fff;
}
/* ***** Colors - End ***** */
  
/* ***** Global Styles - Start ***** */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body {
    background-color: var(--black);
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
/* ***** Global Styles - End ***** */
  
/* ***** Specific Styles - Start ***** */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.switch {
    width: 60px;
    height: 110px;
    padding-top: 2px;
    background-color: var(--grey);
    border-radius: 40px;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.toggle-button {
    transform: scale(0.8);
    transform-origin: center center;
}
.toggle {
    position: relative;
    width: 35px;
    height: 35px;
    margin: 12px;
    margin-top: 12px;
    background-color: var(--white);
    border-radius: 50%;
}
.moon-mask {
    position: absolute;
    width: 35px;
    height: 35px;
    margin: -74px 0 0 34px;
    background-color: var(--grey);
    border-radius: 50%;
}
.circles-wrapper {
    .circle {
      position: absolute;
      width: 4px;
      height: 8px;
      background-color: var(--white);
      border-radius: 10px;
    }
}
.circles-wrapper .circle:nth-child(1) { margin: -57px 0 0 27px; }
.circles-wrapper .circle:nth-child(2) { margin: -9px 0 0 28px; }
.circles-wrapper .circle:nth-child(3) { margin: -32px 0 0 51px; transform: rotate(90deg); }
.circles-wrapper .circle:nth-child(4) { margin: -33px 0 0 4px; transform: rotate(90deg); }
.circles-wrapper .circle:nth-child(5) { margin: -14px 0 0 10px; transform: rotate(45deg); }
.circles-wrapper .circle:nth-child(6) { margin: -14px 0 0 45px; transform: rotate(320deg); }
.circles-wrapper .circle:nth-child(7) { margin: -50px 0 0 10px; transform: rotate(135deg); }
.circles-wrapper .circle:nth-child(8) { margin: -50px 0 0 45px; transform: rotate(235deg); }
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}
.text p {
    font-size: 55px;
    line-height: 1.1;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
}
.social-icons {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 70px;
}
/* ***** Specific Styles - End ***** */`;

    useEffect(() => {
        // Only run this effect if GSAP is available and the switch element is in the DOM
        if (gsap && switchRef.current) {
            let isToggled = false;

            // Use GSAP timeline to manage the animation sequence
            const toggleTimeline = gsap.timeline({ paused: true });

            toggleTimeline
                .to(toggleButtonRef.current, { duration: 0.5, y: 49, ease: "power3.out" }, 0)
                .to(toggleRef.current, { duration: 0.4, x: 25, ease: "elastic.out(1, 0.5)" }, 0)
                .to(toggleRef.current, { duration: 0.3, rotation: 360, transformOrigin: "center", ease: "power3.inOut" }, 0.1)
                .to(toggleRef.current, { duration: 0.4, y: -15, repeat: 1, yoyo: true, ease: "sine.inOut" }, 0.3)
                .to(toggleRef.current, { duration: 0.4, x: 0, rotation: 0, ease: "power3.inOut" }, 0.7)
                .to(document.body, { duration: 0.7, backgroundColor: "var(--yellow)", ease: "sine.inOut" }, 0)
                .to(toggleRef.current, { duration: 0.7, backgroundColor: "var(--yellow)", ease: "sine.inOut" }, 0)
                .to(textRef.current.querySelectorAll("p"), { duration: 0.7, color: "var(--black)", ease: "sine.inOut" }, 0)
                .to(document.body, { duration: 0.7, backgroundColor: "var(--black)", ease: "sine.inOut" }, ">")
                .to(toggleRef.current, { duration: 0.7, backgroundColor: "var(--white)", ease: "sine.inOut" }, "<")
                .to(textRef.current.querySelectorAll("p"), { duration: 0.7, color: "var(--white)", ease: "sine.inOut" }, "<");


            // Add the event listener to the switch button
            const clickHandler = () => {
                if (!isToggled) {
                    toggleTimeline.play();
                } else {
                    toggleTimeline.reverse();
                }
                isToggled = !isToggled;
            };

            switchRef.current.addEventListener("click", clickHandler);

            // Clean up function to remove the event listener when the component unmounts
            return () => {
                if (switchRef.current) {
                    switchRef.current.removeEventListener("click", clickHandler);
                }
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className={styles.projectPage}>
            <button onClick={handleBackClick} className={styles.backButton}>
                Back
            </button>
            <h1 className={styles.projectTitle}>GSAP Timeline Animation</h1>

            <div className={styles.projectHeader}>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Project Number:</p>
                    <p className={styles.headerValue}>4</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Start Date:</p>
                    <p className={styles.headerValue}>March 27, 2025</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>End Date:</p>
                    <p className={styles.headerValue}>March 29, 2025</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Total Hours:</p>
                    <p className={styles.headerValue}>2.5 hours</p>
                </div>
                <div className={styles.headerItem}>
                    <p className={styles.headerLabel}>Designer:</p>
                    <p className={styles.headerValue}>Qui Diaz</p>
                </div>
            </div>

            <section className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Project Goal</h2>
                <p className={styles.sectionText}>
                    The main goal of this assignment was to create a sequence of timeline animations using GSAP's timeline method. The project required creating an animation that demonstrated a creative use of the GSAP library.
                </p>
            </section>

            <section className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Narrative</h2>
                <p className={styles.sectionText}>
                    Initially, I was struggling with ideas for the animation, so I turned to CodePen for inspiration, which was a resource recommended by the instructor. I was able to find a design that helped me start my own work. While building the animation, I encountered some challenges with the code not working correctly and had to do a lot of troubleshooting. I was ultimately happy with the final outcome of the design.
                </p>
            </section>

            <section className={styles.demoSection}>
                <h2 className={styles.demoTitle}>Live Demo</h2>
                <div className={styles.liveContainer}>
                    {/* The animation elements with ref attributes for GSAP */}
                    <div ref={switchRef} className={styles.switch}>
                        <div ref={toggleButtonRef} className={styles.toggleButton}>
                            <div ref={toggleRef} className={styles.toggle}></div>
                            <div ref={moonMaskRef} className={styles.moonMask}></div>
                            <div className={styles.circlesWrapper}>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                                <div className={styles.circle}></div>
                            </div>
                        </div>
                    </div>
                    <div ref={textRef} className={styles.text}>
                        <p>On</p>
                        <p>Off</p>
                    </div>
                </div>
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
                <h2 className={styles.sectionTitle}>Final Product</h2>
                <div className={styles.finalProductContainer}>
                    <a href="https://codepen.io/visnuravichandran/pen/GRZQVdP" target="_blank" rel="noopener noreferrer" className={styles.finalProductLink}>
                        View GSAP Animation on CodePen
                    </a>
                </div>
            </section>

            <section className={styles.projectSection}>
                <h2 className={styles.sectionTitle}>Technical Info</h2>
                <p className={styles.sectionText}>
                    The following applications and software were used for this project:
                </p>
                <ul className={styles.techList}>
                    <li>Visual Studio Code</li>
                    <li>GSAP (Greensock Animation Platform)</li>
                </ul>
            </section>
        </div>
    );
};

export default GSAPProjectPage;