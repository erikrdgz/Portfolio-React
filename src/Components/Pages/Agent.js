import React from 'react';
import AgentOld from "../../assets/images/Projects/Agent-Legacy.png";
import AgentSketch from "../../assets/images/Projects/Agent-Desktop-Sketch.PNG";
import AgentNew from "../../assets/images/Projects/Agent-New-2.png";
import '../../App.css';

function Agent(props) {

    return (
        <div className="container mt-4 pt-3">
            <h1 className="mb-4">Agent Desktop Redesign</h1>
            <div className="col-12">
                <h3>Summary</h3>

                <p>The Agent Desktop was the agent platform for connecting with customers in real time. This encompassed initially only web chat customers but soon expanded into multi-channel routing that included social media channels.</p>
            </div>

            <div className="row border-top py-4">
                <div className="col-md-12">
                    <h4 className="mb-4">Research</h4>
                    <p>I knew I needed to talk to agents to gain ground level knowledge of what their everyday interactions with our platform looked like. After surveying several agents I noticed speed and efficiency were their most mentioned requests. Agents have many ongoing conversations and needed features to support their organizational needs as well as their time management. </p>

                </div>
                <div className="col-md-12 my-2">
                    <img src={AgentOld} className="img-fluid " />
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Main Objective</h4>
                <p>The main objective for the Agent Desktop was to accentuate the features that the agents needed and redesign the user interface to reflect those changes. I also needed to account for branding implementation as well as ensuring the new design would work within the technical confines of the Chatbot experience. </p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-4">MVP</h4>
                    <p>To begin the process I focused on the most vital features the agents used and how it affected their workflows. I knew I had to keep efficiency in mind and not overwhelm the agent with features that were useful but rarely used.<br /><br />

                        After identifying the most common requests I narrowed my list to the following:
                        <br /><br />
                        - Agents needed an indicator of a conversation going stale <br />
                        - We needed to show a brief of the response of an incoming message <br />
                        - New messages needed a sentiment identifier <br />
                        - We needed to revitalize the text input area for modern input responses like emojis and image or document attachments
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={AgentSketch} className="img-fluid rounded" />
                </div>
            </div>
            <div className="col-12 border-top border-bottom py-4 my-4">
                <h4 className="mb-4">Internal Feedback</h4>
                <p>Upon completing some initial wireframes, I knew I wanted to get in front of engineering to identify what was plausible and what might need to be pushed back in the situation where we had not built out the feature yet in the backend. Luckily a lot of what was needed was already there just not yet shown or redesigned to be consumer facing. This was the answer I needed to continue to iterate and achieve a better product for the agents. </p>
            </div>
            <div className="col-12">
                <h4 className="mb-4">The Redesign</h4>
                <img src={AgentNew} className="img-fluid rounded" />
            </div>
            <div className="col-12  border-bottom py-4 my-4">
                <h4 className="mb-4">Challenges</h4>
                <p>One of the biggest challenges I had was working with limited space. Since the agent desktop was feature rich I needed to disseminate the current features and organize them in a more space efficient way. This caused some initial hiccups since our internal team was very accustomed to seeing a lot up front but with the new designs I was able to convey that we needed to prioritize the main functions performed by the agents as well as the main visual cues they needed to perform their job efficiently.  </p>
                <p>Aside from spacing, I still had the issue of the merged codebases between the Chatbot and Agent Desktop. Since I had documented the changes needed to separate them, this posed less of a challenge up front but still required attention to detail during the implementation stage.</p>
            </div>

            <div className="col-12 border-bottom py-4 my-4">
                <h4 className="mb-4">Moving Forward</h4>
                <p>Since we had already accounted for the scope of work for the separation of the codebases, this allowed myself and the engineers helping to focus on sectioning off the scope of work into digestible portions. The patterns created from our research to design and feedback loops helped establish a cadence for our future redesign work as well as scoping. </p>
            </div>

        </div>
    )
}

export default Agent;