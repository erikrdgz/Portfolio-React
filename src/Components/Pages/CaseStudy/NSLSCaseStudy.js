import React, { useState } from 'react';
import NSLSBanner from "../../../assets/images/Companies/Nsls-Banner-2.png";
import { FiArrowRight } from 'react-icons/fi';



import '../../../App.css';


import { useSpring, animated } from 'react-spring';
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
    return (
        <div className="container-fluid px-0">



            <header className="py-md-5 container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-main cs-position font-weight-bold">Senior Product Designer</h2>
                        <h1 className="font-weight-bold cs-company section-title">National Society of Leadership and Success</h1>
                        <p className="pt-4 pt-lg-5 col-md-8 mx-auto font-weight-bolder cs-brief">
                            In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                        </p>
                    </div>
                </div>
            </header>



            <section className='col-md-7 mx-auto'>
                <animated.img
                    style={bannerAnimation}
                    src={NSLSBanner}
                    alt="Banner"
                    className="img-fluid w-100 cs-big-image"
                />
            </section>



            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end align-items-center order-2 order-md-1 py-3 ">
                        <animated.img
                            style={bannerAnimation}
                            // src={NSLSBanner}
                            src="https://placehold.co/500x400"
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow cs-image"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <h2 className="py-2 font-weight-bold section-title cs-section-title">The Problem</h2>
                        <p className=" font-weight-bolder  section-p cs-section-p">
                        NSLS faced a challenge when they opted for separate applications without ensuring a cohesive design across them. This fragmented approach led to inconsistency in user experience and brand representation, potentially causing confusion among users. By lacking a unified design language, NSLS risked diluting their brand identity and weakening the overall impact of their educational offerings on leadership.
                        </p>
                        <ul className="list-group list-group-flush section-list cs-section-list-group">
                            <li className="list-group-item cs-list-item font-weight-bolder">User retention challenges</li>
                            <li className="list-group-item cs-list-item font-weight-bolder">Missed cross-promotion opportunities</li>
                            <li className="list-group-item cs-list-item font-weight-bolder">Increased development complexity</li>
                            <li className="list-group-item cs-list-item font-weight-bolder">Negative impact on user perception</li>
                        </ul>
                    </div>
                </div>

            </section>

            
            <section className="container-fluid section-spacing px-4">
                <div className="row">
                <div className="col-md-4">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Discovery</h3>
                            <FiArrowRight size={26} className="mt-3 text-main"/>
                        </div>
                        
                        <p className=" font-weight-bolder  section-p cs-section-p">
                        In the discovery process, I concentrated on uncovering the root causes of design inconsistencies and user experience gaps across NSLS applications. Through collaborative discussions, I prioritized resolving fragmentation issues, ensuring a unified design approach and seamless user journey. By defining clear objectives and measurable outcomes, I established a strategic roadmap for implementing cohesive solutions that enhance brand identity and user engagement.
                        </p>
                        
                    </div>
                    
                    <div className="col-md-4 ">
                        <div className="d-flex flex-row justify-content-between">
                            <h3 className="py-2 font-weight-bold ">Research</h3>
                            <FiArrowRight size={26} className="mt-3 text-main"/>
                        </div>
                        <p className=" font-weight-bolder  section-p cs-section-p">
                        In my research phase, I dive into market analysis, conduct user interviews, and evaluate competitors to understand NSLS's struggle with maintaining cohesive design across applications. Through thorough examination of user feedback and behavior patterns, I pinpoint specific pain points and areas needing improvement. Iterative testing and validation then refine these insights, ensuring proposed design enhancements effectively address user needs and align with NSLS's overarching objectives.
                        </p>
                        
                    </div>

                    <div className="col-md-4 d-flex justify-content-end align-items-center  py-3">
                        <animated.img
                            style={bannerAnimation}
                            src={NSLSBanner}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow cs-image"
                        />
                    </div>
                    
                </div>

            </section>

            <section className="section-spacing bg-light-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <h3 className="py-2 font-weight-bold ">Strategy &amp; Design</h3>
                            <h2 className="py-2 font-weight-bold section-title cs-section-title">Title</h2>
                            <p className=" font-weight-bolder  section-p cs-section-p">
                                In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. 
                            </p>
                            <ul className="list-group list-group-flush section-list cs-section-list-group">
                                <li className="list-group-item bg-none cs-list-item">An item</li>
                                <li className="list-group-item bg-none cs-list-item">A second item</li>
                                <li className="list-group-item bg-none cs-list-item">A third item</li>
                                <li className="list-group-item bg-none cs-list-item">A fourth item</li>
                                <li className="list-group-item bg-none cs-list-item">And a fifth one</li>
                            </ul>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end align-items-center order-1 order-md-2 py-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow cs-image"
                            />
                        </div>
                        <div className="col-12 order-3 py-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow cs-image "
                            />
                        </div>
                    </div>
                </div>


            </section>


            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end align-items-center order-2 order-md-1 py-3">
                        <animated.img
                            style={bannerAnimation}
                            src={NSLSBanner}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <h2 className="py-2 font-weight-bold section-title">Title</h2>
                        <p className=" font-weight-bolder  section-p">
                            In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                        </p>
                        <ul className="list-group list-group-flush section-list">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col-12 row order-3">
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={NSLSBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section className="container section-spacing text-center">
                <h2 className="py-2 font-weight-bold section-title">Title</h2>
                <p className=" font-weight-bolder  section-p col-md-7 mx-auto">
                    In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                </p>
                <div className="row py-md-4">
                    <div className="col-md-3 col-6">
                        <h3>90%</h3>
                        <p>Some text underneath</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h3>90%</h3>
                        <p>Some text underneath</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h3>90%</h3>
                        <p>Some text underneath</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h3>90%</h3>
                        <p>Some text underneath</p>
                    </div>
                </div>
            </section>
            <section className=" container-fluid section-spacing bg-light-main">
                <ContactForm heading="More questions? Let's chat." />

            </section>
        </div>
    );
}

export default NSLSCase;


