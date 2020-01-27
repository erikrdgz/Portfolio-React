import React from "react";
import {Link} from 'react-router-dom'; 
import './App.css'

function ThankYou(){
    return(
        <div className="grid-contact">
            <div className="container-center text-white">
                <div>
                <h1 className="lead-text">Thank You</h1>
                <p>I have received your email and will be in contact shortly.</p>
                <Link to="/" className="text-main text-dec-none">Homepage</Link>
                </div> 
            </div>       
        </div>
    );
}

export default ThankYou;