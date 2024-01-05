
import React from 'react';
import { useTrail, animated } from 'react-spring';
import '../../App.css';
import Img from 'react-cool-img';

import UI_001 from "../../assets/images/Mockups/ui-001.jpg";
import UI_002 from "../../assets/images/Mockups/ui-002.jpg";
import UI_003 from "../../assets/images/Mockups/ui-003.jpg";
import UI_004 from "../../assets/images/Mockups/ui-004.jpg";
import UI_005 from "../../assets/images/Mockups/ui-005.jpg";
import UI_006 from "../../assets/images/Mockups/ui-006.jpg";
import UI_007 from "../../assets/images/Mockups/ui-007.png";
import UI_008 from "../../assets/images/Mockups/ui-008.png";
import UI_009 from "../../assets/images/Mockups/ui-009.png";
import UI_010 from "../../assets/images/Mockups/ui-010.png";
import UI_011 from "../../assets/images/Mockups/ui-011.png";
import UI_012 from "../../assets/images/Mockups/ui-012.png";

function UIDesigns(props) {
  const images = [
    UI_001, UI_002, UI_003, UI_004, UI_005, UI_006,
    UI_007, UI_008, UI_009, UI_010, UI_011, UI_012
  ];

  const trail = useTrail(images.length, {
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
    <div className="container mt-4">
      <header className="">
        <div className="row">
          <div className="col-12  text-center">
            <h1>Designs</h1>
            <p className="py-4 py-lg-5 col-md-8 mx-auto">Consistent daily practice in product and UI design is paramount for honing skills and maintaining a cutting-edge approach. It allows designers to stay attuned to evolving trends, experiment with innovative concepts, and refine their craft through hands-on experience. This habitual commitment not only fosters creative growth but also ensures designers are well-equipped to address the ever-changing landscape of user expectations and design standards.</p>
          </div>
        </div>
      </header>

      <div className="row">
        {trail.map((style, index) => (
          <animated.div key={index} style={style} className="col-12 col-md-6 col-lg-4 p-2">
            <Img
              className="project-img img-fluid"
              src={images[index]}
              style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default UIDesigns;

