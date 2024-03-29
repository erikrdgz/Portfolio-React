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



import UIDesigns from './Components/Pages/UIDesigns.js';
import Contact from './Components/Pages/Contact.js';
import ThankYou from './Components/Pages/ThankYou.js';
import Footer from './Components/Footer.js';
import About from './Components/Pages/About.js';
import ScrollToTop from './Components/Subcomponents/ScrollToTop.js';
import './App.css';




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
      <div className="App container">

        <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-5 mt-4 mt-md-0 shadow-menu">
          <Link to="/" href="#"><p className="logo-font mb-0">ERIK RODRIGUEZ</p></Link>

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
              {/* <li className="nav-item dropdown item bg-dark-color">
                <a className="nav-link dropdown-toggle bg-dark-color" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  Case Studies
                </a>
                <div className="dropdown-menu bg-dark-color" aria-labelledby="navbarDropdown">

                  <Link to="/projects/portal" className=" dropdown-item" onClick={NavLinkOpen}>Admin Portal</Link>
                  <Link to="/projects/chatbot" className=" dropdown-item" onClick={NavLinkOpen}>Chat Bot</Link>
                  <Link to="/projects/agent" className=" dropdown-item" onClick={NavLinkOpen}>Agent Desktop</Link>

                </div>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/about" className="item nav-link" onClick={NavLinkOpen}>About</Link>

              </li> */}
              <li className="nav-item">

                <Link to="/contact" className="item nav-link" onClick={NavLinkOpen}>Contact</Link>
              </li>
            </ul>

          </div>
        </nav>
        <ScrollToTop />
        <Route exact path="/" component={Projects} />
        {/* <Route exact path="/projects/portal" component={Portal} /> */}

        <Route exact path="/projects/nsls" component={NSLS} />
        <Route exact path="/projects/ifcc" component={IFCC} />
        <Route exact path="/projects/dialpad" component={Dialpad} />
        <Route exact path="/projects/koopid" component={Koopid} />
        <Route exact path="/projects/misty" component={Misty} />
        <Route exact path="/projects/techtonic" component={Techtonic} />

        {/* <Route exact path="/projects/chatbot" component={Chatbot} />
        <Route exact path="/projects/agent" component={Agent} /> */}
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