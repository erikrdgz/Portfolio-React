import React from "react";
import {Link} from 'react-router-dom';

import Thumbnail from '../Subcomponents/Thumbnail.js';
import Button from "../Subcomponents/Button.js";

import Leela from "../../assets/images/Projects/leela-ui.jpg";
import ADM from "../../assets/images/Projects/adm-ui.jpg";
import Agroya from "../../assets/images/Projects/agroya-ui.jpg";

function Projects(props) {

  return (
    <div className="grid-container">
      <div className="header rounded">
        <div>
          <h1 className="lead-text">UI Designer &amp; Developer</h1>
          <h2>Hey I'm Erik,</h2>
          <p> 
            I am a designer and developer living in Denver, Colorado.
            <br></br> 
            I design and develop websites and software that makes people’s lives simple.
            
          </p>
          <Button
            link="/contact"
            cta={"Message Me"}
            class="mt-5"
          />
        </div>
      </div>
      <Link to="/designs" className="designs rounded">
        <div className="design-items">
          <h2>User Interface Designs</h2>
          <p>View My Latest UI Work</p>
        </div>
      </Link>
      <h3 className="latest-work">Latest Work</h3>
      <Thumbnail
        class="project-1"
        link="/projects/leela-body-care"
        image={Leela}
        title="L'eela Body Care"
        category="Freelance Client: Web Designer &amp; Developer"
      />
      <Thumbnail
        class="project-2"
        link="/projects/adm-labs"
        image={ADM}
        title="ADM Labs"
        category="Front End Developer &amp; UX Designer"
      />
      <Thumbnail
        class="project-3"
        link="/projects/agroya"
        image={Agroya}
        title="Agroya"
        category="Freelance Client: Web Designer &amp; Developer"
      />

    </div>
  )
}

export default Projects;