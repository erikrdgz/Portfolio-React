import React, { useState } from 'react';


import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Desktop1 from "../../assets/images/Cases/koopid/Desktop-1.png";
import Desktop2 from "../../assets/images/Cases/koopid/Desktop-2.png";
import Agent from "../../assets/images/Cases/koopid/Agent-Desktop.png";
import Chat from "../../assets/images/Cases/koopid/Chatbot.png";
import Portal from "../../assets/images/Cases/koopid/Portal.png";


import '../../App.css';

import KoopidBanner from "../../assets/images/Companies/Koopid Banner.png";
import BrandingCircle from '../Subcomponents/BrandingCircle';

import { useSpring, animated } from 'react-spring';

function Koopid(props) {
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
                        <h1>Koopid</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">
                        In my role as the Lead Designer at Koopid, a cutting-edge AI company specializing in business communication and call center solutions, I led transformative design initiatives at the intersection of technology and user experience. Spearheading the design team, I played a pivotal role in crafting innovative interfaces that seamlessly integrated AI functionalities into our communication solutions. Balancing aesthetics with the complexity of AI-driven systems, I contributed to Koopid's mission of revolutionizing business communication through intuitive and forward-thinking design strategies.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
                <animated.img
                    style={bannerAnimation}
                    src={KoopidBanner}
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
                        
                            <BrandingCircle bg="#1069BB" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            <a href="https://www.dialpad.com" target="_blank" className="badge badge-dark">www.dialpad.com</a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                        Revamping Koopid's designs from the ground up was a challenging yet rewarding aspect of my role as the Lead Designer. Focused on harnessing the power of AI in business communication and call centers, I initiated a comprehensive redesign to align our interfaces with cutting-edge design principles. This involved overhauling existing structures, integrating user-centric elements, and ensuring a cohesive visual language that reflected both technological sophistication and user-friendly experiences. My efforts aimed to elevate Koopid's design standards, providing a fresh and innovative face to our AI-driven solutions.
                        </p>

                        <p>
                            
In addition to conceptualizing and creating innovative designs, another crucial responsibility involved hands-on implementation using React.js. Collaborating closely with a skilled front-end developer, I spearheaded the execution of these designs, ensuring a seamless transition from concept to reality. This dynamic collaboration not only streamlined the development process but also fostered an environment where design and implementation worked in tandem, resulting in efficient and impactful solutions for Koopid's AI-driven products.
                        </p>

                    </div>

                    <div className="col-md-12">
                        <ZoomableImageSection
                            imageSrc={Agent}
                            alt="Agent Desktop"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                            iconZoom={<FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                            iconUnzoom={<FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                        />
                    </div>

                    <div className="col-md-12 py-md-5 text-md-center">
                        <div className="col-md-12 mx-auto px-0 px-md-3">
                            <h3 className="mb-md-5 my-4">Design. Implement. White-label.</h3>
                            <p>
                            Planning the React portion of the project posed a unique challenge as we needed to establish a flexible structure that allowed for white-labeling the product. This involved careful consideration of the architecture to ensure scalability and ease of customization. Navigating this intricate planning phase, we successfully devised a React setup that not only met the immediate project requirements but also laid the foundation for accommodating future white-labeling needs, showcasing our commitment to strategic and forward-thinking design.
                            </p>
                        </div>
                    </div>


                    <div className="col-md-12 text-center text-md-left my-2">
                        <ZoomableImageSection
                            imageSrc={Chat}
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
                            imageSrc={Portal}
                            alt="Agent Portal"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-6 py-4">
                        <ZoomableImageSection
                            imageSrc={Desktop1}
                            alt="Agent Desktop Old"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>
                    <div className="col-md-6 py-4">
                        <ZoomableImageSection
                            imageSrc={Desktop2}
                            alt="Agent Desktop New"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Design.</h3>
                        <p>
                        During my tenure at Koopid, I seized the opportunity to redefine and elevate the design landscape, ultimately establishing myself as a lead designer in the dynamic realm of AI-driven business communication and call centers. Through meticulous design revamps, strategic planning, and hands-on implementation using React JS, I not only met project goals but also shaped the company's design ethos. Koopid provided the platform for me to showcase leadership in design innovation and solidify my position as a trailblazer in the field.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Koopid;




