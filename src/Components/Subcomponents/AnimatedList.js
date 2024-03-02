import React, { useRef } from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedList = ({ items, fontSize, iconClass, listClasses }) => {
  const { ref, inView } = useInView({ triggerOnce: false, rootMargin: '-50px 0px' });
  const listRef = useRef();
  const itemsLength = items.length;

  const trail = useTrail(itemsLength, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-20px)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <ul ref={ref} className={`list-group list-group-flush section-list cs-section-list-group ${listClasses}`}>
      {trail.map((style, index) => (
        <animated.li key={index} style={{ ...style, fontSize }} className="list-group-item cs-list-item font-weight-bolder bg-none">
          {items[index].icon && React.createElement(items[index].icon, { className: `mr-2 mb-1 ${iconClass}` })}
          {items[index].text}
        </animated.li>
      ))}
    </ul>
  );
};

export default AnimatedList;
