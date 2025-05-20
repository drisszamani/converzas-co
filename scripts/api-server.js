// API server for contact form submissions
// This script runs a small Express server to handle form submissions
// and pass them to Google Sheets

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for frontend requests
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['POST'],
}));

// Parse JSON request bodies
app.use(bodyParser.json());

// Validate form data
function validateFormData(data) {
  const errors = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = 'Name is required';
  }
  
  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Valid email is required';
  }
  
  if (!data.message || data.message.length < 10) {
    errors.message = 'Message should be at least 10 characters';
  }
  
  return Object.keys(errors).length > 0 ? errors : null;
}

// Google Sheets submission
async function submitToGoogleSheet(data) {
  try {
    console.log('Attempting to submit to Google Sheets:', data);
    
    // Check for required environment variables
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    if (!spreadsheetId || !serviceAccountEmail || !privateKey) {
      console.log('Missing environment variables');
      return false;
    }
    
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Initialize the spreadsheet
    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    
    // Load document properties and sheets
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Add the data row
    await sheet.addRow({
      Name: data.name,
      Email: data.email,
      Message: data.message,
      Timestamp: new Date().toISOString()
    });
    
    console.log('Successfully submitted data to Google Sheets');
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate the form data
    const validationErrors = validateFormData(formData);
    if (validationErrors) {
      return res.status(400).json({ 
        success: false, 
        errors: validationErrors 
      });
    }
    
    // Submit to Google Sheets
    const result = await submitToGoogleSheet(formData);
    
    if (result) {
      return res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully' 
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to submit form' 
      });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Form submission API server running on port ${PORT}`);
});

// Export for potential testing
module.exports = app; 