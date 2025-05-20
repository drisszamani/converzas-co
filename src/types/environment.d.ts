// Type definitions for environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    // Google Sheets API variables
    GOOGLE_SHEETS_SPREADSHEET_ID: string;
    GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
    GOOGLE_PRIVATE_KEY: string;

    // Other environment variables can be added here
    NODE_ENV: 'development' | 'production' | 'test';
  }
} 