import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedHeader = ({ title, subtitle, description, descriptionClassName }) => {
  // UseInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.6, // Trigger animation when at least 50% of the component is in view
  });

  // Animation config for the header elements with increased animation delays
  const titleAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(-50px)' },
    config: { mass: 1, tension: 100, friction: 20 },
    delay: 300 // Delay for the title animation
  });

  const subtitleAnimation = useSpring({ 
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
    config: { mass: 1, tension: 100, friction: 20 },
    delay: 600 // Delay for the subtitle animation
  });

  const descriptionAnimation = useSpring({ 
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { mass: 1, tension: 100, friction: 20 },
    delay: 900 // Delay for the description animation
  });

  return (
    <header className="py-md-5 container" ref={ref}>
      <div className="row">
        <div className="col-12 text-center">
          <animated.h2 className="text-main cs-position font-weight-bold" style={titleAnimation}>
            {title}
          </animated.h2>
          <animated.h1 className="font-weight-bold cs-company section-title" style={subtitleAnimation}>
            {subtitle}
          </animated.h1>
          <animated.p className={`pt-4 pt-lg-5 col-md-8 mx-auto font-weight-bolder cs-brief ${descriptionClassName}`} style={descriptionAnimation}>
            {description}
          </animated.p>
        </div>
      </div>
    </header>
  );
};

export default AnimatedHeader;
