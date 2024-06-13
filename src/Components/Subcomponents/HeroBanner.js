import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import erik from '../../assets/images/Cases/erik-bw 1.png'; // Make sure to replace this with the correct path to your image

const HeroBanner = () => {
  const isMobile = window.innerWidth < 768; // Assuming mobile breakpoint is 768px

  const baseSpringConfig = { tension: 170, friction: 26 };
  
  const fadeInDelay = isMobile ? 0 : 300;
  const staggerDelay = 300;
  
  // Enhanced animations for mobile and web
  const h1Spring = useSpring({
    from: { opacity: 0, transform: 'translateY(-40px) scale(0.9) rotate(-3deg)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1) rotate(0deg)' },
    config: baseSpringConfig,
    delay: fadeInDelay,
  });

  const pSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: baseSpringConfig,
    delay: fadeInDelay + staggerDelay,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: baseSpringConfig,
    delay: fadeInDelay + 2 * staggerDelay,
  });

  const imgSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    config: baseSpringConfig,
    delay: fadeInDelay + 3 * staggerDelay,
  });

  return (
    <div className="container py-0 py-md-0">
      <div className="row my-0">
        <div className={`col-md-6 py-5 order-md-${isMobile ? '2' : '1'}`}>
          <animated.h1 style={h1Spring} className="title text-white">
            Hi, I'm Erik
          </animated.h1>
          <animated.p style={pSpring} className="sub-header mt-4 light-white">
            Lead product designer, developer, and technologist with a passion in creating human-centered products that bring people together.
          </animated.p>
          <animated.a
            href="mailto:erikrdgz2@gmail.com"
            className="submit-btn d-block btn col-12 col-md-4 mt-5 text-white"
            style={buttonSpring}
          >
            Message Me
          </animated.a>
        </div>
        <div className={`col-md-6 mt-1 text-right mb-0 order-md-${isMobile ? '1' : '2'}`}>
          <div className="img-height">
            <animated.img src={erik} alt="Me" className="img-fluid erik-pic rounded-circle" style={imgSpring} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
