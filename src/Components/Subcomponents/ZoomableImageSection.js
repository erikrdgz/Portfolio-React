import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import CustomZoomButtons from "../Subcomponents/CustomZoomButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ZoomableImageSection = ({ imageSrc, altText, description, customStyles  }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = (zoomState) => {
        setIsZoomed(zoomState === 'zoom-in');
    };

    return (
        <div className="col-md-12 py-md-5">
            {/* <h3 className="mb-md-5">{description}</h3> */}
            <Zoom
                a11yNameButtonZoom="Zoom In"
                a11yNameButtonUnzoom="Zoom Out"
                IconZoom={({ isZoomed }) => (
                    <FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />
                )}
                IconUnzoom={({ isZoomed }) => (
                    <FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />
                )}
                zoomMargin={16}
                wrapElement="div"
                zoomContent={({ img, buttonUnzoom }) => (
                    <div className={`custom-zoom-wrapper ${isZoomed ? 'is-zoomed' : ''}`}>
                        {img}
                        <button onClick={() => handleZoomChange('zoom-in')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                            onClick={() => {
                                handleZoomChange('zoom-out');
                                buttonUnzoom.props.onClick(); // Manually trigger the unzoom action
                            }}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                )}
            >
                <img src={imageSrc} alt={altText}  style={customStyles} className="img-fluid rounded shadow" />
            </Zoom>
        </div>
    );
};

export default ZoomableImageSection;
