import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import erik from '../../assets/images/Cases/erik-bw 1.png'; // Make sure to replace this with the correct path to your image



const HeroBanner = () => {
    const h1Spring = useSpring({
      from: { opacity: 0, transform: 'translateY(-40px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: { tension: 120, friction: 20 }, // Adjust the tension and friction for a smooth effect
    });
  
    const pSpring = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: config.gentle,
      delay: 500,
    });
  
    const imgSpring = useSpring({
      from: { opacity: 0, transform: 'scale(0.9)' },
      to: { opacity: 1, transform: 'scale(1)' },
      config: { tension: 150, friction: 14 },
      delay: 1000,
    });
  
    const buttonSpring = useSpring({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: config.wobbly,
      delay: 1500,
    });
  
    return (
      <div className="container py-0 py-md-0">
        <div className="row my-0">
          <div className="col-md-6">
            <animated.h1 style={h1Spring} className="title text-white">
              Hi, I'm Erik
            </animated.h1>
            <animated.p style={pSpring} className="sub-header text-white">
              Lead product designer, developer, and technologist
              with a passion in creating human centered products that bring people together.
            </animated.p>
            <animated.a
              href="mailto:erikrdgz2@gmail.com"
              className="submit-btn d-block btn col-4 mt-2 mt-md-5 text-white"
              style={buttonSpring}
            >
              Message Me
            </animated.a>
          </div>
          <div className="col-md-6 text-right mb-0">
            <div className="img-height">
              <animated.img src={erik} alt="Me" className="img-fluid erik-pic" style={imgSpring} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;