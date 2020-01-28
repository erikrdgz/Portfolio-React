import React from 'react';
import '../../App.css';
import Img from 'react-cool-img';
import UI_001 from "../../assets/images/Mockups/ui-001.jpg";
import UI_002 from "../../assets/images/Mockups/ui-002.jpg";
import UI_003 from "../../assets/images/Mockups/ui-003.jpg";
import UI_004 from "../../assets/images/Mockups/ui-004.jpg";
import UI_005 from "../../assets/images/Mockups/ui-005.jpg";
import UI_006 from "../../assets/images/Mockups/ui-006.jpg";


function UIDesigns(props){
    return(
    <div className="grid-container-gallery text-white">
      <div className="page-title-gallery">
        <h1>UI Designs</h1>
        <p>Created using Sketch on mac OS. I try to create a new UI daily to keep my skills up to date.</p>
      </div>
      <div className="img-container img-1">
      <Img
          className="project-img"
          src={UI_001} 
          style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
      />
      </div>
      <div className="img-container img-2">
        <Img
            src={UI_002}
            className="project-img"
            style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="img-container img-3">
        <Img
            className="project-img"
            src={UI_003} 
            style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="img-container img-4">
        <Img
            className="project-img"
            src={UI_004} 
            style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="img-container img-5">
        <Img
            className="project-img"
            src={UI_005} 
            style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
        />
      </div>
      <div className="img-container img-6">
        <Img
            className="project-img"
            src={UI_006} 
            style={{ backgroundColor: '#121212', width: '100%', height: 'auto' }}
        />
      </div>
      
    </div>
    )
}

export default UIDesigns;