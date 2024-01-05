import React, { useState } from 'react';


import ZoomableImageSection from '../Subcomponents/ZoomableImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Engineering from "../../assets/images/Cases/misty/engineering.png";
import Collab from "../../assets/images/Cases/misty/collab.png";
import DesignSystem from "../../assets/images/Cases/misty/design-systems.png";

import '../../App.css';

import MistyBanner from "../../assets/images/Companies/Misty Banner.png";
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
                        <h1>Misty Robotics</h1>
                        <p className="py-4 py-lg-5 col-md-8 mx-auto">
                        Transitioning my passion from engineering to product design during my tenure at Misty Robotics has been a fulfilling and purpose-driven journey. Motivated by a deep passion for crafting meaningful user experiences, I made a deliberate shift to design. Embracing the challenges and leveraging my engineering background, I seamlessly integrated technical acumen with creative design thinking, contributing to Misty Robotics' innovation at the intersection of technology and user-centric design.
                        </p>
                    </div>
                </div>
            </header>

            <div className="text-left col-md-9 mx-auto">
                <animated.img
                    style={bannerAnimation}
                    src={MistyBanner}
                    alt="Banner"
                    className="img-fluid w-100"
                />
                <div className="row py-md-5">
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Position
                        </p>
                        <p className="w-100 ">
                            Software Developer and Junior Designer
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Duration
                        </p>
                        <p className="w-100 ">
                            May 2016 - September 2016
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
               
                            <BrandingCircle bg="#65499d" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <p className="w-100 font-weight-bold">
                            Link
                        </p>
                        <p className="w-100 ">
                            <a href="https://www.mistyrobotics.com/" target="_blank" className="badge badge-dark">www.mistyrobotics.com</a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-md-5">
                        <h3 className="mb-md-5">Key Responsibilities:</h3>
                        <p>
                           
In my role at Misty Robotics, my primary responsibilities included providing crucial support to the software engineering team while concurrently immersing myself in the realm of design through shadowing experiences. Juggling both aspects, I seamlessly bridged the gap between software engineering tasks and design insights. This unique dual-role allowed me to contribute technically to Misty's projects while gaining invaluable exposure to the intricacies of the design process, fostering a holistic skill set that greatly enriched my professional journey.
                        </p>

                    </div>

                    <div className="col-md-12">
                        <ZoomableImageSection
                            imageSrc={Engineering}
                            alt="Desktop View"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                            iconZoom={<FontAwesomeIcon icon={faPlus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                            iconUnzoom={<FontAwesomeIcon icon={faMinus} className={`custom-zoom-icon ${isZoomed ? 'is-zoomed' : ''}`} />}
                        />
                    </div>

                    <div className="col-md-12 py-md-5 text-md-center">
                        <div className="col-md-12 mx-auto px-0 px-md-3">
                            <h3 className="mb-md-5 my-4">From Engineering to Design</h3>
                            <p>
                            Recognizing the transformative potential of merging software engineering prowess with design acumen, I embarked on a journey to channel my technical skills into the realm of product design at Misty Robotics. With a clear vision, I aimed to leverage my software engineering background to sculpt innovative and user-centric designs. This intentional pivot allowed me to harness the power of both disciplines, bridging the gap between code and creativity to contribute meaningfully to Misty's product design endeavors.
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
                            imageSrc={Collab}
                            alt="Mobile Mock Up"
                            handleZoomChange={handleZoomChange}
                            isZoomed={isZoomed}
                        />
                    </div>

                    <div className="col-md-12 py-md-4">
                        <h3 className="mb-md-5 my-4">Is coding needed?</h3>
                        <p>
                        I firmly believe that a fusion of software engineering insights and design proficiency constitutes a powerful catalyst for innovation in the field. Drawing from my experiences as a product designer, I've come to appreciate how even a basic understanding of software engineering principles can significantly augment one's ability to conceive and implement impactful designs. By bridging the gap between these disciplines, designers can not only communicate more effectively with development teams but also forge a deeper appreciation for the technical intricacies that underpin successful product experiences. This holistic perspective, rooted in both design and engineering, forms the bedrock for crafting solutions that seamlessly integrate creativity with functionality.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Misty;




