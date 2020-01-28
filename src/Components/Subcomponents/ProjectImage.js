import React from 'react'; 

import '../../App.css';
 
function ProjectImage(props) {
  return (
    <div className={"img-container " + props.class}>
      <img src={props.src} className="project-img"/>
    </div>
  );
}
 
export default ProjectImage;