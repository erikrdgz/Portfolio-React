const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure OAuth2 credentials
const oauth2Client = new google.auth.OAuth2(
  '1000270901416-cta5klocvkn4s4a7unprmqdm4lnv6tb2.apps.googleusercontent.com',
  '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',
  'http://localhost:3000/callback' // Replace with your actual redirect URI
);

// Set the scope for accessing Gmail API
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Generate OAuth2 consent page URL
const consentUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});

// Redirect users to consent page
app.get('/auth', (req, res) => {
  res.redirect(consentUrl);
});

// Handle callback after consent is granted
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    // Exchange authorization code for access token
    const { tokens } = await oauth2Client.getToken(code);
    const accessToken = tokens.access_token;

    // Send test email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: 'your-client-id.apps.googleusercontent.com',
        clientSecret: 'your-client-secret',
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient@example.com',
      subject: 'Test email',
      text: 'This is a test email sent from Node.js using OAuth2 authentication.',
    };
    await transporter.sendMail(mailOptions);

    // Redirect or respond as needed
    res.send('Authorization successful! Email sent.');
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    res.status(500).send('Error exchanging authorization code');
  }
});

// Handle POST requests to send emails
app.use(bodyParser.json());
app.post('/send-email', async (req, res) => {
  const { from, to, subject, text } = req.body;
  try {
    // Get a new access token
    const accessToken = await oauth2Client.getAccessToken();

    // Send email using Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'your-email@gmail.com',
        clientId: 'your-client-id.apps.googleusercontent.com',
        clientSecret: 'your-client-secret',
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
    };
    await transporter.sendMail(mailOptions);

    // Respond to the client
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
