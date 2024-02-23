import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarMenu.css';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define spring animation for the menu width and right position
  const menuAnimation = useSpring({
    width: isOpen ? '250px' : '0px',
    right: isOpen ? '0px' : '-250px',
  });

  // Function to toggle the menu open/close state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Animated sidebar menu */}
      <animated.div className="sidenav" style={menuAnimation}>
        <a href="#" className="closebtn" onClick={handleToggle}>
          <FontAwesomeIcon icon={faTimes} />
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </animated.div>

      {/* Button to toggle the menu */}
      <button className="openbtn" onClick={handleToggle}>Open</button>

      {/* Main content */}
      <div id="main">
        {/* Add your main content here */}
      </div>
    </>
  );
};

export default SidebarMenu;
