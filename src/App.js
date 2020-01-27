import React from 'react';
import logo from './assets/images/logo.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import LeelaProject from './LeelaProject.js';
import ADMProject from './ADMProject.js';
import AgroyaProject from './AgroyaProject.js';
import UIDesigns from './UIDesigns.js';
import Contact from './Contact.js';
import ThankYou from './ThankYou.js';
import About from './About.js';
import ScrollToTop from './ScrollToTop.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">

          <Link to="/" className="branding">
            <img src={logo} className="logo-image" alt="Logo Image" />
          </Link>
          <div className="menu-items">
          <Link to="/" className="item">Projects</Link>
          <Link to="/designs" className="item">Designs</Link>
          <Link to="/about" className="item ">About</Link>
          <Link to="/contact" className="item ">Contact</Link>
          </div>
          

        </div>
        <ScrollToTop/>
        <Route exact path="/" component={Projects} />
        <Route exact path="/projects/leela-body-care" component={LeelaProject} />
        <Route exact path="/projects/adm-labs" component={ADMProject} />
        <Route exact path="/projects/agroya" component={AgroyaProject} />
        <Route path="/designs" component={UIDesigns} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/thank-you" component={ThankYou} />

      </div>
    </BrowserRouter>
  );
}

export default App;