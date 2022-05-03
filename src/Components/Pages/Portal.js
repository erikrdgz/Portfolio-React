import React from 'react';
import  PortalOld  from "../../assets/images/Projects/Portal-legacy.png";
import  PortalSketch  from "../../assets/images/Projects/Portal-Sketch.PNG";
import  PortalNew  from "../../assets/images/Projects/Portal-New.png";
import '../../App.css';

function Portal(props) {

    return (
        <div className="container text-white mt-4 pt-3">
            <h1 className="mb-4">Admin Portal Redesign</h1>
            <div className="col-12">
                <h3>Summary</h3>

                <p>The Admin Dashboard was the central hub in creating call center experiences for small to enterprise level businesses. After conducting customer interviews, our data suggested that many users had several areas of confusion, especially new users not accustomed to the current interface.</p>
            </div>

            <div className="row border-top py-4">
                <div className="col-md-12">
                    <h4 className="mb-4">Research</h4>
                    <p>To further understand these issues we recorded customer interactions with the interface to gather more data on consistent problem areas to tackle them first. This allowed us to prioritize our scope of work and remove the most detrimental issues to customers first.</p>
                    <p>After exploring the  technology behind the admin interface I noticed we had a lot of technical debt as well as outdated technologies powering the admin portal. This created limitations on what was achievable in a first round redesign so I knew we would need to create a backlog of work items to iteratively introduce later on. </p>
                </div>
                <div className="col-md-12 my-2">
                <img src={PortalOld} className="img-fluid rounded mx-auto"/>
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Main Objective</h4>
                <p>I knew the redesign needed to formalize the user workflow while also uplifting the user interface and eventually introducing a library to further support the upcoming features and other redesigns. </p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-4">MVP</h4>
                    <p>So to begin the process I focused on the appropriate information hierarchy; I wanted to create a layout that was simplified and focused on creating user familiarity with the platform.<br /><br />

                        After sketching some ideas I came up with three main compartment areas:
                        <br /><br />
                        - Navigation <br />
                        - Header description <br />
                        - Main Content Area
                    </p>
                </div>
                <div className="col-md-6">
                <img src={PortalSketch} className="img-fluid rounded mx-auto"/>
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Internal Feedback</h4>
                <p>After the initial wireframing, I held a design demo as well as a follow up feedback session to assess what worked and did not work. Working alongside engineering helped immensely as some features were on the horizon but not yet ready to implement which allowed me to design accordingly on the next iterations.  </p>
            </div>
            <div className="col-12">
                <h4 className="mb-4">The Redesign</h4>
                <img src={PortalNew} className="img-fluid rounded d-flex mx-auto" />
            </div>
            <div className="col-12  border-bottom py-4 my-4">
                <h4 className="mb-4">Challenges</h4>
                <p>A significant challenge was creating the appropriate scope of work for the redesigns as layout was not the only thing we needed to redesign. While the layout certainly was impactful and well received by customers I knew we had to trickle in the other redesigns of other pages and features and we needed a solution for reusing components across the application. </p>
            </div>
            <div className="col-12  border-bottom py-4 my-4">
                <h4 className="mb-4">Welcome to React</h4>
                <p>Having the reins on the front end direction project I knew I wanted to utilize a Javascript library to help with the organization of components as well as utilize the reusability of modern day JS libraries. <br /><br />

                    After doing a comparison analysis of JS libraries and having multiple discussions with the engineering team on potential conflicts, improvements, and liabilities, we all collectively decided to pursue React as our front end library.<br /><br />

                    Having the most experience with the library at that time I was also tasked with the architecture of the front end side of the application. This allowed me to prepare for some of the aforementioned features like white labeling and custom branded admin portals for our more premiere clients.
                </p>
            </div>
            <div className="col-12 border-bottom py-4 my-4">
                <h4 className="mb-4">Moving Forward</h4>
                <p>Once we had our library, main redesign, architecture and continuous internal feedback cadence, the next steps were to continue to redesign portions of the application that were still considered legacy user interfaces. This was considerably easier and more efficient once we identified grouped processes and design patterns. </p>
            </div>

        </div>
    )
}

export default Portal;