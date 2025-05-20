# Setting Up Google Sheets Integration for Contact Form

This document explains how to set up the Google Sheets integration for the contact form on the Converzas website.

## Prerequisites

1. A Google account
2. Access to Google Cloud Platform (GCP)

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/) and create a new spreadsheet.
2. Add the following column headers in row 1:
   - Name
   - Email
   - Message
   - Timestamp

### 2. Set Up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the Google Sheets API for your project.

### 3. Create Service Account

1. In your Google Cloud project, go to "IAM & Admin" > "Service Accounts".
2. Click "Create Service Account".
3. Name your service account (e.g., "converzas-website").
4. Grant the service account the "Editor" role on the Google Sheets API.
5. Click "Create Key" and select JSON. Download the JSON file.

### 4. Share Your Sheet

1. Open your Google Sheet.
2. Click the "Share" button.
3. Add the service account email (found in the JSON file) with "Editor" access.

### 5. Set Up Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

- The spreadsheet ID can be found in the URL of your Google Sheet: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
- The service account email and private key are in the JSON file you downloaded.

### 6. Install Required Package

```bash
npm install google-spreadsheet
```

## Updating the Integration

The code in `src/lib/googleSheets.ts` is set up to handle form submissions. If you need to modify the structure of the data being saved, update both the `ContactFormData` interface and the `submitToGoogleSheet` function.

## Testing

After setting up, submit a test form to verify that data is being properly saved to your Google Sheet.

## Security Considerations

- Never commit your `.env.local` file to version control.
- Keep your service account credentials secure.
- Consider implementing rate limiting to prevent abuse.
- Regularly audit access to your Google Sheet to ensure only authorized users have access. 