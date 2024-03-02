import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AnimatedSection = ({ title, subtitle, summary, linkText, linkUrl, chips }) => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.6, // Trigger animation when 50% of the element is in viewport
  });

  const trailLength = chips.length + 4; // Adjust the length of trail array
  const trail = useTrail(trailLength, {
    from: { opacity: 0, transform: isMobile ? 'translateX(0)' : 'translateX(-50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-50px)' },
    config: { tension: 100, friction: 20 },
    delay: inView ? 200 : 0, // Delay initial animation until element is in view
  });

  return (
    <div className="col-lg-6 p-md-4 d-flex justify-content-start align-items-center" ref={ref}>
      <div>
        <animated.h3 className="text-accent-2 project-position pb-2 pt-3" style={trail[0]}>{title}</animated.h3>
        <animated.h2 className="project-name pb-md-4" style={trail[1]}>{subtitle}</animated.h2>
        <animated.p className="summary pt-4" style={trail[2]}>{summary}</animated.p>
        <animated.a href={linkUrl} className="view-project-btn btn-main pl-0" style={trail[3]}>{linkText} <span><FontAwesomeIcon icon={faArrowRight} className="ml-3" /></span></animated.a>
        <div className="chip-section">
          {chips.map((chip, index) => (
            <animated.p key={index} className="chip mr-2" style={trail[index + 4]}>{chip}</animated.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
