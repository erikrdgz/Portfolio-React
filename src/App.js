import React, { useState } from "react";
import logo from './assets/images/logo.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Components/Pages/Projects.js';
import Portal from './Components/Pages/Portal.js';
import Chatbot from './Components/Pages/Chatbot.js';
import Agent from './Components/Pages/Agent.js';


import NSLS from './Components/Pages/NSLS';
import IFCC from './Components/Pages/IFCC';
import Dialpad from './Components/Pages/Dialpad';
import Koopid from './Components/Pages/Koopid';
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


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

  return (
    <BrowserRouter>
      <div className="App container-fluid px-0">

        <nav className="navbar navbar-expand-lg navbar-dark bg-main py-lg-5  mt-md-0 shadow-menu">

          <div className="icons d-md-none mb-3">
          <a href="https://github.com/erikrdgz" target="_blank" className="mx-1 text-white ">
            <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/erikrdgz" target="_blank"  className="mx-1 text-white ">
            <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div>
          <Link to="/" href="#"><p className="logo-font text-white ">ERIK RODRIGUEZ</p></Link>

          <button onClick={handleToggle} className={`navbar-toggler hamburger hamburger--emphatic ${isActive ? null : "is-active"}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=" hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
          </button>

          <div className={`collapse navbar-collapse ${expanded ? null : "hide" } ` }id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

                <Link to="/" className="item nav-link" onClick={NavLinkOpen}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/designs" className="item nav-link" onClick={NavLinkOpen}>Designs</Link>
              </li>
              
              <li className="nav-item">

                <Link to="/contact" className="item nav-link mr-lg-5" onClick={NavLinkOpen}>Contact</Link>
              </li>

              <li className="nav-item">

              <a href="https://www.linkedin.com/in/erikrdgz" target="_blank"  className="item nav-link">
            <FontAwesomeIcon icon={faLinkedin}/>
            </a>
                
              </li>

              <li className="nav-item">

              <a href="https://github.com/erikrdgz" target="_blank" className="item nav-link">
            <FontAwesomeIcon icon={faGithub}/>
            </a>
                
              </li>

              
            
            </ul>

          </div>
        </nav>
        <ScrollToTop />
        <Route exact path="/" component={Projects} />
        {/* <Route exact path="/case-study/portal" component={Portal} /> */}

        <Route exact path="/case-study/nsls" component={NSLS} />
        <Route exact path="/case-study/ifcc" component={IFCC} />
        <Route exact path="/case-study/dialpad" component={Dialpad} />
        <Route exact path="/case-study/koopid" component={Koopid} />
        <Route exact path="/case-study/misty" component={Misty} />
        <Route exact path="/case-study/techtonic" component={Techtonic} />
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