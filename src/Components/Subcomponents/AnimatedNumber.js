import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ number }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const numberAnimation = useSpring({
    from: { number: 0 },
    to: { number: inView ? number : 0 },
    delay: 500, // Adjust delay for number animation
  });

  const paragraphAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 800, // Adjust delay for paragraph animation
  });

  return (
    <div ref={ref}>
      <animated.h3 className="text-main font-weight-bold">{numberAnimation.number.interpolate(value => `${value.toFixed()}%`)}</animated.h3>
      <animated.p style={paragraphAnimation}>Some text underneath</animated.p>
    </div>
  );
};

export default AnimatedNumber;
