import React, { useState } from 'react';

import '../../../App.css';


import KoopidBanner from "../../../assets/images/Companies/Koopid Banner.png";

import { useSpring, animated } from 'react-spring';

import ContactForm from "../../ContactForm";

function KoopidCase(props) {
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
                        <h2 className="text-main cs-position font-weight-bold">Lead UI/UX Designer and Developer</h2>
                        <h1 className="font-weight-bold cs-company section-title">Koopid.ai</h1>
                        <p className="pt-4 pt-lg-5 col-md-8 mx-auto font-weight-bolder cs-brief">
                            In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                        </p>
                    </div>
                </div>
            </header>



            <section className='col-md-7 mx-auto'>
                <animated.img
                    style={bannerAnimation}
                    src={KoopidBanner}
                    alt="Banner"
                    className="img-fluid w-100 cs-big-image"
                />
            </section>



            <section className="container section-spacing ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-end align-items-center order-2 order-md-1 py-3">
                        <animated.img
                            style={bannerAnimation}
                            src={KoopidBanner}
                            alt="Banner"
                            className="img-fluid w-100 rounded shadow cs-image"
                        />
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <h2 className="py-2 font-weight-bold section-title cs-section-title">Title</h2>
                        <p className=" font-weight-bolder  section-p cs-section-p">
                            In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                        </p>
                        <ul className="list-group list-group-flush section-list cs-section-list-group">
                            <li className="list-group-item cs-list-item">An item</li>
                            <li className="list-group-item cs-list-item">A second item</li>
                            <li className="list-group-item cs-list-item">A third item</li>
                            <li className="list-group-item cs-list-item">A fourth item</li>
                            <li className="list-group-item cs-list-item">And a fifth one</li>
                        </ul>
                    </div>
                </div>

            </section>

            <section className="section-spacing bg-light-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <h2 className="py-2 font-weight-bold section-title cs-section-title">Title</h2>
                            <p className=" font-weight-bolder  section-p cs-section-p">
                                In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
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
                                src={KoopidBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow cs-image"
                            />
                        </div>
                        <div className="col-12 order-3">
                            <animated.img
                                style={bannerAnimation}
                                src={KoopidBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow cs-image"
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
                            src={KoopidBanner}
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
                                src={KoopidBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={KoopidBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={KoopidBanner}
                                alt="Banner"
                                className="img-fluid w-100 rounded shadow"
                            />
                        </div>
                        <div className="col-md-3">
                            <animated.img
                                style={bannerAnimation}
                                src={KoopidBanner}
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

export default KoopidCase;


