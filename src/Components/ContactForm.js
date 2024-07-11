import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@mui/material';
import { RxPaperPlane } from "react-icons/rx";
import '../App.css'; // Ensure you create this CSS file and import it

const ContactForm = ({ heading }) => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tn6v8hd',
      'template_7f6d2fm',
      e.target,
      'wXiaIFY5wKCBL0Jju'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setSubmitted(true); // Set submitted state to true after successful email sending
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };

  return (
    <div className="contact-form-container p-4 col-12 col-lg-7 mx-auto">
      {submitted ? (
        <p className="thank-you-message">Thank you for your message!</p>
      ) : (
        <div className='text-center'>
          <header className='py-md-4 py-3 mb-lg-5'>
            {heading && <h1 className='project-name'>{heading}</h1>}
          </header>
          <form onSubmit={sendEmail} className="card p-4 text-left contact-form bg-light-main">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="from_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="reply_to" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea name="message" id="message" required />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<RxPaperPlane />}
              sx={{
                backgroundColor: '#1976d2', // Blue color
                color: '#fff', // White text color
                '&:hover': {
                  backgroundColor: '#115293', // Darker blue on hover
                  color: '#fff', // Ensure text stays white on hover
                },
                mt: 2, // Margin top for spacing
              }}
              className=""
            >
              Send Email
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
