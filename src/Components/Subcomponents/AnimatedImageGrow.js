import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ src, alt, className }) => {
  // UseInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.6, // Trigger animation when at least 50% of the component is in view
  });

  // Animation config for the image
  const imageAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: inView ? 'scale(1)' : 'scale(0)' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <animated.img
      ref={ref}
      style={imageAnimation}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default AnimatedImage;
