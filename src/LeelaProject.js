import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PageFourLayout from './PageFourLayout';
import LeelaProjectImage from './assets/images/Projects/leela-project-image.jpg';

function LeelaProject(props) {
    return (
        <div>
            <PageFourLayout
                //Optional Class Name
                class="leela"

                //Breadcrumb
                breadcrumb="L'eela Body Care"

                //Project Image Source
                src={LeelaProjectImage}

                //Text Block One - The Goal
                textBlockOne="L'eela needed a website design that emphasizes the luxury of top quality beauty products. When the project began, L'eela had mainly word of mouth clients but no real centralized location for their client to shop the products. I stepped in and created a solution to this problem by leading the design and development efforts by establishing their web presence, and ensuring a successful platform handoff for the founders to run their day to day business operations."

                //Link CTA
                externalLink="https://leelacbdbodycare.com"

                //Text Block Two -  The Conflict
                textBlockTwo="As many emerging industry entrepeneurs will tell you there are some hiccups running a business. One of the hiccups I ran across with L'eela was the payment platform system. What started as a WordPress website quickly needed to turn into a BigCommerce storefront due to payment processing of credit and debit cards for CBD. They had already been denied by one payment processesor and it seemed bleak in terms of finding a solution and we needed to start looking at other e-commerce platforms."
 
                //Text Block Three - The Resolution
                textBlockThree="We decided to scratch the WordPress site for the BigCommerce platform since we saw their success with CBD stores and payment processing. They offered a unique strategy with upcoming CBD brands and we decided this was the best overall solution. I took care of all custom styling and development of the new BigCommerce store all while leveraging their intuitive themes. I am proud to say L'eela is up and running and has a smooth backend operation to compliment their newfound web presence."
            />
        </div>
    );
}

export default LeelaProject;