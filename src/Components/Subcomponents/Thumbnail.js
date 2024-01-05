import React from 'react'; 
import {Link} from 'react-router-dom'; 
import '../../App.css';
 
function Thumbnail(props) {

  const gradientStyle = {
    background: `linear-gradient(136deg, ${props.bgColor}, ${props.bgColor2})`,
  };

  return (
    <div className={`thumbnail d-flex justify-content-center align-items-center ${props.class} `} style={gradientStyle}>
      <Link to={props.link}>
          <div className="text-center contents">
            {props.image && <img src={props.image} className="position-absolute" alt="Thumbnail Image"/>}
            <div className="hidden-text">
              <h1 className="position-title font-weight-light">
                    {props.title}
              </h1>
              <h3 className="position-category font-weight-light">
                    {props.category}
              </h3>
            </div>
            
          </div>

        
      </Link>
    </div>
  );
}
 
export default Thumbnail;
