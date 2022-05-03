import React from "react";
import { Link } from 'react-router-dom';

import Thumbnail from '../Subcomponents/Thumbnail.js';
import Button from "../Subcomponents/Button.js";

import Portal from "../../assets/images/Projects/Portal.png";
import Chatbot from "../../assets/images/Projects/Chatbot.png";
import Agent from "../../assets/images/Projects/Agent Desktop.png";

function Projects(props) {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="header rounded col-md-8 d-flex align-items-stretch">
          <div>
            <h1 className="lead-text my-4">UX Designer &amp; Developer</h1>
            <h2>Hey I'm Erik,</h2>
            <p>
              I am a UX designer, &nbsp; Product Designer and Front End Developer living in Denver, Colorado.
              <br></br>
              I design and develop websites and software that makes people’s lives simple.
              <br></br>
              Interested in working together?

            </p>
            <Button
              link="/contact"
              cta={"Message Me"}
              class="mt-5"
            />
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-stretch px-0 px-md-2 my-2 my-md-0">
          <Link to="/designs" className="designs rounded p-3 w-100">
            <div className="design-items">
              <h2>User Interface Designs</h2>
              <p>View My Latest UI Work</p>
            </div>
          </Link>
        </div>

      </div>
      <div className="text-white" id="work">
        <h3 className="latest-work">Case Studies</h3>
        <p>Select a case study to view the full description.</p>
      </div>
      <div className="row">
        <div className="col-lg-4 my-2 my-md-2">
          <Thumbnail
            class="project-1"
            link="/projects/portal"
            image={Portal}
            title="Portal Redesign"
            category="UX Designer and Developer"
          />
        </div>
        <div className="col-lg-4 my-2 my-md-2">
          <Thumbnail
            class="project-2"
            link="/projects/chatbot"
            image={Chatbot}
            title="Chatbot Redesign"
            category="UX Designer and Developer"
          />
        </div>
        <div className="col-lg-4 my-2 my-md-2">
          <Thumbnail
            class="project-3"
            link="/projects/agent"
            image={Agent}
            title="Agent Desktop Redesign"
            category="UX Designer and Developer"
          />
        </div>
      </div>

 





    </div>
  )
}

export default Projects;