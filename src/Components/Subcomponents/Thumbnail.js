import React from 'react'; 
import {Link} from 'react-router-dom'; 
import '../../App.css';
 
function Thumbnail(props) {
  return (
    <div className={"thumbnail " + props.class}>
      <Link to={props.link}>
        <div className="thumbnail-image">
          <img src={props.image} alt="Thumbnail Image"/>
          <div className="overlay text-center">
            <div>
            <h1 className="thumbnail-title">
                {props.title}
            </h1>
            <h3 className="thumbnail-category">
                {props.category}
            </h3>
            </div> 
        </div> 
        </div>
        
      </Link>
    </div>
  );
}
 
export default Thumbnail;