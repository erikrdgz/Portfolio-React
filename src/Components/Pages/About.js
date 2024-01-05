import React from 'react';
import '../../App.css';
import Img from 'react-cool-img';
import UI_Box from "../../assets/images/ui-box.jpg";
import UX_Box from "../../assets/images/ux-box.jpg";
import Dev_Box from "../../assets/images/dev-box.jpg";

function About(props) {
  return (
    <div className="container-fluid mt-4 pt-3">

      <div className=" bio col-12">
        <h1 className="mb-3">Biography</h1>
        <h4 className="text-main mb-4">UX Designer | Product Designer | Front End Developer  </h4>
        <p className="text-justify">I love design, and I love to solve problems. Creating an excellent user experience needs to be front and center for any business and I enjoy helping businesses achieve that. I have been developing and designing for 6 years in Denver, Colorado and have helped businesses small and large to revitalize their old websites, mobile and desktop apps.</p>
        <p className="text-justify">I started my career as a <em>Full Stack Developer</em> in an ASP.Net C# agency where I grew an affinity towards front end development. I gained ownership of many of the front end projects as well as helping solve user issues via user experience research. This propelled me into UX Design and into the beginning of my new career as a designer. I switched to more design focused roles and have loved utilizing my engineering skills to approach design with a different outlook. </p>

      </div>
      <div className="row">
        <div className="col-12 my-4">
          <h2>Skillset</h2>
        </div>
        <div className="col-lg-4 my-4 my-md-2">
          <div className="skillbox-1">
            <h3>Design</h3>
            <hr style={{ border: "1px solid black" }}></hr>
            <ul>
              <li>User Interface Design</li>
              <li>User Centered Design</li>
              <li>Figma</li>
              <li>Miro</li>
              <li>Sketch</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe XD</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 my-4 my-md-2">
          <div className="skillbox-2">
            <h3>Development</h3>
            <hr style={{ border: "1px solid black" }}></hr>
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
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
        </div>
        <div className="col-lg-4 my-4 my-md-2">
          <div className="skillbox-3">
            <h3>CMS / E-commerce</h3>
            <hr style={{ border: "1px solid black" }}></hr>
            <ul>
              <li>WordPress</li>
              <li>WooCommerce</li>
              <li>Drupal</li>
              <li>Webflow</li>
              <li>BigCommerce</li>
              <li>Shopify</li>

            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Focus Areas</h2>
        </div>
        <div className="col-md-12 px-0">

          <div className="row">
            <div className="col-md-4">
              <Img
                className="project-img rounded my-4 my-md-2"
                src={UX_Box}
                style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div>
                <h3>User Experience Design</h3>
                <h4 className="text-main my-4">Good User Experience Retains Consumers</h4>
                <p>My approach to user experience starts with the current behavior and familiarize myself with the audience. The simplest way to approach the problem is to recognize exactly where the users issues lie. Upon collection of research based data I begin to define the needs of users to continue the design process.<br></br> <br></br>  Next is the brainstorming sessions and black boarding to begin to ideate possible solutions. Once I have a good sense of what I need to fix, I begin prototyping the possible solutions to push into the testing phase. Depending on the team I am working with I will either send the designs to engineering or code them myself.</p>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
            <Img
              className="project-img rounded my-4 my-md-2"
              src={UI_Box}
              style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
            />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div>
              <h3>High Fidelity Design</h3>
              <h4 className="text-main my-4">Show More Say Less</h4>
            <p>"Great UI design is like a good joke, if you have to explain it, it's not that good of a joke." This is my UI design motto and I don't know a saying that's more directly applicable. Clarity is king in the realm of UI design and consumer retention is queen; the coupling of these two priciples provides a strong foundation in UI design. <br></br> <br></br>  This foundation is the main experience and the appearance must always come second to the functionality. I personally enjoy high fidelity design due to the fact that at that point I have the user experience with a user focused approach and can now create the visual experience.  </p>
              </div>
            </div>
          </div>

          
          <div className="row">
            <div className="col-md-4">
            <Img
              className="project-img rounded my-4 my-md-2"
              src={Dev_Box}
              style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
            />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div>
              <h3>Front End Development</h3>
              <h4 className="text-main my-4">Design Focused Reliable Code</h4>
            <p>Front End Development is the mesh of my problem solving skills with technical experience and a dash of design. I often develop the very designs that I create and understand some things I think most developers &amp; designers don't. <br></br> <br></br> Since I began my career as a developer, this has allowed me to understand technical limitations to a design and given me the experience to meet tight project deadlines. My experience ranges from React to Wordpress with exposure to many other languages. I have had the pleasure of working with agencies, independent clients, enterprise level companies and I am always looking to get my hands on a new project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  )
}

export default About;