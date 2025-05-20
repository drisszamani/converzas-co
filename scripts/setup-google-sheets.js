#!/usr/bin/env node

/**
 * Google Sheets Setup Helper Script
 * 
 * This script helps set up the Google Sheets integration for the Converzas contact form.
 * It will:
 * 1. Check if necessary environment variables are set
 * 2. Test the connection to Google Sheets
 * 3. Create headers in the sheet if it's empty
 * 
 * Usage:
 * node scripts/setup-google-sheets.js
 */

const fs = require('fs');
const path = require('path');
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define required environment variables
const requiredEnvVars = [
  'GOOGLE_SHEETS_SPREADSHEET_ID',
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY'
];

// Headers for the sheet
const HEADERS = ['Name', 'Email', 'Message', 'Timestamp'];

// Check if .env.local exists and load it
function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  
  if (fs.existsSync(envPath)) {
    console.log('📁 Found .env.local file');
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = envContent.split('\n')
      .filter(line => line && !line.startsWith('#'))
      .map(line => {
        const [key, ...valueParts] = line.split('=');
        return { key, value: valueParts.join('=') };
      })
      .reduce((acc, { key, value }) => {
        if (key) {
          acc[key.trim()] = value.trim().replace(/^["'](.*)["']$/, '$1');
        }
        return acc;
      }, {});
    
    for (const key of requiredEnvVars) {
      if (envVars[key]) {
        process.env[key] = envVars[key];
      }
    }
  } else {
    console.log('⚠️ No .env.local file found. You will need to provide credentials manually.');
  }
}

// Check if all required environment variables are set
function checkRequiredEnvVars() {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length === 0) {
    console.log('✅ All required environment variables are set');
    return true;
  }
  
  console.log('❌ Missing required environment variables:', missingVars.join(', '));
  return false;
}

// Test connection to Google Sheets
async function testConnection() {
  try {
    console.log('🔄 Testing connection to Google Sheets...');
    
    // Create a JWT client from the service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Initialize the spreadsheet with the JWT client
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, serviceAccountAuth);
    
    // Load the document info
    await doc.loadInfo();
    
    console.log(`✅ Successfully connected to Google Sheet: "${doc.title}"`);
    
    // Check if we have at least one sheet
    if (doc.sheetCount === 0) {
      console.log('⚠️ No sheets found in the document. Creating a new sheet...');
      await doc.addSheet({ title: 'Contact Form Submissions' });
      console.log('✅ Created new sheet: "Contact Form Submissions"');
    }
    
    const sheet = doc.sheetsByIndex[0];
    console.log(`📊 Using sheet: "${sheet.title}"`);
    
    // Check if the sheet has the correct headers
    let rows;
    try {
      // Try to get rows - this will fail if headers don't exist
      rows = await sheet.getRows();
      
      console.log(`✅ Found ${rows.length} existing rows in the sheet`);
    } catch (error) {
      // If this is a header-related error, set up the headers
      console.log('⚠️ Setting up sheet headers...');
      await sheet.setHeaderRow(HEADERS);
      console.log('✅ Headers set up successfully');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error connecting to Google Sheets:', error.message);
    if (error.stack) {
      console.error('Stack trace:', error.stack);
    }
    return false;
  }
}

// Main function
async function main() {
  console.log('🚀 Starting Google Sheets setup helper...');
  
  loadEnvFile();
  
  if (!checkRequiredEnvVars()) {
    console.log('Please set up the required environment variables in .env.local file');
    rl.close();
    return;
  }
  
  const connectionSuccess = await testConnection();
  
  if (connectionSuccess) {
    console.log('🎉 Google Sheets integration is set up correctly!');
  } else {
    console.log('⚠️ Google Sheets integration setup failed. Check your credentials and try again.');
  }
  
  rl.close();
}

// Run the main function
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
}); 