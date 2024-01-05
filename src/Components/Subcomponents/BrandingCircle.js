import React from 'react'; 

import '../../App.css';
 
function BrandingCircle(props) {
  return (
    <div className={"branding-circle mr-1 my-1 " + props.class} style={{background: props.bg}}>
      
    </div>
  );
}
 
export default BrandingCircle;