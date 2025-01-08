import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure the request is a POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Destructure the form data from the request body
  const { name, email, message, gender, age, address, state, phone } = req.body;

  // Validate that all fields are provided
  if (!name || !email || !message || !gender || !age || !address || !state || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Create a transporter using your email service (Gmail in this case)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email (use an app password for Gmail)
      pass: process.env.EMAIL_PASS, // Your email password (app password for Gmail)
    },
  });

  // Prepare the email content
  const mailOptions = {
    from: email,  // The sender's email
    to: process.env.HOST_EMAIL,  // Recipient email address
    subject: `New message from ${name}`,  // Email subject
    text: `
      You have received a new message from ${name} (${email}):
      \n\n
      Gender: ${gender}
      \n
      Age: ${age}
      \n
      Address: ${address}
      \n
      State: ${state}
      \n
      Phone: ${phone}
      \n
      Message:
      \n
      ${message}
    `,  // Email body with all the form details
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    // Log the error and return a failure message
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
}
