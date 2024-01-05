import React, { useState } from 'react';


import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Apprentice from "../../assets/images/Cases/techtonic/apprentice.png";
import Mentor from "../../assets/images/Cases/techtonic/mentor.png";
import Contract from "../../assets/images/Cases/techtonic/contract.png";

import '../../App.css';

import TechtonicBanner from "../../assets/images/Companies/Techtonic Banner.png";
import BrandingCircle from '../Subcomponents/BrandingCircle';

import { useSpring, animated } from 'react-spring';

function Misty(props) {
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
                        <h1>Techtonic Group</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">
                        My experience at Techtonic as a software developer served as a pivotal chapter that significantly influenced my career trajectory. Working on diverse and challenging projects at Techtonic not only honed my technical skills but also sparked a profound interest in the intersection of technology and design. This pivotal experience set me on the path toward transitioning from software development to my current role as a lead designer, enriching my skill set and broadening my perspective in the ever-evolving landscape of technology and design.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
                <animated.img
                    style={bannerAnimation}
                    src={TechtonicBanner}
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
                            <BrandingCircle bg="#2E2E2E" />
                            <BrandingCircle bg="#ACCC20" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            Permanently Closed
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                        In my role at Techtonic, my key responsibilities encompassed a multifaceted approach. Beyond writing code, I actively engaged in client meetings to understand their needs, effectively planned project scopes, and took on the role of mentoring apprentices. This diverse set of responsibilities not only allowed me to contribute technically but also fostered my leadership and interpersonal skills. The experience at Techtonic was instrumental in shaping my capacity to navigate both the technical and collaborative aspects of software development.
                        </p>

                    </div>

                    <div className="col-md-12">
                        <ZoomableImageSection
                            imageSrc={Apprentice}
                            alt="Desktop View"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                            iconZoom={<FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                            iconUnzoom={<FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                        />
                    </div>

                    <div className="col-md-12 py-md-5 text-md-center">
                        <div className="col-md-12 mx-auto px-0 px-md-3">
                            <h3 className="mb-md-5 my-4">Learn By Teaching.</h3>
                            <p>
                            Mentoring apprentices during my time at Techtonic was a fulfilling experience that not only allowed me to contribute to their growth but also enhanced my own understanding of coding concepts. Teaching others requires a thorough comprehension of the subject matter, prompting me to reinforce and solidify my own knowledge. This collaborative learning environment fostered a dynamic exchange of ideas, creating a mutually beneficial experience for both mentors and apprentices.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-12 text-center text-md-left my-2">
                        <ZoomableImageSection
                            imageSrc={Mentor}
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
                            imageSrc={Contract}
                            alt="Mobile Mock Up"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Keep Learning.</h3>
                        <p>
                            
Contracting at various companies through Techtonic provided me with a unique opportunity to expand my knowledge across a spectrum of coding languages. Working in diverse environments exposed me to different technological stacks and coding practices, enriching my skill set and deepening my understanding of software development. This hands-on experience broadened my expertise, making me a more versatile and adaptable software developer.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Misty;





