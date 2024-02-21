import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({heading}) => {

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
    <div className="p-4 col-md-7 mx-auto ">
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <div className='text-center'>
            <header className='py-md-4 py-3 mb-lg-5'>
            {heading && <h1 className='project-name'>{heading}</h1>}
            </header>
            
        <form onSubmit={sendEmail} className="card p-4 text-left">
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
            <textarea name="message" style={{ minHeight: '150px' }} id="message" required />
          </div>
          <button type="submit" className="submit-btn">Send Email</button>
        </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;