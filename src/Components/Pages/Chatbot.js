import React from 'react';
import  ChatOld  from "../../assets/images/Projects/Chatbot-legacy.png";
import  ChatSketch  from "../../assets/images/Projects/Chat-bot-sketch.PNG";
import  ChatNew  from "../../assets/images/Projects/Chatbot-New.png";
import '../../App.css';

function Chatbot(props) {

    return (
        <div className="container text-white mt-4 pt-3">
            <h1 className="mb-4">Chat Bot Redesign</h1>
            <div className="col-12">
                <h3>Summary</h3>

                <p>The Chatbot was the customer facing interface that allowed users to interact with workflow experiences created by the Admin Portal. The Chatbot enabled users to engage with the artificial intelligence engine to address their customer service needs such as: issue resolution, FAQ, and/or connect with live agents. The Chatbot had additional features for payment processing, form submission, appointment setting modules called widgets. While it was very feature rich, this portion of the application had a very dated look and feel as well as some confusing interactions. </p>
            </div>

            <div className="row border-top py-4">
                <div className="col-md-12">
                    <h4 className="mb-4">Research</h4>
                    <p>My preliminary research was based on competitor analysis as well as customer reviews and feedback. A lot of the feedback received from customers was actually based on responses the artificial intelligence logged such as sentiment, written responses, and surveys all done within the Chatbot itself. This allowed efficient data collection and problem categorization. </p>
                
                </div>
                <div className="col-md-12 text-center my-2">
                <img src={ChatOld} className="img-fluid rounded mx-auto"/>
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Main Objective</h4>
                <p>The primary objective here was to facelift the chatbot as well as the “widgets”, and to eliminate areas of confusion or even omit areas that users no longer utilized based on research findings. I needed to also account for the fact that our business emphasized custom chatbots as a large selling point as the chatbot was primarily used in the clients own websites.</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-4">MVP</h4>
                    <p>I started the process of identifying what only needed a facelift and what needed interaction changes. This brought me to the three target objectives:<br /><br />
                    
                        - Omit anything that had low usability or redundancy <br />
                        - Facelift the interface and account for branding <br />
                        - Change navigation interaction and formulate appropriate responses with widgets 
                    </p>
                </div>
                <div className="col-md-6">
                <img src={ChatSketch} className="img-fluid rounded mx-auto"/>
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Internal Feedback</h4>
                <p>I held many design reviews for each portion of the chatbot interface with different workflows that showcased the different possibilities and accounted for edge cases. Internal feedback sessions helped identify a lot more redundancies that previously accounted for which helped each iteration get closer to what we were trying to achieve. </p>
            </div>
            <div className="col-12">
                <h4 className="mb-4">The Redesign</h4>
                <img src={ChatNew} className="img-fluid rounded d-flex mx-auto" />
            </div>
            <div className="col-12  border-bottom py-4 my-4">
                <h4 className="mb-4">Challenges</h4>
                <p>A significant challenge I had with this redesign was the complexity behind the technology. The biggest one was that the technology utilized in creating the chatbot experience overlapped with the Agent Desktop (link). The codebase for the Agent Desktop was actually the same one utilized for the Chatbot which introduced several issues, mainly the viewport. Changing the chatbot interface if we were not careful would have ramifications on the Agent Desktop. To resolve this the CSS I had written was meticulously checked on both platforms to ensure smooth sailing.</p>
                <p>Because we were not rewriting the Agent or Chatbot interfaces at the time, we could not switch to React just yet so we had to circumnavigate many issues while documenting future solutions to be implemented in React.</p>
            </div>

            <div className="col-12 border-bottom py-4 my-4">
                <h4 className="mb-4">Moving Forward</h4>
                <p>Since we documented many of the issues and overlaps, we had a clear idea of how to resolve and split the code bases in the future to account for many of the application issues. This created an orderly timeline and backlog to ensure success in the future.</p>
            </div>

        </div>
    )
}

export default Chatbot;