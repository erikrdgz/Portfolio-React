
import React from "react";
import { useTrail, animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import { FiChevronRight } from "react-icons/fi";

import AnimatedSection from "../Subcomponents/AnimatedSection.js";
import AnimatedList from "../Subcomponents/AnimatedList.js";
import AnimatedTitleParagraph from "../Subcomponents/AnimatedTitleParagraph.js";

import HeroBanner from "../Subcomponents/HeroBanner.js";

import NSLS from "../../assets/images/Companies/Nsls-Banner-2.png";
import IFCC from "../../assets/images/Companies/ifcc-logo.png";
import Dialpad from "../../assets/images/Companies/dialpad-ai-logo.png";
import Koopid from "../../assets/images/Companies/koopid-logo.png";
import Misty from "../../assets/images/Companies/misty-logo-2.png";
import Techtonic from "../../assets/images/Companies/techtonic-logo.png";
import TabSection from "../Subcomponents/TabSection.js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import NSLSVideo from "../../assets/videos/nsls-vid.mp4";
// import DialpadVideo from "../../assets/videos/dialpad-animated.mp4";

// import ReactPlayer from 'react-player';

import ContactForm from "../ContactForm";

import erik from "../../assets/images/Cases/erik-bw 1.png"

function Projects(props) {
  const items = [
    { image: NSLS, bgColor: "#121D2F", bgColor2: "#19456D", title: "Senior Product Designer", category: "ED Tech", link: "/projects/nsls" },
    { image: IFCC, bgColor: "#F4C313", bgColor2: "#d47426ff", title: "Senior Product Designer", category: "Electrical Services", link: "/projects/ifcc" },
    { image: Dialpad, bgColor: "#6C3DFF", bgColor2: "#f51dbb", title: "Product Designer", category: "A.I Communications", link: "/projects/dialpad" },
    { image: Koopid, bgColor: "#0056EB", bgColor2: "#002970", title: "Lead Designer and Developer", category: "A.I Communications", link: "/projects/koopid" },
    { image: Misty, bgColor: "#65499D", bgColor2: "#260B5C", title: " Junior Designer and Developer", category: "Robotics", link: "/projects/misty" },
    { image: Techtonic, bgColor: "#ACCC20", bgColor2: "#406F04", title: "Software Developer", category: "Software Development", link: "/projects/techtonic" },
  ];

  const trails = useTrail(items.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 80, friction: 10 },
    delay: index => calculateDelay(index),
  });

  const calculateDelay = (index) => {
    const goldenRatio = 1.61803398875;
    return Math.round(1000 * goldenRatio ** index);
  };

  const researchTabContent = [
    { text: "Delving into user insights to uncover their motivations.", icon: FiChevronRight },
    { text: "Conducting thorough UX audits to evaluate existing user experiences.", icon: FiChevronRight },
    { text: "Identifying key user pain points and challenges.", icon: FiChevronRight },
    { text: "Analyzing data to extract actionable insights.", icon: FiChevronRight }
  ];

  const strategyTabContent = [
    { text: "Facilitating stakeholder workshops to define strategic objectives.", icon: FiChevronRight },
    { text: "Analyzing data to identify convergence points between business and user goals.", icon: FiChevronRight },
    { text: "Developing user personas to represent target audiences.", icon: FiChevronRight },
    { text: "Mapping out user journeys to identify touchpoints and pain points.", icon: FiChevronRight }
  ];

  const designTabContent = [
    { text: "Exploring innovative design solutions through iterative prototyping.", icon: FiChevronRight },
    { text: "Creating user flows based on extensive user research and personas.", icon: FiChevronRight },
    { text: "Iterating designs based on user feedback to enhance usability.", icon: FiChevronRight },
    { text: "Crafting visually appealing UI designs that prioritize user experience.", icon: FiChevronRight }
  ];

  const validationTabContent = [
    { text: "Conducting comprehensive user testing sessions to evaluate design effectiveness.", icon: FiChevronRight },
    { text: "Analyzing user behavior data to identify areas for improvement.", icon: FiChevronRight },
    { text: "Incorporating user feedback into design iterations to enhance usability.", icon: FiChevronRight },
    { text: "Conducting iterative design cycles based on insights gathered from validation processes.", icon: FiChevronRight }
  ];

  const tabData = [
    {
      name: 'Research',
      content:
        <div>
          <AnimatedTitleParagraph
            title="In-Depth Research and User Empathy"
            paragraph="My approach begins with extensive research aimed at understanding user behaviors, desires, and challenges. During the initial exploration phase, I delve deep into user experiences, gathering insights into their preferences and pain points. Through methods like interviews, surveys, and usability tests, I uncover valuable data that guides the design process."
          />
          <AnimatedList items={researchTabContent} fontSize="0.95rem" iconClass="text-main" />
        </div>
    },
    {
      name: 'Strategy',
      content:
        <div>
          <AnimatedTitleParagraph
            title="Strategic Alignment of Business and User Goals"
            paragraph="My strategy revolves around aligning business objectives with user needs to create meaningful experiences. By facilitating collaborative workshops and strategy sessions, I bridge the gap between organizational goals and user expectations. Through techniques like persona development and journey mapping, I chart a course that balances user satisfaction with business objectives."
          />
          <AnimatedList items={strategyTabContent} fontSize="0.95rem" iconClass="text-main" />
        </div>
    },
    {
      name: 'Design',
      content:
        <div>
          <AnimatedTitleParagraph
            title="Simplifying Complexity Through Design"
            paragraph="Transitioning from abstract concepts to tangible designs, my focus is on simplifying complex processes into intuitive interfaces. By crafting wireframes, user flows, and prototypes, I ensure that each design decision serves both user needs and business objectives. The result is an interface that seamlessly integrates functionality with user delight."
          />
          <AnimatedList items={designTabContent} fontSize="0.95rem" iconClass="text-main" />
        </div>
    },
    {
      name: 'Validation',
      content:
        <div>
          <AnimatedTitleParagraph
            title="Validating Designs for User-Centric Excellence"
            paragraph="Ensuring the effectiveness of designs requires thorough validation through user testing and feedback analysis. By conducting usability tests, analyzing user behavior, and gathering feedback, I refine designs to meet high usability standards and align with user expectations. This iterative process drives continuous improvement towards user-centric excellence."
          />
          <AnimatedList items={validationTabContent} fontSize="0.95rem" iconClass="text-main" />
        </div>
    }
  ];


  // const headerAnimation = useSpring({
  //   from: { opacity: 0, transform: 'translateY(100%)' },
  //   to: { opacity: 1, transform: 'translateY(0)' },
  //   config: { tension: 20, friction: 10 },
  // });

  // const paragraphAnimation = useSpring({
  //   from: { opacity: 0, transform: 'translateY(100%)' },
  //   to: { opacity: 1, transform: 'translateY(0)' },
  //   config: { tension: 20, friction: 10 },
  //   delay: 500, // Adjust delay as needed
  // });

  // const mouseAnimation = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: { tension: 20, friction: 10 },
  //   delay: 1000, // Adjust delay as needed
  // });



  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is in viewport
  });

  const trail = useTrail(7, {
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-50px)' },
    config: { tension: 100, friction: 20 },
    delay: inView ? 200 : 0, // Delay initial animation until element is in view
  });



  const roles = ["Senior Product Designer", "React Developer", "Technologist"];

  const roleTrail = useTrail(roles.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 5 },
    delay: 500,
  });

  const paragraphAnimation = useTrail(1, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 20 },
    delay: 1500,
  });

  const mouseAnimation = useTrail(1, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 20 },
    delay: 2000,
  });

  const NSLSVideo = require("../../assets/videos/nsls-vid.mp4") ;

  const DialpadVideo =require( "../../assets/videos/dialpad-animated.mp4");


  return (

    <>
      <div className="bg-black ">


        {/* <div className="  my-0 home-header  container-fluid">
          <div className="text-center h-100 d-flex justify-content-center align-items-center">
            <div className="text-white p-3 px-md-5 align-self-center">
              <div className="header-font px-md-5">
                <h1>
                  {roleTrail.map((props, index) => (
                    <animated.div className="py-2" key={index} style={props}>
                      <strong className="text-accent">{roles[index]}</strong>
                    </animated.div>
                  ))}</h1>
              </div>
              {paragraphAnimation.map((props, index) => (
                <animated.p key={index} className="header-subfont py-md-4 py-4" style={props}>
                  User driven design and data driven results.
                </animated.p>
              ))}
              {mouseAnimation.map((props, index) => (
                <animated.div key={index} className="field w-100 mt-5" style={props}>
                  <div className="mouse"></div>
                </animated.div>
              ))}
            </div>


          </div>



        </div> */}


        {/* <div className="container  py-0 py-md-0">
          <div className="row my-0">
            <div className="col-md-6 ">
              <h1 className="title text-white">
                Hi, I'm Erik
              </h1>
              <p className="sub-header text-white">
              Lead product designer, developer, and technologist
with a passion in creating human centered products that bring people together.
              </p>
              <a href="mailto:erikrdgz2@gmail.com" className="submit-btn d-block btn col-4 mt-2 mt-md-5 text-white  ">Message Me</a>
            </div>


            <div className="col-md-6 text-right  mb-0">
              <div className="img-height">
               <img src={erik} alt="Me" class="img-fluid erik-pic"/>
              </div>
             
            </div>
          </div>
        </div> */}
  <HeroBanner/>


{/*       
      <div className="container-fluid my-0 text-white">
            <div className="row my-0">
              <div className="col-6 text-left">
                <div className="small-text">
                  <p className="text-white my-0 small-text">9yrs of professional experience</p>
                  <p className="text-white my-0 small-text">Web, Mobile, Tablet design</p>
                  <p className="text-white my-0 small-text">Figma, Miro, Adobe CS</p>
                  <p className="text-white small-text">React, Html, CSS, JS</p>
                </div>
              </div>
              <div className="col-6 text-right">
                <a href="mailto:erikrdgz2@gmail.com"><p className="text-white my-0 small-text">erikrdgz2@gmail.com</p></a>
                <p className="text-white my-0 small-text">Denver, CO</p>
                <p className="text-white my-0 small-text">Bilingual</p>
                
                  
              </div>
            </div>
      </div> */}

    </div>
    
   

      <div className="bg-white container-fluid p-lg-5">
        <div className="row">


          <div className="col-lg-6 p-2 p-md-5">
            <div className="video-container embed-responsive embed-responsive-16by9">
              <video className="video embed-responsive-item" muted autoPlay loop playsInline preload="auto">
                <source src={NSLSVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>

        








          <AnimatedSection
            // title="Senior Product Designer"
            subtitle="National Society of Leadership and Success"
            summary="As the Senior Product Designer for NSLS, I oversaw the entirety of the user experience process from start to finish resulting in a cohesive experience across multiple platforms for students."
            linkText="View Case Study"
            linkUrl="/case-study/nsls"
            chips={["UI Design", "UX Research", "Asset Creation", "Strategy", "User Testing", "Leadership", "Front End Development"]}
          />

        </div>
      </div>

      <div className="bg-white container-fluid p-md-5 border-top">
        <div className="row">
          <div className="col-lg-6 p-2 p-md-5">
            <div className="video-container embed-responsive embed-responsive-4by3">
              <video className="video embed-responsive-item" muted autoPlay loop playsInline preload="auto" >
                <source src={DialpadVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>





          <AnimatedSection
            // title="Product Designer"
            subtitle="Dialpad"
            summary=" While collaborating with the Dialpad Design Team I crafted new features for their existing platform, contributed to the design system and enhanced user performance on a new vertical."
            linkText="View Case Study"
            linkUrl="/case-study/dialpad"
            chips={["UI Design", "UX Research", "Asset Creation", "Strategy", "User Testing", "Leadership", "Front End Development", "Lead Integration", "Design System Management"]}
          />


        </div>
      </div>
      {/* <div className="bg-main text-white container-fluid p-md-5">
        <div className="row">
          <div className="col-lg-6 p-2 p-md-5">
            <div className="video-container embed-responsive embed-responsive-4by3">
              <video className="video embed-responsive-item" muted autoPlay loop width="3840" height="2160">
                <source src={KoopidVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>




          <AnimatedSection
            title="Lead UI/UX Designer and Developer"
            subtitle="Koopid.ai"
            summary=" Working as the Lead Designer and Developer allowed me to redesign Koopid's multifaceted application, create a design system, conduct user research and interviews allowing me to expedite the user to agent connection resulting in an efficient user workflow."
            linkText="View Case Study"
            linkUrl="/case-study/koopid"
            chips={["UI Design", "UX Research", "Asset Creation"]}
          />


        </div>
      </div> */}
      <div className="bg-light-main text-white container-fluid p-md-5">
        <TabSection tabData={tabData} />
      </div>

      <div className=" container-fluid bg-main text-white p-md-5">
        <ContactForm heading="Lets Chat" />
      </div>






    </>

  );
}

export default Projects;
