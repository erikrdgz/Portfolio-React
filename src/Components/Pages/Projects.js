
import React from "react";
import { useTrail, animated, useSpring } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Thumbnail from '../Subcomponents/Thumbnail.js';

import NSLS from "../../assets/images/Companies/Nsls-Banner-2.png";
import IFCC from "../../assets/images/Companies/ifcc-logo.png";
import Dialpad from "../../assets/images/Companies/dialpad-ai-logo.png";
import Koopid from "../../assets/images/Companies/koopid-logo.png";
import Misty from "../../assets/images/Companies/misty-logo-2.png";
import Techtonic from "../../assets/images/Companies/techtonic-logo.png";
import TabSection from "../Subcomponents/TabSection.js";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  const items = [
    { image: NSLS, bgColor: "#121D2F", bgColor2: "#19456D", title: "Senior Product Designer", category: "ED Tech", link: "/projects/nsls" },
    { image: IFCC, bgColor: "#F4C313", bgColor2: "#d47426ff", title: "Senior Product Designer", category: "Electrical Services", link: "/projects/ifcc" },
    { image: Dialpad, bgColor: "#6C3DFF", bgColor2: "#f51dbb", title: "Product Designer", category: "A.I Communications", link: "/projects/dialpad" },
    { image: Koopid, bgColor: "#0056EB", bgColor2: "#002970", title: "Lead Designer and Developer", category: "A.I Communications", link: "/projects/koopid" },
    { image: Misty, bgColor: "#65499D", bgColor2: "#260B5C", title: " Junior Designer and Developer", category: "Robotics", link: "/projects/misty" },
    { image: Techtonic, bgColor: "#ACCC20", bgColor2: "#406F04", title: "Software Developer", category: "Software Development", link: "/projects/techtonic" },
  ];

  const trail = useTrail(items.length, {
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


  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 20, friction: 10 },
  });

  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 20, friction: 10 },
    delay: 500, // Adjust delay as needed
  });

  const mouseAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 20, friction: 10 },
    delay: 1000, // Adjust delay as needed
  });

  return (

    <>
     <div className=" bg-main background text-center d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
      <div className="text-white">
        <animated.h1 className="header-font" style={headerAnimation}><strong className="text-accent-2">Senior</strong> Product Designer</animated.h1>
        <animated.p className="header-subfont" style={paragraphAnimation}>User driven design and data driven results.</animated.p>
        <animated.div className="field w-100 mt-5" style={mouseAnimation}>
          <div className="mouse"></div>
        </animated.div>
      </div>
    </div>
      {/* <div className=" bg-main background text-center d-flex align-items-center justify-content-center" style={{ height: "90vh" }}>
        <div className="text-white">
          <h1 className="header-font"><strong className="text-accent-2">Senior</strong> Product Designer</h1>
          <p className="header-subfont ">User driven design and data driven results. </p>
          <div className="field w-100 mt-5">
            <div className="mouse">

            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white  container p-md-5">
        <div className="row">
          <div className="col-md-6 p-2 p-md-4">
            <img src={NSLS} className="img-fluid mx-auto" alt="" />
          </div>
          <div className="col-md-6 p-md-4 d-flex justify-content-start align-items-center">
            <div>
              <h3 className="text-accent-2 project-position ">Senior Product Designer</h3>
              <h2 className="project-name pb-md-4">National Society of Leadership and Success</h2>
              <p className="summary pt-4">As the Senior Product Designer for NSLS, I oversaw the entirety of the user experience process from start to finish resulting in a cohesive experience across multiple platforms for students. </p>
              <a href="" className=" view-project-btn btn-main">View Case Study <span><FontAwesomeIcon icon={faArrowRight} className="ml-3" /></span>
              </a>
              <div classname="chip-section">
                <p className="chip mx-2">UI Design</p>
                <p className="chip mx-2">UX Research</p>
                <p className="chip mx-2">User Interviews</p>
                <p className="chip mx-2">Asset Creation</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white  container p-md-5">
        <div className="row">
          <div className="col-md-6 p-2 p-md-4">
            <img src={NSLS} className="img-fluid mx-auto" alt="" />
          </div>
          <div className="col-md-6 p-md-4 d-flex justify-content-start align-items-center">
            <div>
              <h3 className="text-accent-2 project-position ">Product Designer</h3>
              <h2 className="project-name pb-md-4">Dialpad</h2>
              <p className="summary pt-4">lasdfkjasdhf ksjdhfkjshdf kjhsd fkjshdf ksjdfh skdjfhskj dfhksjhdf kjh sdkjhf akjsdhfljahsldjfh dfhsjdfh ksjdhf kjhd kfjh ksjdhf kjhsdkfjh kjhsd fokjahsdfjkh kjhaZshdkf jhasd fkjh</p>
              <a href="" className=" view-project-btn btn-main">View Case Study <span><FontAwesomeIcon icon={faArrowRight} className="ml-3" /></span>
              </a>
              <div classname="chip-section">
                <span className="chip mx-2">Chip</span>
                <span className="chip mx-2">Chip</span>
                <span className="chip mx-2">Chip</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-white  container p-md-5">
        <div className="row">
          <div className="col-md-6 p-2 p-md-4">
            <img src={NSLS} className="img-fluid mx-auto" alt="" />
          </div>
          <div className="col-md-6 p-md-4 d-flex justify-content-start align-items-center">
            <div>
              <h3 className="text-accent-2 project-position "> Product Designer &amp; Developer</h3>
              <h2 className="project-name pb-md-4">Koopid</h2>
              <p className="summary pt-4">lasdfkjasdhf ksjdhfkjshdf kjhsd fkjshdf ksjdfh skdjfhskj dfhksjhdf kjh sdkjhf akjsdhfljahsldjfh dfhsjdfh ksjdhf kjhd kfjh ksjdhf kjhsdkfjh kjhsd fokjahsdfjkh kjhaZshdkf jhasd fkjh</p>
              <a href="" className=" view-project-btn btn-main">View Case Study <span><FontAwesomeIcon icon={faArrowRight} className="ml-3" /></span>
              </a>
              <div classname="chip-section">
                <span className="chip mx-2">Chip</span>
                <span className="chip mx-2">Chip</span>
                <span className="chip mx-2">Chip</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-section container-fluid p-md-5">
        <TabSection />
      </div>



    </>

  );
}

export default Projects;
