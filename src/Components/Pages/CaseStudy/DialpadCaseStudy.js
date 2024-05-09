import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


//CSS Imports
import '../../../App.css';

//Image Imports
import NSLSBanner from "../../../assets/images/Companies/Nsls-Banner-2.png";

import frustrated from "../../../assets/images/Cases/nsls/frustrated.png";

import discovery from "../../../assets/images/Cases/dialpad/dp-example.png";

import wireframe from "../../../assets/images/Cases/nsls/wireframe.png";

import dashboard from "../../../assets/images/Cases/nsls/nsls-dash.png";

import appImages from "../../../assets/images/Cases/dialpad/dp-chat-bot.png";

import card1 from "../../../assets/images/Cases/dialpad/dp-card-1.png";

import card2 from "../../../assets/images/Cases/dialpad/dp-card-2.png";

import card3 from "../../../assets/images/Cases/dialpad/dp-card-3.png";


import card4 from "../../../assets/images/Cases/dialpad/dp-card-4.png";

import koopidToDialpad from "../../../assets/images/Cases/dialpad/kp-to-dialpad.mp4";

import suggestions from "../../../assets/images/Cases/dialpad/dialpad-suggestions.png";

import designSystem from "../../../assets/images/Cases/dialpad/design-system-example.png";

import cohesive from "../../../assets/images/Cases/dialpad/dp-cohesive-design.png";



//Icons Imports
import { FiArrowRight } from 'react-icons/fi';
import { FiAlertCircle } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";
import { FiWatch } from "react-icons/fi";
import { FiDroplet } from "react-icons/fi";

//Animation Imports
import AnimatedList from '../../Subcomponents/AnimatedList';
import AnimatedHeader from '../../Subcomponents/AnimatedHeader';
import AnimatedTitleParagraph from '../../Subcomponents/AnimatedTitleParagraph';
import AnimatedImageGrow from '../../Subcomponents/AnimatedImageGrow';
import AnimatedImageColumn from '../../Subcomponents/AnimatedImageColumn';
import AnimatedNumber from '../../Subcomponents/AnimatedNumber';

//Contact Import
import ContactForm from "../../ContactForm";

function DialpadCase(props) {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = (zoomState) => {
        setIsZoomed(zoomState === 'zoom-in');
    };

    const bannerAnimation = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
        config: { tension: 100, friction: 10 }, // Custom stiffness and damping values
    });

    const problemItems = [
        { text: 'Identification of compatible components', icon: FiAlertCircle },
        { text: 'Overhaul of CSS and overall look of Koopid products', icon: FiDroplet },
        { text: 'Design system integration', icon: FiGitMerge },
        { text: 'Cohesive code handoff', icon: FiCode },
        { text: 'New design team collaboration', icon: FiUsers },
        { text: 'Expanded engineering team', icon: FiUsers },
        { text: 'Quick time to market deadline', icon: FiWatch },
      
    ];

    // Solutions for Unified Communication Channels
    const communicationSolutions = [
        { text: "Implemented a cohesive design system that harmonized the visual identity of Dialpad and Koopid, ensuring a seamless transition for users.", icon: FiCheckCircle },
        { text: "Standardized design elements and patterns across all platforms, enhancing consistency and brand recognition.", icon: FiCheckCircle },
        { text: "Collaborated closely with design teams to document guidelines and best practices, facilitating efficient design processes and fostering collaboration.", icon: FiCheckCircle }
    ];

    // Solutions for Engaging Virtual Environments
    const virtualEnvironmentSolutions = [
        { text: "Developed a library of reusable UI components tailored to Dialpad's specific needs, streamlining the development process and reducing time-to-market.", icon: FiCheckCircle },
        { text: "Leveraged component-based architecture to promote scalability and maintainability, enabling rapid iteration and future enhancements.", icon: FiCheckCircle },
        { text: "Conducted thorough usability testing to validate component usability and accessibility, ensuring a delightful user experience across all touchpoints.", icon: FiCheckCircle }
    ];

    // Solutions for Cohesive Team Collaboration
    const teamCollaborationSolutions = [
        { text: "Fostered cross-functional collaboration between design, development, and project management teams, ensuring alignment on project goals and timelines.", icon: FiCheckCircle },
        { text: "Engaged in regular communication and feedback sessions to address technical constraints and design considerations, facilitating efficient project execution.", icon: FiCheckCircle },
        { text: "Implemented agile methodologies such as Scrum and Kanban to prioritize tasks, track progress, and adapt to evolving requirements in real-time.", icon: FiCheckCircle }
    ];

    // Solutions for Streamlined Resource Access
    const resourceAccessSolutions = [
        { text: "Analyzed user feedback and behavior data to identify pain points and opportunities for improvement, informing strategic decision-making.", icon: FiCheckCircle },
        { text: "Implemented targeted user retention strategies, including personalized onboarding experiences and proactive support initiatives, to increase user engagement and satisfaction.", icon: FiCheckCircle },
        { text: "Monitored key performance indicators (KPIs) such as churn rate and user satisfaction scores, iterating on strategies based on data-driven insights to optimize retention efforts.", icon: FiCheckCircle }
    ];

    // Solutions for Streamlined Resource Access
    const designList = [
        { text: "Facilitated design meetings for furthering the efforts with the CCAS team" },
        { text: "Contributed to other departments design efforts to ensure a well rounded design system" },
        { text: "Introduced a completely new feature that allowed users to have more control over some advanced A.I. features" }
    ];

    const images = [
        { src: card1, alt: 'feature 1', className: 'img-fluid w-100 rounded shadow border' },
        { src: card2, alt: 'feature 2', className: 'img-fluid w-100 rounded shadow border' },
        { src: card3, alt: 'feature 3', className: 'img-fluid w-100 rounded shadow border' },
        { src: card4, alt: 'feature 4', className: 'img-fluid w-100 rounded shadow border' }
    ];





    return (
        <div className="container-fluid px-0 bg-white ">

            <div className="bg-dialpad d-flex align-items-center justify-content-center text-white py-5">
                <AnimatedHeader
                    
                    subtitle="Dialpad"
                    description="In my role as a Product Designer at Dialpad, I embarked on an exhilarating journey of integrating an innovative AI product that originated from Koopid AI into Dialpad's extensive suite of telecommunications solutions. This endeavor presented an exciting opportunity to bridge cutting-edge artificial intelligence technologies with Dialpad's robust platform, enriching our offerings and enhancing the overall user experience."
                    descriptionClassName="text-white"
                />
            </div>
           





            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1 py-3 ">
                        <div className="video-container embed-responsive embed-responsive-4by3">
                            <video className="video embed-responsive-item" muted autoPlay  width="3840" height="2160">
                                    <source src={koopidToDialpad} type="video/webm" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
     
                        <AnimatedTitleParagraph
                            title="Key Player in Implementing Koopid AI Integration at Dialpad"
                            paragraph="The integration of Koopid AI into Dialpad presented a unique challenge: adapting a standalone product to seamlessly align with Dialpad's distinctive branding and user experience. This involved a comprehensive redesign process, where I meticulously reimagined the product interface, incorporating Dialpad's styling and design principles. From harmonizing visual elements to refining user interactions, every aspect of the redesign was guided by the goal of ensuring a cohesive and intuitive experience across Dialpad's telecommunication products."
                        />
                        <AnimatedList items={problemItems} iconClass="text-dark" />
                    </div>
                </div>

            </section>


            <section className="container section-spacing px-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Integration Process</h3>
                            <FiArrowRight size={26} className="mt-3 text-main d-none d-md-block" />
                        </div>

                        <p className=" font-weight-bolder  section-p cs-section-p">
                            Faced with two different design systems, the biggest hurdle was seeing what was going to integrate smoothly and what needed a redesign, overhaul, or ommision from the process. This meant meticulously looking over all icons, components, fonts, and other design items. Being the only Lead Designer and Developer for Koopid created a bit of pressure to oversee this entire integration process. Staying organized in my tenure at Koopid expedited this process which helped us achieve our desired launch date. 
                        </p>

                    </div>

                    <div className="col-md-4 ">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Design System</h3>
                  
                        </div>
                        <p className=" font-weight-bolder  section-p cs-section-p">
                            Once the integration process was completed my duties shifted to creating new components for the Dialpad design system as well as overseeing new features added to our now cohesive agent desktop. These new feature additions created amazing opportunities to have conference calls able to create tasks, notes, and even A.I. suggestions on next steps for an ongoing conversation.
                        </p>

                    </div>

                    <div className="col-md-4 d-flex justify-content-end align-items-center  py-3">
                        <animated.img
                            style={bannerAnimation}
                            src={discovery}
                            alt="Banner"
                            className="img-fluid w-100  cs-image"
                        />
                    </div>

                </div>


            </section>
            <div className="col-12 bg -white d-flex justify-content-center py-3">
                <div>
                    <FiChevronDown size={36} className='text-main' />
                </div>

            </div>

            <section className="section-spacing ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <h3 className="py-2 font-weight-bold text-main">Talking To Customers</h3>
                            <h2 className="py-2 font-weight-bold section-title cs-section-title mb-4">Pain point identification and feature creation</h2>
                            <p className=" font-weight-bolder  section-p cs-section-p">
                                Speaking with agents and customers alike allowed me to create user specific features that resolved many pain points our users had. We used severak KPI's such as user retention, time on task, sentiment analysis and more to better understand our users and collaborate with project managers to prioritize features.

                                <br /> <br />
                                Our agent desktop was the most affected by these feature requests. We included several components that came from Koopid and succesfully implemented them into Dialpad's Communication Hub. Several of these components needed to be tweaked to better fit within the design model, this allowed several opportunities to use our user research to enhamce these already robust components but with the end user benefits of both companies.

                            </p>

                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center order-1 order-md-2 py-3">

                            <AnimatedImageGrow
                                src={cohesive}
                                alt="Banner"
                                className="img-fluid w-100 "
                            />
                        </div>
                        <div className="col-12 order-3 py-3 my-md-5">
                            <AnimatedImageGrow
                                src={suggestions}
                                alt="Banner"
                                className="img-fluid w-100  "
                            />
                        </div>
                    </div>
                </div>


            </section>

            <section className="section-spacing bg-light-main text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-md-center text-left">
                            <h2 className="py-2 font-weight-bold section-title cs-section-title mb-4">The Solution</h2>
                            <p className=" font-weight-bolder  section-p cs-section-p">
                            Enhancing User Experience and Operational Efficiency
                            </p>
                        </div>


                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Updated Design Systems</h5>
                            <AnimatedList items={communicationSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Creation of Reusable Components</h5>
                            <AnimatedList items={virtualEnvironmentSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Collaboration with Developers and Project Managers</h5>
                            <AnimatedList items={teamCollaborationSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Improved User Retention Strategies</h5>
                            <AnimatedList items={resourceAccessSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                    </div>
                </div>


            </section>


            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end align-items-center order-2 order-md-1 py-3">
         
                        <AnimatedImageGrow
                            src={appImages}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
         
                        <AnimatedTitleParagraph
                            title="Design Rollout and Testing"
                            paragraph="
                            My role at Dialpad involved leading the rollout of design updates and enhancements, ensuring smooth transitions and minimal disruption to user workflows. From initial concept to final implementation, I coordinated with stakeholders to define requirements, develop prototypes, and conduct rigorous testing. Through user testing sessions and A/B testing initiatives, I validated design decisions and fine-tuned user interfaces for optimal usability and satisfaction. By meticulously planning and executing design rollouts, I successfully delivered impactful improvements that resonated with Dialpad's user base and strengthened brand loyalty."
                        />
                        <AnimatedList items={designList} fontSize="0.85rem" />
                    </div>
            
                    <AnimatedImageColumn images={images} />
                </div>

            </section>

            <section className="container section-spacing text-md-center text-left">
            <div className="col-12">

            <AnimatedTitleParagraph title="Testing Results" paragraph="
After meticulous implementation of the design changes through numerous iterative cycles, our efforts yielded profound insights. While there were some challenges in timelines we effictively implemented all changes. Here's what we uncovered:" />

                <div className="row py-md-4">
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={110} text={"Efficiency in time to market"}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={48.3} text={"Decrease in time on task"} />
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={32} text={"Increase in agent response time"} />
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={41} text={"Decrease in scope creep "}/>
                    </div>
                </div>
            </div>

            </section>
            <section className=" container-fluid section-spacing bg-light-main text-white">
                <ContactForm heading="More questions? Let's chat." />

            </section>
        </div>
    );
}

export default DialpadCase;


