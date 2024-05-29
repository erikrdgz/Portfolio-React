import React, { useState } from "react";
import logo from './assets/images/logo.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Components/Pages/Projects.js';
import Portal from './Components/Pages/Portal.js';
import Chatbot from './Components/Pages/Chatbot.js';
import Agent from './Components/Pages/Agent.js';


import NSLS from './Components/Pages/CaseStudy/NSLSCaseStudy.js';
import IFCC from './Components/Pages/IFCC';
import Dialpad from './Components/Pages/CaseStudy/DialpadCaseStudy.js';
import Koopid from './Components/Pages/CaseStudy/KoopidCaseStudy.js';
import Misty from './Components/Pages/Misty';
import Techtonic from './Components/Pages/Techtonic';

import CaseStudy from './Components/Subcomponents/CaseStudy';




import UIDesigns from './Components/Pages/UIDesigns.js';
import Contact from './Components/Pages/Contact.js';
import ThankYou from './Components/Pages/ThankYou.js';
import Footer from './Components/Footer.js';
import About from './Components/Pages/About.js';
import ScrollToTop from './Components/Subcomponents/ScrollToTop.js';
import './App.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { animated, useSpring } from 'react-spring';


import Sidebar from "./Components/Subcomponents/Sidebar.js";


function App() {

  const [isActive, setActive] = useState("false");

  const [expanded, setExpanded] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const NavLinkOpen = () => {
    setExpanded(!expanded);
    setActive(!isActive);
  }

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const handleDesignsClick = (event) => {
    event.preventDefault(); // Prevent default navigation behavior
    toggleMenu(); // Toggle the side menu
  };

  // Define spring animation for the Designs link
  const designsLinkAnimation = useSpring({
    opacity: isSideMenuOpen ? 1 : 0,
    transform: isSideMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });

  // Define spring animation for each hidden link with staggered delays
  const nslsLinkAnimation = useSpring({
    opacity: isSideMenuOpen ? 1 : 0,
    transform: isSideMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 500, friction: 30 }, // Adjust spring config for faster animation
    delay: isSideMenuOpen ? 0 : 200 // Apply delay only when menu opens
  });

  const dialpadLinkAnimation = useSpring({
    opacity: isSideMenuOpen ? 1 : 0,
    transform: isSideMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 500, friction: 30 }, // Adjust spring config for faster animation
    delay: isSideMenuOpen ? 100 : 300 // Apply delay only when menu opens
  });

  const koopidLinkAnimation = useSpring({
    opacity: isSideMenuOpen ? 1 : 0,
    transform: isSideMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: { tension: 500, friction: 30 }, // Adjust spring config for faster animation
    delay: isSideMenuOpen ? 200 : 400 // Apply delay only when menu opens
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="App container-fluid px-0">

        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-main py-lg-5  mt-md-0 shadow-menu">

          <div className="icons d-md-none mb-3">
            <a href="https://github.com/erikrdgz" target="_blank" className="mx-1 text-white ">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/erikrdgz" target="_blank" className="mx-1 text-white ">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <Link to="/" href="#"><p className="logo-font text-white ">ERIK RODRIGUEZ</p></Link>

          <button onClick={handleToggle} className={`navbar-toggler hamburger hamburger--emphatic ${isActive ? null : "is-active"}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? null : "hide"} `} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

                <Link to="/" className="item nav-link" onClick={NavLinkOpen}>Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/case-study/nsls" className="item nav-link" onClick={NavLinkOpen}>NSLS</Link>
              </li>

              <li className="nav-item">
                <Link to="/case-study/dialpad" className="item nav-link" onClick={NavLinkOpen}>Dialpad</Link>
              </li>


              <li className="nav-item">
                <Link to="/designs" className="item nav-link" onClick={NavLinkOpen}>Designs</Link>
              </li>

              <li className="nav-item">

                <Link to="/contact" className="item nav-link mr-lg-5" onClick={NavLinkOpen}>Contact</Link>
              </li>

              <li className="nav-item d-none d-md-block">

                <a href="https://www.linkedin.com/in/erikrdgz" target="_blank" className="item nav-link">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

              </li>

              <li className="nav-item d-none d-md-block">

                <a href="https://github.com/erikrdgz" target="_blank" className="item nav-link">
                  <FontAwesomeIcon icon={faGithub} />
                </a>

              </li>



            </ul>

          </div>
        </nav> */}

<nav className="navbar navbar-expand-lg navbar-dark bg-main mt-md-0 shadow-menu sticky-top">
      <div className="icons d-md-none mb-3">
        <a href="https://github.com/erikrdgz" target="_blank" className="mx-1 text-white ">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/erikrdgz" target="_blank" className="mx-1 text-white ">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <Link to="/" href="#"><p className="logo-font text-white">ERIK RODRIGUEZ</p></Link>

      <button onClick={toggleDropdown} className="navbar-toggler hamburger hamburger--emphatic" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={`hamburger-box ${isDropdownOpen ? 'is-active' : ''}`}>
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Case Studies
            </a>
            <div className="dropdown-menu bg-main" aria-labelledby="navbarDropdown">
              <Link to="/case-study/nsls" className="dropdown-item" onClick={handleNavLinkClick}>NSLS</Link>
              <Link to="/case-study/dialpad" className="dropdown-item" onClick={handleNavLinkClick}>Dialpad</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/designs" className="nav-link" onClick={handleNavLinkClick}>Designs</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link mr-lg-5" onClick={handleNavLinkClick}>Contact</Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="https://www.linkedin.com/in/erikrdgz" target="_blank" className="nav-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="https://github.com/erikrdgz" target="_blank" className="nav-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </nav>

        



        <ScrollToTop />
        <Route exact path="/" component={Projects} />
        {/* <Route exact path="/case-study/portal" component={Portal} /> */}

        <Route exact path="/case-study/nsls" component={NSLS} />
    
        <Route exact path="/case-study/dialpad" component={Dialpad} />
    
        <Route exact path="/case-study" component={CaseStudy} />


        {/* <Route exact path="/case-study/chatbot" component={Chatbot} />
        <Route exact path="/case-study/agent" component={Agent} /> */}
        <Route path="/designs" component={UIDesigns} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/thank-you" component={ThankYou} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;