# Converzas - AI Automation Agency Website

A modern, responsive website for Converzas, an AI automation agency, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design optimized for all devices
- Smooth animations and transitions using Framer Motion
- Server-side rendering with Next.js
- Type-safe codebase with TypeScript
- Utility-first styling with Tailwind CSS
- Contact form with Google Sheets integration
- Blog section with category filtering and search functionality

## Recent Updates

- **UI Redesign**: Implemented a modern professional design inspired by Horizon Etech
- **Components**: Updated Navbar, Hero, Features, CTA, Clients, and Footer components
- **Bug Fixes**: Resolved React key warnings in blog list components
- **Data Structure**: Aligned blog post data structures with TypeScript types
- **Image Integration**: Added Next.js Image component support for blog cover images

## Tech Stack

- **Framework:** Next.js 15.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** react-hook-form + zod validation
- **Data Storage:** Google Sheets API

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Google account (for Google Sheets integration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/drisszamani/converzas-co.git
cd converzas-co
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Google Sheets Integration

The contact form on this website is integrated with Google Sheets to store submissions. To set up this integration:

1. See `src/README_GOOGLE_SHEETS.md` for detailed setup instructions.

2. Create a `.env.local` file with your Google Sheets credentials:
```
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

3. Run the setup helper:
```bash
npm run setup-sheets
```

If you prefer not to use Google Sheets, the form will still work in simulation mode during development.

## Project Structure

- `src/app/*` - Next.js app router pages
- `src/components/*` - React components
  - `ui/` - Reusable UI components
  - `layout/` - Layout components (Navbar, Footer)
  - `home/`, `about/`, etc. - Page-specific components
  - `blog/` - Blog components including list and detail views
- `src/lib/*` - Utility functions and services
- `src/types/*` - TypeScript type definitions
- `public/*` - Static assets

## Deployment

The website is prepared for deployment on a self-hosted Ubuntu VPS using Nginx and Certbot for HTTPS.

1. Build the project:
```bash
npm run build
```

2. The static files will be generated in the `/out` directory

3. Transfer these files to your server:
```bash
tar -czvf converzas-site.tar.gz -C out .
scp converzas-site.tar.gz username@your-server-ip:/tmp/
```

4. On your server, extract the files to your web directory:
```bash
sudo tar -xzvf /tmp/converzas-site.tar.gz -C /var/www/converzas
sudo chown -R www-data:www-data /var/www/converzas
```

5. Configure Nginx to serve your static files and enable HTTPS with Certbot.

## Troubleshooting

- **React Key Warnings**: If you encounter "Each child in a list should have a unique key prop" warnings, ensure that all mapped elements have unique keys.
- **Type Mismatches**: Make sure data structures match their TypeScript interfaces, especially in the blog components.
- **Image Loading Issues**: Use the Next.js Image component with proper size and loading attributes.

## License

This project is [MIT](LICENSE) licensed.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Lucide Icons](https://lucide.dev/)
