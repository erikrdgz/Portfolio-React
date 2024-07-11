import React from 'react';
import { Button } from '@mui/material';
import '../../App.css';

function ContactForm(props) {
    return (
        <div className="grid-contact contact-from bg-black">
            <div className="container-center">
                <div className="contact-card text-light">
                    <h1>{props.header}</h1>
                    <p className="text-light">{props.paragraph}</p>
                    <form
                        action="https://smartforms.dev/submit/5e2d8d93d2b1f304f0563e63" method="POST"
                    >
                        <label className="form-name">
                            Your Name:
                            <input type="text" name="name" className="form-input" />
                        </label>
                        <label className="form-email">
                            Your email:
                            <input type="text" name="email" className="form-input" />
                        </label>
                        <label className="form-message">
                            Your message:
                            <textarea name="message" className="form-input form-textarea"></textarea>
                        </label>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: '#1976d2', // Blue color
                                color: '#fff', // White text color
                                '&:hover': {
                                    backgroundColor: '#115293', // Darker blue on hover
                                    color: '#fff', // Ensure text stays white on hover
                                },
                                mt: 2, // Margin top for spacing
                            }}
                            className="btn-main form-btn-right btn-block"
                        >
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
