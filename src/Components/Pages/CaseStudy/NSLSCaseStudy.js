import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


//CSS Imports
import '../../../App.css';

//Image Imports
import NSLSBanner from "../../../assets/images/Companies/Nsls-Banner-2.png";

import frustrated from "../../../assets/images/Cases/nsls/frustrated.png";

import discovery from "../../../assets/images/Cases/nsls/registratiuon-early-discovery.png";

import wireframe from "../../../assets/images/Cases/nsls/wireframe.png";

import dashboard from "../../../assets/images/Cases/nsls/nsls-dash.png";

import appImages from "../../../assets/images/Cases/nsls/app-images.png";

import courses from "../../../assets/images/Cases/nsls/courses.png";

import courseProgress from "../../../assets/images/Cases/nsls/course-progress.png";

import event from "../../../assets/images/Cases/nsls/event.png";


import feed from "../../../assets/images/Cases/nsls/feed.png";



//Icons Imports
import { FiArrowRight } from 'react-icons/fi';
import { FiAlertCircle } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

//Animation Imports
import AnimatedList from '../../Subcomponents/AnimatedList';
import AnimatedHeader from '../../Subcomponents/AnimatedHeader';
import AnimatedTitleParagraph from '../../Subcomponents/AnimatedTitleParagraph';
import AnimatedImageGrow from '../../Subcomponents/AnimatedImageGrow';
import AnimatedImageColumn from '../../Subcomponents/AnimatedImageColumn';
import AnimatedNumber from '../../Subcomponents/AnimatedNumber';

//Contact Import
import ContactForm from "../../ContactForm";

function NSLSCase(props) {
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
        { text: 'User retention challenges', icon: FiAlertCircle },
        { text: 'Missed cross-promotion opportunities', icon: FiAlertCircle },
        { text: 'Increased development complexity', icon: FiAlertCircle },
        { text: 'Negative impact on user perception', icon: FiAlertCircle },
        { text: 'Overly complicated registration process', icon: FiAlertCircle },
        { text: 'Lack of user location awareness', icon: FiAlertCircle },
        { text: 'Lack of user communication hub', icon: FiAlertCircle }
    ];

    // Solutions for Unified Communication Channels
    const communicationSolutions = [
        { text: "Utilize in house app Ignite integration to ensure seamless voice and video communication during NSLS's exhilarating workshops and seminars.", icon: FiCheckCircle },
        { text: "Spice up the learning experience with asynchronous communication features, turning course materials into lively discussion hubs.", icon: FiCheckCircle },
        { text: "Stir up the digital chatter by expanding communication channels with Ignite, where NSLS members can share ideas and forge lasting connections.", icon: FiCheckCircle }
    ];

    // Solutions for Engaging Virtual Environments
    const virtualEnvironmentSolutions = [
        { text: "Craft visually stunning virtual spaces that whisk NSLS members away to the familiar warmth of physical campuses, banishing feelings of isolation and loneliness.", icon: FiCheckCircle },
        { text: "Keep the NSLS community buzzing with activity by ensuring a constant virtual presence for all members, sparking impromptu conversations and collaborations on the Ignite app.", icon: FiCheckCircle },
        { text: "Let NSLS members showcase their unique flair with customizable avatars and profiles, turning every interaction into a chance to express their personalities.", icon: FiCheckCircle }
    ];

    // Solutions for Cohesive Team Collaboration
    const teamCollaborationSolutions = [
        { text: "Get the NSLS team spirit soaring with virtual meetups, networking events, and group discussions in designated virtual rooms that feel like home.", icon: FiCheckCircle },
        { text: "Design specialized rooms for specific meetings, from lively leadership seminars to focused group projects, keeping teamwork flowing and spirits high.", icon: FiCheckCircle },
        { text: "Infuse some fun into team bonding with interactive features and team-building exercises, turning collaboration into an adventure NSLS members can't resist.", icon: FiCheckCircle }
    ];

    // Solutions for Streamlined Resource Access
    const resourceAccessSolutions = [
        { text: "Make resource management a breeze with a robust system that puts educational materials, leadership resources, and career tools just a click away.", icon: FiCheckCircle },
        { text: "Turbocharge productivity with integrations with seamless user experiences across all NSLS applications from courses to community.", icon: FiCheckCircle },
        { text: "Create a streamlined process for onboarding new students to make that pesky registration process a thing of the past.", icon: FiCheckCircle }
    ];

    // Solutions for Streamlined Resource Access
    const designList = [
        { text: "Crafted, fine-tuned, and polished the NSLS design system for maximum reusability." },
        { text: "Revamped design processes for lightning-fast turnarounds, ensuring speedy solutions hit the market." },
        { text: "Introduced fresh user pathways, smoothing out rough edges and boosting satisfaction for better user loyalty." }
    ];

    const images = [
        { src: courses, alt: 'Courses', className: 'img-fluid w-100 rounded shadow border' },
        { src: courseProgress, alt: 'Course Progress', className: 'img-fluid w-100 rounded shadow border' },
        { src: feed, alt: 'Feed', className: 'img-fluid w-100 rounded shadow border' },
        { src: event, alt: 'Event', className: 'img-fluid w-100 rounded shadow border' }
    ];





    return (
        <div className="container-fluid px-0 bg-white ">

            <div className="bg-nsls d-flex align-items-center justify-content-center text-white py-5">
                <AnimatedHeader
                    
                    subtitle="National Society of Leadership and Success"
                    description="In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision."
                    descriptionClassName="text-white"
                />
            </div>
           





            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1 py-3 ">
      

                        <AnimatedImageGrow
                            src={frustrated}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
     
                        <AnimatedTitleParagraph
                            title="The Problem"
                            paragraph=" NSLS faced a challenge when they opted for separate applications without ensuring a cohesive design across them. This fragmented approach led to inconsistency in user experience and brand representation, potentially causing confusion among users. By lacking a unified design language, NSLS risked diluting their brand identity and weakening the overall impact of their educational offerings on leadership."
                        />
                        <AnimatedList items={problemItems} iconClass="text-danger" />
                    </div>
                </div>

            </section>


            <section className="container section-spacing px-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Discovery</h3>
                            <FiArrowRight size={26} className="mt-3 text-main" />
                        </div>

                        <p className=" font-weight-bolder  section-p cs-section-p">
                            During the discovery phase, I delved deep into unraveling the mysteries behind NSLS's design mishaps and user experience hiccups across its myriad applications. Collaborating closely with the team, I led the charge in untangling fragmentation woes, weaving together a cohesive design tapestry for a smoother user journey. With clear objectives and measurable outcomes in mind, I charted a strategic course towards implementing solutions that not only spruced up the brand's identity but also captivated users, making their experience truly unforgettable.
                        </p>

                    </div>

                    <div className="col-md-4 ">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Research</h3>
                  
                        </div>
                        <p className=" font-weight-bolder  section-p cs-section-p">
                            During the research phase, I embarked on a journey through market analysis, user interviews, and competitor snooping to uncover NSLS's struggle with scattered design across applications. Armed with user quirks and behavior insights, I pinpointed specific pain points and areas ripe for a design makeover. Through rounds of playful testing and validation, I polished these insights, ensuring our design revamp not only met user needs but also injected some excitement into NSLS's mission.
                        </p>

                    </div>

                    <div className="col-md-4 d-flex justify-content-end align-items-center  py-3">
                        <animated.img
                            style={bannerAnimation}
                            src={discovery}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow cs-image"
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
                            <h3 className="py-2 font-weight-bold text-main">Strategy &amp; Design</h3>
                            <h2 className="py-2 font-weight-bold section-title cs-section-title mb-4">Revamping NSLS's Interface and User Experience</h2>
                            <p className=" font-weight-bolder  section-p cs-section-p">


                                Tackling NSLS's hurdles with fragmented applications and inconsistent design, I spearheaded a thorough audit of their existing platforms. This entailed diving into user feedback, uncovering pain points, and scrutinizing design discrepancies. Teaming up closely with the product squad, I took the reins in crafting a unified design system that embraced brand guidelines, UI components, and interaction patterns. <br /> <br />
                                Executing this cohesive design approach entailed fashioning reusable components and templates to guarantee uniformity across all NSLS platforms. Furthermore, I placed a premium on user testing and feedback loops, constantly fine-tuning design solutions to precisely cater to user needs and harmonize with NSLS's overarching objectives.
                            </p>

                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center order-1 order-md-2 py-3">

                            <AnimatedImageGrow
                                src={wireframe}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-12 order-3 py-3 my-md-5">
                            <AnimatedImageGrow
                                src={dashboard}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
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
                                NSLS's journey towards cohesive digital experiences is an adventure in itself! By embracing tailored solutions, I transformed its challenges into opportunities for growth, connection, and exploration within its vibrant digital ecosystem.
                            </p>
                        </div>


                    </div>
                </div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Unified Communication Channels</h5>
                            <AnimatedList items={communicationSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Engaging Virtual Environments</h5>
                            <AnimatedList items={virtualEnvironmentSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Cohesive Team Collaboration</h5>
                            <AnimatedList items={teamCollaborationSolutions} fontSize="0.85rem" iconClass="text-success" />
                        </div>
                        <div className="col-md-3 my-5">
                            <h5 className='font-weight-bolder'>Streamlined Resource Access</h5>
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
                            title="Cohesive Design"
                            paragraph="
                            At NSLS, my design prowess orchestrated a symphony of cohesion, ensuring every pixel played harmoniously across platforms. With meticulous attention to detail and a touch of flair, I crafted a unified design ecosystem that not only fortified brand integrity but also amplified user engagement. Through thoughtful execution and strategic alignment, my solution transformed NSLS into a new and improved platform, where every interaction sparkled with clarity and purpose."
                        />
                        <AnimatedList items={designList} fontSize="0.85rem" />
                    </div>
            
                    <AnimatedImageColumn images={images} />
                </div>

            </section>

            <section className="container section-spacing text-center">
  

                <AnimatedTitleParagraph title="Testing Results" paragraph="
After meticulous implementation of the design changes through numerous iterative cycles, our efforts yielded profound insights. While there were some challenges in timelines we effictively implemented all changes. Here's what we uncovered:" />

                <div className="row py-md-4">
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={87} text={"Increase in user retention"}/>
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={34} text={"Decrease in registration process"} />
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={67} text={"Increase in overall user sentiment"} />
                    </div>
                    <div className="col-md-3 col-6">
                        <AnimatedNumber number={93} text={"Increase in user location awareness"}/>
                    </div>
                </div>
            </section>
            <section className=" container-fluid section-spacing bg-light-main text-white">
                <ContactForm heading="More questions? Let's chat." />

            </section>
        </div>
    );
}

export default NSLSCase;


