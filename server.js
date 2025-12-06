const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Your email address where you want to receive messages
const RECIPIENT_EMAIL = 'jyoshikareddy01@gmail.com';

// Contact form endpoint - using FormSubmit (free, no authentication required)
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Use Web3Forms - reliable service that works immediately without confirmation
    
    // Using multipart/form-data format which Web3Forms accepts better
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Portfolio Contact: ${subject}`);
    formData.append('from_name', name);
    formData.append('from_email', email);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`);
    formData.append('to_email', RECIPIENT_EMAIL);

    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
        // Don't set Content-Type - let browser set it with boundary for FormData
      },
      body: formData
    });

    // Check content type before parsing
    const contentType = web3FormsResponse.headers.get('content-type');
    let result;

    if (contentType && contentType.includes('application/json')) {
      result = await web3FormsResponse.json();
    } else {
      // If HTML response, read as text to see what happened
      const textResponse = await web3FormsResponse.text();
      console.error('Web3Forms response:', textResponse.substring(0, 500));
      
      // Check if it's a Cloudflare challenge
      if (textResponse.includes('Just a moment') || textResponse.includes('challenge')) {
        throw new Error('Web3Forms is being blocked by Cloudflare. Please try again in a moment.');
      }
      
      if (web3FormsResponse.ok) {
        // If status is OK, assume success
        result = { success: true };
      } else {
        throw new Error('Web3Forms returned an error page');
      }
    }

    if (web3FormsResponse.ok && result.success) {
      console.log(`✅ Email sent successfully via Web3Forms from ${email} (${name})`);
      res.json({ success: true, message: 'Email sent successfully! I will get back to you soon.' });
    } else {
      throw new Error(result.message || result.error || 'Web3Forms service error');
    }
  } catch (error) {
    console.error('❌ Email send error:', error);
    console.error('Error details:', error.message);
    res.status(500).json({ 
      error: 'Failed to send email. Please try again or contact me directly at ' + RECIPIENT_EMAIL 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});