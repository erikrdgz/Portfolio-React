import React from 'react'; 
import {Link} from 'react-router-dom'; 
import '../../App.css';
 
function Button(props) {
  return (
    <div className={"btn-main " + props.class}>
      <Link to={props.link}>
          {props.cta}
      </Link>
    </div>
  );
}
 
export default Button;