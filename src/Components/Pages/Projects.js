
import React from "react";
import { useTrail, animated } from 'react-spring';

import Thumbnail from '../Subcomponents/Thumbnail.js';

import NSLS from "../../assets/images/Companies/NSLS.png";
import IFCC from "../../assets/images/Companies/ifcc-logo.png";
import Dialpad from "../../assets/images/Companies/dialpad-ai-logo.png";
import Koopid from "../../assets/images/Companies/koopid-logo.png";
import Misty from "../../assets/images/Companies/misty-logo-2.png";
import Techtonic from "../../assets/images/Companies/techtonic-logo.png";

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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Hello World!</h1>
          <p className="py-4 py-lg-5 mx-auto col-md-8">As a Senior Product Designer, I specialize in crafting user-centered solutions and design systems that prioritize both aesthetics and functionality. My passion lies in creating seamless and intuitive user experiences, ensuring that every design decision aligns with user needs.</p>
        </div>
      </div>

      <div className="row">
        {trail.map((style, index) => (
          <animated.div key={index} style={style} className="col-12 col-md-6 col-lg-6 col-xl-4 p-3">
            <Thumbnail
              class="project-1 shadow"
              link={items[index].link}
              image={items[index].image}
              bgColor={items[index].bgColor}
              bgColor2={items[index].bgColor2}
              title={items[index].title}
              category={items[index].category}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
