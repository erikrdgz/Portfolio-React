
import React from "react";
import { useTrail, animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import Thumbnail from '../Subcomponents/Thumbnail.js';

import AnimatedSection from "../Subcomponents/AnimatedSection.js";

import NSLS from "../../assets/images/Companies/Nsls-Banner-2.png";
import IFCC from "../../assets/images/Companies/ifcc-logo.png";
import Dialpad from "../../assets/images/Companies/dialpad-ai-logo.png";
import Koopid from "../../assets/images/Companies/koopid-logo.png";
import Misty from "../../assets/images/Companies/misty-logo-2.png";
import Techtonic from "../../assets/images/Companies/techtonic-logo.png";
import TabSection from "../Subcomponents/TabSection.js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NSLSVideo from "../../assets/videos/nsls-vid.mp4";
import DialpadVideo from "../../assets/videos/dialpad-animated.mp4";
import KoopidVideo from "../../assets/videos/koopid-animated.mp4";

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
    config: { tension: 100, friction: 20 },
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


  return (

    <>
      <div className=" bg-main background text-center d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="text-white p-3 px-md-5">
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

      <div className="bg-white  container p-lg-5">
        <div className="row">
          <div className="col-lg-6 p-2 p-md-5">
            <div className="video-container embed-responsive embed-responsive-16by9">
              <video className="video embed-responsive-item" muted autoPlay loop width="3840" height="2160">
                <source src={NSLSVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>









          <AnimatedSection
            title="Senior Product Designer"
            subtitle="National Society of Leadership and Success"
            summary="As the Senior Product Designer for NSLS, I oversaw the entirety of the user experience process from start to finish resulting in a cohesive experience across multiple platforms for students."
            linkText="View Case Study"
            linkUrl="/case-study"
            chips={["UI Design", "UX Research", "Asset Creation", "Strategy", "User Testing", "Leadership", "Front End Development" ]}
          />






        </div>
      </div>
      <div className="bg-white  container p-md-5">
        <div className="row">
          <div className="col-lg-6 p-2 p-md-5">
            <div className="video-container embed-responsive embed-responsive-4by3">
              <video className="video embed-responsive-item" muted autoPlay loop width="3840" height="2160">
                <source src={DialpadVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>





          <AnimatedSection
            title="Product Designer"
            subtitle="Dialpad"
            summary=" While collaborating with the Dialpad Design Team I crafted new features for their existing platform, contributed to the design system and enhanced user performance on a new vertical."
            linkText="View Case Study"
            linkUrl="/case-study"
            chips={["UI Design", "UX Research", "Asset Creation"]}
          />


        </div>
      </div>
      <div className="bg-white  container p-md-5">
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
            linkUrl="/case-study"
            chips={["UI Design", "UX Research", "Asset Creation"]}
          />


        </div>
      </div>
      <div className="bg-section container-fluid p-md-5">
        <TabSection />
      </div>



    </>

  );
}

export default Projects;
