import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedTitleParagraph = ({ title, paragraph }) => {
  // UseInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.6, // Trigger animation when at least 50% of the component is in view
  });

  // Animation config for the title
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-50px)' },
  });

  // Animation config for the paragraph
  const paragraphAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
  });

  return (
    <div ref={ref}>
      <animated.h2 className="py-2 font-weight-bold section-title" style={titleAnimation}>{title}</animated.h2>
      <animated.p className="font-weight-bolder section-p" style={paragraphAnimation}>{paragraph}</animated.p>
    </div>
  );
};

export default AnimatedTitleParagraph;
