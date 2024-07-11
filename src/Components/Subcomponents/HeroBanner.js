import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from '@mui/material';
import erik from '../../assets/images/Cases/erik-bw 1.png'; // Make sure to replace this with the correct path to your image

const HeroBanner = () => {
  const isMobile = window.innerWidth < 768; // Assuming mobile breakpoint is 768px

  const baseSpringConfig = { tension: 170, friction: 26 };
  
  const fadeInDelay = isMobile ? 0 : 300;
  const staggerDelay = 300;
  
  // Enhanced animations for mobile and web
  const h1Spring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: baseSpringConfig,
    delay: fadeInDelay,
  });

  const pSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: baseSpringConfig,
    delay: fadeInDelay + staggerDelay,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
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
        <div className={`col-md-8 col-lg-7 py-5 order-md-${isMobile ? '2' : '1'}`}>
          <animated.h1 style={h1Spring} className="title text-white">
            Product Designer, Developer, and Technologist
          </animated.h1>
          <animated.p style={pSpring} className="sub-header mt-4 light-white">
           Transforming business needs into user-centered solutions.
            <span className="font-weight-light d-block mt-3">7+ years professional experience</span>
            <span className="font-weight-light d-block">Denver, Colorado based</span>
          </animated.p>
          <animated.div style={buttonSpring}>
            <Button
              variant="contained"
              color="primary"
              href="mailto:erikrdgz2@gmail.com"
              sx={{
                backgroundColor: '#1976d2', // Blue color
                color: '#fff', // White text color
                '&:hover': {
                  backgroundColor: '#115293', // Darker blue on hover
                  color: '#fff', // Ensure text stays white on hover
                },
              }}
              className="col-12 col-md-4 mt-5"
            >
              Message Me
            </Button>
          </animated.div>
        </div>
        <div className={`col-md-4 col-lg-5 mt-1 text-right mb-0 order-md-${isMobile ? '1' : '2'}`}>
          <div className="img-height">
            <animated.img src={erik} alt="Me" className="img-fluid erik-pic rounded-circle" style={imgSpring} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
