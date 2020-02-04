import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer(){
    return(
        <div className="footer">
            <a href="https://github.com/erikrdgz" target="_blank" className="footer-link fa-lg">
            <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/erikrdgz" target="_blank"  className="footer-link fa-lg">
            <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </div>
    )
}

export default Footer;