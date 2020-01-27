import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PageFourLayout from './PageFourLayout';
import AgroyaProjectImage from './assets/images/Projects/agroya-project-image.jpg';

function AgroyaProject(props) {
    return (
        <div>
            <PageFourLayout
                //Optional Class Name
                class="agroya"

                //Breadcrumb
                breadcrumb="Agroya"

                //Project Image Source
                src={AgroyaProjectImage}
 
                //Text Block One - The Goal
                textBlockOne="Irure laborum nulla nostrud magna aliquip est pariatur nulla nisi do sunt nulla ullamco eu. Et cupidatat qui voluptate sit voluptate ipsum elit exercitation enim. Esse ex elit ad amet. Cupidatat tempor consectetur irure dolor adipisicing enim. Id occaecat consectetur consectetur nisi. Eu velit eiusmod minim magna deserunt nisi enim in id magna. Et excepteur aute est do aliquip voluptate consectetur duis."

                //Link CTA
                externalLink="https://agroya.com"

                //Text Block Two - The Conflict
                textBlockTwo="Irure laborum nulla nostrud magna aliquip est pariatur nulla nisi do sunt nulla ullamco eu. Et cupidatat qui voluptate sit voluptate ipsum elit exercitation enim. Esse ex elit ad amet. Cupidatat tempor consectetur irure dolor adipisicing enim. Id occaecat consectetur consectetur nisi. Eu velit eiusmod minim magna deserunt nisi enim in id magna. Et excepteur aute est do aliquip voluptate consectetur duis."

                //Text Block Three - The Resolution
                textBlockThree="lIrure laborum nulla nostrud magna aliquip est pariatur nulla nisi do sunt nulla ullamco eu. Et cupidatat qui voluptate sit voluptate ipsum elit exercitation enim. Esse ex elit ad amet. Cupidatat tempor consectetur irure dolor adipisicing enim. Id occaecat consectetur consectetur nisi. Eu velit eiusmod minim magna deserunt nisi enim in id magna. Et excepteur aute est do aliquip voluptate consectetur duis."
            />
        </div>
    );
}

export default AgroyaProject;