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
                textBlockOne="Agroya approached me with their vision of their website and needed guidance on which platform and technologies to use. They needed a hemp agricultural website to pitch to investors and begin their web presence and brand journey. I knew I needed to make a website that was friendly in layout to an older demographic and needed farm imagery to maintain the agricultural brand image."

                //Link CTA
                externalLink="https://agroya.com"

                //Text Block Two - The Conflict
                textBlockTwo="The main issues I had run into with Agroya were primarily around the visual hierarchy and layout. Since there was a lot of copy and backstory I had to figure out a way to relay the information while still maintaining user retention. Text heavy websites can be tricky since users are much more receptive to imagery and the attention span of the average user diminishes very quickly."

                //Text Block Three - The Resolution
                textBlockThree="I went with a more traditional layout for this website as I wanted to maintain my ability to represent the copy but in 'chewable' chunks for the user. I knew the importance of imagery so I applied a lot of farming pictures and hemp related images. Having a box layout allowed me to also provide the site owner with workable area that would allow them to update the copy with minimal layout requirements."
            />
        </div>
    );
}

export default AgroyaProject;