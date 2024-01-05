import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const CustomZoomButtons = ({ onZoomIn, onZoomOut }) => (
  <div className="custom-zoom-buttons">
    {/* Your custom zoom-in button */}
    <button className="custom-zoom-button" onClick={onZoomIn}>
      <FontAwesomeIcon icon={faMinusCircle} />
    </button>
    {/* Your custom zoom-out button */}
    <button className="custom-zoom-button" onClick={onZoomOut}>
      <FontAwesomeIcon icon={faMinusCircle} />
    </button>
  </div>
);

export default CustomZoomButtons;