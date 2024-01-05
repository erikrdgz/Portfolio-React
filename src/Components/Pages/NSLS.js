import React, { useState } from 'react';
import NSLSBanner from "../../assets/images/Companies/Nsls-Banner-2.png";
import Home from "../../assets/images/Cases/nsls/ignite-home.png";
import Menu from "../../assets/images/Cases/nsls/ignite-menu.png";
import Chat from "../../assets/images/Cases/nsls/ignite-chat.png";
import Wireframe from "../../assets/images/Cases/nsls/wireframe.png";
import Figjam from "../../assets/images/Cases/nsls/figjam.png";
import DesignSystems from "../../assets/images/Cases/nsls/design-systems.png";
import CustomZoomButtons from "../Subcomponents/CustomZoomButton";
import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
import BrandingCircle from '../Subcomponents/BrandingCircle';

import { useSpring, animated } from 'react-spring';

function NSLS(props) {
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
                        <h1>National Society of Leadership and Success</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">
                            In my role as a Senior Product Designer at NSLS, I have gained invaluable insights into the dynamic intersection of design leadership and product development. Leading initiatives at NSLS has not only honed my design skills but has also provided me with a holistic understanding of how to guide a team towards a shared vision.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
            <animated.img
          style={bannerAnimation}
          src={NSLSBanner}
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
                            <BrandingCircle bg="#000" />
                            <BrandingCircle bg="#D9D9D9" />
                            <BrandingCircle bg="#fff" class="border" />
                            <BrandingCircle bg="#345f83" />
                            <BrandingCircle bg="#c0181b" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            <a href="#" className="badge badge-dark">www.nsls.org</a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                            As a Senior Product Designer at The National Society of Leadership and Success, my main duties entailed creating a cohesive and welcoming user experience for new members. I had a very methodical approach to user testing in the form of surveys and utilizing external user groups to validate any work done.
                        </p>

                        <p>
                            Another key responsibility was maintaining and adding to our design system, which entailed creating multiple parent components, providing specs to the devs for implementation, usability testing of components, and at times adding animations.
                        </p>

                        <p>
                            As A Senior Product Designer, it was expected of me to create usable prototypes to ensure a proper click-through was present. After rounds of testing, the approved prototype would then be showcased to the appropriate stakeholders and upon approval were then sent to tech to implement.
                        </p>
                    </div>

                    <div className="col-md-12">
                        <ZoomableImageSection
                            imageSrc={DesignSystems}
                            alt="Design Systems"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                            iconZoom={<FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                            iconUnzoom={<FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                        />
                    </div>

                    <div className="col-md-12 py-md-5 text-md-center">
                        <div className="col-md-12 mx-auto px-0 px-md-3">
                            <h3 className="mb-md-5 my-4">Communicate!</h3>
                            <p>
                                Collaborating with cross-functional teams and stakeholders, I've learned the importance of effective communication, strategic thinking, and fostering a collaborative environment. Through the challenges and successes encountered in this leadership role, I've developed the ability to inspire and motivate a team, ensuring that every design decision aligns with the overarching goals of the organization. <br /><br /> My experience at NSLS has been instrumental in shaping my role as a design leader, equipping me with the skills and mindset needed to drive innovation and excellence in the ever-evolving landscape of product design.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 text-center text-md-right my-2">
                        <ZoomableImageSection
                            imageSrc={Home}
                            alt="Home"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>
                    <div className="col-md-4 text-center text-md-center my-2">
                        <ZoomableImageSection
                            imageSrc={Menu}
                            alt="Menu"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>
                    <div className="col-md-4 text-center text-md-left my-2">
                        <ZoomableImageSection
                            imageSrc={Chat}
                            alt="Chat"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 text-center py-4 py-md-4">
                        <small className='mx-auto text-gray'>*Due to NDA requirements images may have been edited to stay within guidelines*</small>
                    </div>

                    <div className="col-md-12 py-4">
                        <ZoomableImageSection
                            imageSrc={Wireframe}
                            alt="Wireframe"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Idea. Wireframe. Magic. High Fidelity.</h3>
                        <p>
                            Elevating a design from a low-fidelity wireframe to a high-fidelity masterpiece involves strategic steps for a product designer. Beginning with a bare-bones wireframe, user feedback guides iterative improvements, refining the user experience. Best practices come into play during the enhancement phase, focusing on visual elements, typography, and color schemes aligned with the brand. Iterative prototyping and usability testing validate design decisions, leading to a polished user interface.
                        </p>
                    </div>

                    <div className="col-md-12 py-4">
                        <ZoomableImageSection
                            imageSrc={Figjam}
                            alt="FigJam"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Collaborate.</h3>
                        <p>
                            Collaboration across teams was vital for me at NSLS, where the seamless integration of insights from various departments shapes impactful solutions. The usefulness of FigJam in our collaborative workflow enhanced creativity, fostered a deeper understanding of project requirements, and accelerated the development of innovative and user-centric solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NSLS;


