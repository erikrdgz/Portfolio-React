import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import PageFourLayout from '../Subcomponents/PageFourLayout';
import ADMProjectImage from '../../assets/images/Projects/adm-project-image.jpg';

function ADMProject(props) {
    return (
        <div>
            <PageFourLayout
                //Optional Class Name
                class="adm"

                //Breadcrumb
                breadcrumb="ADM Labs"

                //Project Image Source
                src={ADMProjectImage}
 
                //Text Block One - The Goal
                textBlockOne="ADM Labs needed a new Front End Developer &amp; UX Designer for their team to help them in updating their website and improving overall site performance. Their current website was a web app that was not complete and they wanted something new and more lively. Being a startup they needed a very quick turnaround and wanted the website to be able to scale. I was also tasked with optimizing back end operations as well as creating marketing and print collateral as well as supporting social media efforts."

                //Link CTA
                externalLink="https://adm-labs.com"

                //Text Block Two - The Conflict
                textBlockTwo="The biggest hurdles of working in most startups is the time to work ratio. There is always a huge workload and what seems to be never enough time to do it. Being in charge of branding and collateral also pushed me to learn marketing principles as well as showing me the many challenges it provides in creating a brand that stands out. Being a vertically integrated company the need for proper SEO was crucial in making a mark."

                //Text Block Three - The Resolution
                textBlockThree="I found time management to be instrumental in how I tackled a day at ADM Labs. I took time to set realistic deadlines and utilized time efficient methods at creating the collateral. I developed their new website as well as integrating Zoho CRM for lead generation. I ran the analytics of the site and consistently expanded on features. I assisted in streamlining backend production operations via WorkClout and provided architectural assistance to their team for our company's needs. "
            />
        </div>
    );
}

export default ADMProject;