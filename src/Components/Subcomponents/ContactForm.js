import React from 'react';
import '../../App.css';

function ContactForm(props) {
    return (
        <div className="grid-contact">
            <div className="container-center text-white">
            <div className="contact-card">
                <h1>{props.header}</h1>
                <p>{props.paragraph}</p>
                <form
                    action="https://smartforms.dev/submit/5e2d8d93d2b1f304f0563e63" method="POST"
                    >
                    <label className="form-name">
                    Your Name:
                    <input type="text" name="name" className="form-input"/>
                    </label>
                    <label className="form-email">
                        Your email:
                        <input type="text" name="email" className="form-input"/>
                    </label>
                    <label className="form-message">
                        Your message:
                        <textarea name="message" className="form-input form-textarea"></textarea>
                    </label>
                    <button type="submit" className="btn-main form-btn-right">Send</button>
                    </form>
            </div>
            </div>       
        </div>
    );
}

export default ContactForm;