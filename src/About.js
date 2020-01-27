import React from 'react';
import './App.css';
import Img from 'react-cool-img';
import UI_Box from "./assets/images/ui-box.jpg";
import UX_Box from "./assets/images/ux-box.jpg";
import Dev_Box from "./assets/images/dev-box.jpg";

function About(props) {
  return (
    <div className="grid-container-about text-white">
      <div className="about-header">
        <div>
          <h2>
            Erik Rodriguez
        </h2>
        </div>
      </div>
      <div className="p-2 bio">
        <h1>Biography</h1>
        <h4 className="text-main">Front End Developer | UI &amp; UX Designer</h4>
        <p className="text-justify">I love design, and I love to solve problems. Creating an excellent user experience needs to be front and center for any business and I enjoy helping businesses achieve that. I have been developing and designing for 4 years in Denver, Colorado and have helped small businesses revitalize their old websites and gain new customers.</p>
        <p className="text-justify">I started my career as a <em>Full Stack Developer</em> in an ASP.Net C# agency where I grew an affinity towards front end development. I gained ownership of many of the front end projects as well as helping solve consumer issues with QA due to bugs and other user experience issues.</p>

      </div>
      <div className="p-2 skills-title">
        <h2>Technical Skills</h2>
      </div>
      <div className="skillbox-1 p-2">
        <h3>Design</h3>
        <hr></hr>
        <ul>
          <li>User Interface Design</li>
          <li>User Experience Design</li>
          <li>Sketch</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      <div className="skillbox-2 p-2">
        <h3>Development</h3>
        <hr></hr>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS/SCSS</li>
          <li>BootStrap</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>React JS</li>
          <li>Anglular</li>
          <li>PHP</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="skillbox-3 p-2">
        <h3>CMS / E-commerce</h3>
        <hr></hr>
        <ul>
          <li>WordPress</li>
          <li>WooCommerce</li>
          <li>Drupal</li>
          <li>Webflow</li>
          <li>BigCommerce</li>
          <li>Shopify</li>
          
        </ul>
      </div>
      <div className="focus-title p-2">
        <h2>Focus Areas</h2>
      </div>

      <div className="focusbox-1 p-2">
        <h3>User Experience Design</h3>
        <Img
          className="project-img rounded"
          src={UX_Box} 
          style={{ backgroundColor: 'grey', width: '480', height: '320' }}
        />
        <h4 className="text-main">Good User Experience Retains Consumers</h4>
        <p>My approach to user experience starts with the current behavior and familiarize myself with the audience. The simplest way to approach the problem is to recognize exactly where the users issues lie. Upon collection of data I am able to generate ideas for design and begin to prototype the user flows and interface.<br></br> <br></br>  After that it's testing, testing, testing! Lastly after analyzing the results I can begin to implement the changes and continue pushing the needle. I have had the pleasure of increasing businesses retention rates as well as improving and shortening user click throughs.</p>
      </div>
      <div className="focusbox-2 p-2">
        <h3>User Interface Design</h3>
        <Img
          className="project-img rounded"
          src={UI_Box} 
          style={{ backgroundColor: 'grey', width: '480', height: '320' }}
        />
        <h4 className="text-main">Show More Say Less</h4>
        <p>"Great UI design is like a good joke, if you have to explain it, it's not that good of a joke." This is my UI design motto and I don't know a saying that's more directly applicable. Clarity is king in the realm of UI design and consumer retention is queen; the coupling of these two priciples provides a strong foundation in UI design. <br></br> <br></br>  This foundation is the main experience and the appearance must always come second to the functionality. I personally enjoy the design of UI's due to the fact that at that point I have the user experience with very functional approach and can now create the visual experience.  </p>
      </div>
      <div className="focusbox-3 p-2">
        <h3>Front End Development</h3>
        <Img
          className="project-img rounded"
          src={Dev_Box} 
          style={{ backgroundColor: 'grey', width: '480', height: '320' }}
        />
        <h4 className="text-main">Design Focused Reliable Code</h4>
        <p>Front End Development is the mesh of my problem solving skills with technical experience and a dash of design. I often develop the very designs that I create and understand some things I think most developers &amp; designers don't. <br></br> <br></br> My experience being a developer first has allowed me to understand technical limitations to a design, and to be able to trim down the bells and whistles for tight project deadlines. My experience ranges from React to Wordpress and have had exposure to many other languages since I have had the pleasure of working with agencies; I am always looking to get my hands on a new project.</p>
      </div>


    </div>
  )
}

export default About;