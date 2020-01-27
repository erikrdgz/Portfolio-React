import React from 'react'
import './App.css';
import ContactForm from './ContactForm.js'

function Contact(props){
    return(
    <div className="text-white">
      
      <ContactForm
        header="Contact Me"
        paragraph="Want to work together? Please fill out the form below and I will get back to you as soon as possible."
      />
    </div>
    )
}

export default Contact;