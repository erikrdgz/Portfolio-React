import React, { useState } from 'react';


import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Desktop from "../../assets/images/Cases/ifcc/desktop.png";
import Mobile from "../../assets/images/Cases/ifcc/mobile.png";
import DesignSystem from "../../assets/images/Cases/ifcc/design-system.png";

import '../../App.css';

import IFCCBanner from "../../assets/images/Companies/Ifcc Banner.png";
import BrandingCircle from '../Subcomponents/BrandingCircle';

import { useSpring, animated } from 'react-spring';

function IFCC(props) {
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
        <div className="container">
            <header className="">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>IFCC Electrical Services</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">
                            In my role as a Product Designer for the IFCC project, I successfully crafted a simple and straightforward design tailored to the needs of an electrical service company. Recognizing the client's requirement for user-friendly interfaces, the project focused on creating an intuitive design that streamlined user interactions, ensuring an optimal experience for both clients and employees.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
                <animated.img
                    style={bannerAnimation}
                    src={IFCCBanner}
                    alt="Banner"
                    className="img-fluid w-100"
                />
                <div className="row py-md-5">
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Position
                        </p>
                        <p className="w-100 ">
                            Product Designer
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Duration
                        </p>
                        <p className="w-100 ">
                            Jul 2022 - Present
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Branding
                        </p>
                        <div className="w-100 row my-0">
                        <BrandingCircle bg="#101010" />
                        <BrandingCircle bg="#5d5d5d" />
                           <BrandingCircle bg="#fff" class="border" />
                          <BrandingCircle bg="#01377b" />
                           <BrandingCircle bg="#F4C313" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            <a href="https://ifccpower.com/" target="_blank" className="badge badge-dark">www.ifccpower.com</a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                        As a seasoned Senior Product Designer with a unique blend of developer skills, I played a pivotal role in bringing the IFCC website to life, overseeing the entire journey from conceptualization to production. My dual expertise allowed for a seamless fusion of design aesthetics and functional precision. By wearing both the hat of a designer and a developer, I orchestrated a harmonious symphony between captivating visuals and flawless technical implementation. This holistic approach not only ensured an aesthetically pleasing user interface but also facilitated a smooth, efficient development process. The IFCC website stands as a testament to the synergy of design and development, a manifestation of my commitment to crafting digital experiences that transcend expectations..
                        </p>

                        <p>
                        By seamlessly integrating user-centric design principles and a keen understanding of business objectives, I craft compelling solutions that not only meet user needs but also exceed expectations. Through an iterative and collaborative design process, I bring clarity to complex challenges, ensuring that each pixel and interaction serves a purpose in creating a cohesive, visually stunning, and highly functional product.
                        </p>

                    </div>

                    <div className="col-md-12">
                        <ZoomableImageSection
                            imageSrc={Desktop}
                            alt="Desktop View"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                            iconZoom={<FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                            iconUnzoom={<FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                        />
                    </div>

                    <div className="col-md-12 py-md-5 text-md-center">
                        <div className="col-md-12 mx-auto px-0 px-md-3">
                            <h3 className="mb-md-5 my-4">Design to Dev? | Dev to Design?</h3>
                            <p>
                            With a commitment to meticulous planning, I prioritized the completion of the design phase before initiating development for the IFCC website. This deliberate strategy not only streamlined the entire process but also cultivated a seamless collaboration between design and development. The outcome is a refined, user-friendly website that effortlessly marries aesthetic appeal with functional excellence.
                            </p>
                        </div>
                    </div>

                   
                    <div className="col-md-12 text-center text-md-left my-2">
                        <ZoomableImageSection
                            imageSrc={DesignSystem}
                            alt="Design Process"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 text-center py-4 py-md-4">
                        <small className='mx-auto text-gray'>*Due to NDA requirements images may have been edited to stay within guidelines*</small>
                    </div>

                    <div className="col-md-12 py-4">
                        <ZoomableImageSection
                            imageSrc={Mobile}
                            alt="Mobile Mock Up"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Be Responsive.</h3>
                        <p>
                        Responsive design and thorough testing are indispensable components of my design philosophy. Recognizing the diverse array of devices users engage with, I prioritize responsive design to ensure seamless and optimal experiences across various screen sizes. Rigorous testing further guarantees the functionality, performance, and visual coherence of the product, affirming its reliability and adaptability in the dynamic digital landscape. Together, responsive design and meticulous testing form the bedrock of delivering user-centric solutions that stand the test of technology's ever-evolving demands.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default IFCC;


