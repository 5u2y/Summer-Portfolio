// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your pages and the new Layout component
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import AboutPage from './pages/AboutPage/AboutPage';
import TargetDisciplinePage from './pages/TargetDisciplinePage/TargetDisciplinePage'; // NEW: Import the TargetDisciplinePage

// Corrected import path for ProjectsPage
import ProjectsPage from './pages/projects/ProjectsPage';

// Import the new project pages
import CssPreloaderPage from './pages/projects/CssPreloaderPage/CssPreloaderPage';
import GsapAnimationPage from './pages/projects/GsapAnimationPage/GsapAnimationPage';
import CompanyBrandingPage from './pages/projects/CompanyBrandingPage/CompanyBrandingPage';
import TermProjectPage from './pages/projects/TermProjectPage/TermProjectPage';

import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/target-discipline" element={<TargetDisciplinePage />} /> {/* NEW: Add a route for the new page */}

          {/* Routes for the individual projects */}
          <Route path="/projects/css-preloader" element={<CssPreloaderPage />} />
          <Route path="/projects/gsap-animation" element={<GsapAnimationPage />} />
          <Route path="/projects/company-branding" element={<CompanyBrandingPage />} />
          <Route path="/projects/term-project" element={<TermProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
