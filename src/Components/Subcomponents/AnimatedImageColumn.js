import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedImageColumn = ({ images }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const trail = useTrail(images.length, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0.7, transform: inView ? 'translateY(0)' : 'translateY(50px)' },
    delay: 500 // Adjust delay between each image
  });

  return (
    <div className="col-12 row order-3" ref={ref}>
      {trail.map((style, index) => (
        <div key={index} className="col-md-3 my-3">
          <animated.img
            style={style}
            src={images[index].src}
            alt={images[index].alt}
            className={images[index].className}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedImageColumn;
