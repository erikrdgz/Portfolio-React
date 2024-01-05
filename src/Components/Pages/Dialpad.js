import React, { useState, useEffect } from 'react';


import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Desktop from "../../assets/images/Cases/dialpad/dialpad-agent-desktop.png";
import Mobile from "../../assets/images/Cases/ifcc/mobile.png";
import Collab from "../../assets/images/Cases/dialpad/dialpad-transcription.png";
import SwitchDevice from "../../assets/images/Cases/dialpad/dialpad-switch-device.png";
import Chat from "../../assets/images/Cases/dialpad/dialpad-chat.png";

import '../../App.css';

import DialpadBanner from "../../assets/images/Companies/Dialpad.png";
import BrandingCircle from '../Subcomponents/BrandingCircle';

import { useSpring, animated } from 'react-spring';

function Dialpad(props) {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = (zoomState) => {
        setIsZoomed(zoomState === 'zoom-in');
    };

    const [isTabletUp, setIsTabletUp] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletUp(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                        <h1>Dialpad</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">

                            During my tenure as a Product Designer at Dialpad, I played a pivotal role in crafting innovative and aesthetically pleasing user experiences within the dynamic landscape of artificial intelligence. While Dialpad operated in the AI space, my primary focus as a designer involved translating user needs into visually compelling solutions, contributing to the company's mission by seamlessly blending design excellence with cutting-edge AI technology. Through my involvement in various design initiatives, I actively contributed to Dialpad's commitment to delivering user-centric and AI-driven communication solutions.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
                <animated.img
                    style={bannerAnimation}
                    src={DialpadBanner}
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
                            <BrandingCircle bg="#1b1b1b" />
                            <BrandingCircle bg="#5d5d5d" />
                            <BrandingCircle bg="#fff" class="border" />
                            <BrandingCircle bg="#e0d8ff" />
                            <BrandingCircle bg="#7c52ff" />
                            <BrandingCircle bg="#ea2ec6" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            <a href="https://www.dialpad.com/" target='_blank' className="badge badge-dark">www.dialpad.org</a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                            In my role as a Product Designer at Dialpad, I immersed myself in a collaborative environment, engaging with various departments to synthesize diverse perspectives into the fabric of our design process. A focal point of my contribution was the expansion and enhancement of Dialpad's design library, fostering a unified visual language that resonated with the brand's communication solutions. Iteratively crafting seamless user experiences, I employed robust user testing methodologies to fine-tune and validate design decisions, ensuring an optimal and user-friendly interface.
                        </p>

                        <p>
                            The period following the merger from Koopid to Dialpad marked a pivotal moment where my leadership took center stage. I spearheaded design initiatives, strategically aligning the evolving user experience with the new organizational identity. This involved navigating through complexities, harmonizing design elements, and orchestrating a cohesive transition that seamlessly integrated the best practices from both entities.
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
                            <h3 className="mb-md-5 my-4">Collaboration in large teams is crucial.</h3>
                            <p>
                                In large design teams, effective communication serves as the linchpin for success, fostering cohesion and ensuring a harmonious collaboration among diverse talents. Clear and open channels of communication are paramount in conveying design intentions, aligning team members toward a shared vision, and addressing potential challenges. By cultivating a culture of transparent and constructive communication, large design teams can harness collective creativity, navigate complexities, and deliver innovative solutions that exceed individual contributions.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-12 text-center text-md-left my-2">
                        <ZoomableImageSection
                            imageSrc={Collab}
                            alt="Design Process"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 text-center py-4 py-md-4">
                        <small className='mx-auto text-gray'>*Due to NDA requirements images may have been edited to stay within guidelines*</small>
                    </div>

                    <div className="row">
                        <div className="col-md-6  d-flex align-items-stretch col-12 py-4">
                            <ZoomableImageSection
                                imageSrc={SwitchDevice}
                                alt="Mobile Mock Up"
                                handleZoomChange={handleZoomChange}
                                isZoomed={isZoomed}
                            />
                        </div>
                        <div className="col-md-6  d-flex align-items-stretch col-12 py-4">
                            <ZoomableImageSection
                                imageSrc={Chat}
                                alt="Mobile Mock Up"
                                handleZoomChange={handleZoomChange}
                                isZoomed={isZoomed}
                                customStyles={isTabletUp ? { height: '80%' } : null}
                            />
                        </div>
                    </div>



                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Keep Going.</h3>
                        <p>
                        My time at Dialpad has been a transformative journey, marked by professional and personal growth. Operating in the dynamic field of artificial intelligence, I seamlessly integrated cutting-edge technology with compelling design solutions, contributing significantly to Dialpad's mission. From leading design initiatives to navigating complexities post-merger, I evolved from a designer to a design leader, leaving a lasting impact on the company's commitment to excellence in user experience and design innovation.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Dialpad;



