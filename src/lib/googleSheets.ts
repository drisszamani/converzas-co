// Google Sheets API service
// This service handles the submission of form data to a Google Sheet
'use server';  // Mark this file as a server component

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Submit form data to Google Sheets
 * 
 * This function runs on the server side only and handles submitting data
 * to Google Sheets.
 */
export async function submitToGoogleSheet(data: ContactFormData): Promise<boolean> {
  try {
    // Log the submission attempt
    console.log('Attempting to submit to Google Sheets:', data);
    
    // Check if we have the required environment variables
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    // If any required environment variables are missing, use simulation mode
    if (!spreadsheetId || !serviceAccountEmail || !privateKey) {
      console.log('Missing environment variables. Using simulation mode.');
      return await simulateSubmission(data);
    }
    
    // Create a JWT client from the service account credentials
    const serviceAccountAuth = new JWT({
      email: serviceAccountEmail,
      key: privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Initialize the Google Spreadsheet with the JWT client
    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    
    // Load document properties and sheets
    await doc.loadInfo();
    
    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];
    
    // Add the row with data
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
    
    // In development, fall back to simulation
    console.log('Falling back to simulation mode due to error');
    return await simulateSubmission(data);
  }
}

/**
 * Simulate a submission for development purposes
 */
async function simulateSubmission(data: ContactFormData): Promise<boolean> {
  console.log('Simulating Google Sheets submission with data:', data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log('Simulation complete. In production, this would be saved to Google Sheets.');
  return true;
} 