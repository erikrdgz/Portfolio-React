import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function PageFourLayout(props) {
    
    return (
        <div className={"grid-container-project " + props.class}>
            <div className="div-1 text-block">
                
                <h1 className="my-2">{props.title}</h1>
                <h2>The Goal</h2>
                <div className="blue-accent-box"></div>
                <p className="text-justify">{props.textBlockOne}</p>
                <a href={props.externalLink} className="btn-main">
                    Visit Now
                </a>
            </div>
            <div className="div-2 p-2">
                <div className="image-block">
                    <img src={props.src} className="img-fluid interior-project-img" />
                </div>
            </div>
            <div className="div-3 text-block">
                <h2>The Conflict</h2>
                <div className="blue-accent-box"></div>
                <p className="text-justify">{props.textBlockTwo}</p>
            </div>
            <div className="div-4 text-block">
                <h2>The Resolution</h2>
                <div className="blue-accent-box"></div>
                <p className="text-justify">{props.textBlockThree}</p>
                <hr></hr>
                <p>
                    <strong>Projects :</strong>
                    <Link to="/projects/adm-labs" className="breadcrumb text-main text-dec-none">
                        ADM Labs
                    </Link>
                    <Link to="/projects/agroya" className="breadcrumb text-main text-dec-none">
                        Agroya
                    </Link>
                    <Link to="/projects/leela-body-care" className="breadcrumb text-main text-dec-none">
                        L'eela Body Care
                    </Link>
                  
                </p>
                
            </div>
        </div>
    )
}

export default PageFourLayout;