# Google Sheets Integration for Contact Form

This project includes a Google Sheets integration for the contact form. The implementation allows form submissions to be saved directly to a Google Spreadsheet.

## Important: Static Export Compatibility

The original implementation uses Next.js Server Actions (`'use server'`), which are not compatible with a purely static export. When deploying as a static site with `output: 'export'`, you will need to use one of these approaches:

### Option 1: External API Endpoint (Recommended)
Create a small Express or Node.js API service that runs on your VPS alongside the static files. This service will handle the Google Sheets integration.

1. The static site will make POST requests to this API endpoint
2. The API will process the form submission and add data to Google Sheets
3. Configure Nginx to proxy requests to this API service

### Option 2: Switch to a 3rd Party Form Service
Use a service like Formspree, Netlify Forms, or similar that works with static sites.

## Environment Variables

The following environment variables are required for the Google Sheets integration:

```
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
GOOGLE_PRIVATE_KEY="your-private-key-with-quotes"
```

## Deployment Instructions

### For Static Site with API Backend

1. Deploy the static site files to `/var/www/converzas` or your preferred web directory
2. Set up a simple Express server to handle form submissions
3. Configure Nginx to serve static files and proxy API requests
4. Ensure environment variables are properly set for the API service

### Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/converzas;
    index index.html;

    # Static content
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy for form submissions
    location /api/contact {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Testing

You can test the Google Sheets integration using the setup script:

```bash
node scripts/setup-google-sheets.js
```

This will verify that your credentials are correct and can write to the spreadsheet.

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

## Security Considerations

- Never commit your `.env.local` file to version control.
- Keep your service account credentials secure.
- Consider implementing rate limiting to prevent abuse.
- Regularly audit access to your Google Sheet to ensure only authorized users have access. 