import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedFloatUp = ({ children, className }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <animated.div ref={elementRef} style={animationProps} className={className}>
      {children}
    </animated.div>
  );
};

export default AnimatedFloatUp;
