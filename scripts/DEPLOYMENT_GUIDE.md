# Converzas Website Deployment Guide

This guide explains how to deploy the Converzas website on an Ubuntu VPS with Nginx. The deployment includes:

1. Static files for the Next.js website
2. API server for handling form submissions to Google Sheets

## Prerequisites

- Ubuntu VPS (18.04 or later)
- Node.js 16.x or later
- Nginx
- Domain name with DNS pointing to your VPS
- Let's Encrypt for SSL certificates

## Step 1: Build the Static Site

On your development machine:

```bash
# Build the static site
cd /path/to/converzas
npm run build

# The output will be in the 'out' directory
```

## Step 2: Set Up the Server

SSH into your VPS and prepare the environment:

```bash
# Update packages
sudo apt update
sudo apt upgrade -y

# Install Node.js if not already installed
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx
```

## Step 3: Configure Nginx

```bash
# Create directory for the website
sudo mkdir -p /var/www/converzas

# Set permissions
sudo chown -R $USER:$USER /var/www/converzas
sudo chmod -R 755 /var/www/converzas

# Create Nginx config
sudo nano /etc/nginx/sites-available/converzas

# Copy the contents from scripts/nginx-config.conf
# Update 'your-domain.com' with your actual domain

# Enable the site
sudo ln -s /etc/nginx/sites-available/converzas /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 4: Set Up SSL with Let's Encrypt

```bash
# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# This will automatically configure Nginx with SSL
```

## Step 5: Deploy the Static Files

From your local machine:

```bash
# Copy the static files to the server
rsync -avz --delete ./out/ user@your-server-ip:/var/www/converzas/
```

## Step 6: Set Up the API Server

On your VPS:

```bash
# Create directory for the API
mkdir -p ~/converzas-api

# Copy API files from local machine
# (Use scp or rsync from your local machine)
scp scripts/api-server.js scripts/package.json user@your-server-ip:~/converzas-api/

# Set up the API server
cd ~/converzas-api
npm install

# Create .env file
nano .env

# Add your Google Sheets credentials:
# GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
# GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
# GOOGLE_PRIVATE_KEY="your-private-key-with-quotes"
# CORS_ORIGIN=https://your-domain.com
```

## Step 7: Run the API Server as a Service

```bash
# Create a systemd service file
sudo nano /etc/systemd/system/converzas-api.service

# Add the following content:
[Unit]
Description=Converzas API Server
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/home/your-username/converzas-api
ExecStart=/usr/bin/node api-server.js
Restart=on-failure
Environment=PORT=3001

[Install]
WantedBy=multi-user.target

# Start and enable the service
sudo systemctl start converzas-api
sudo systemctl enable converzas-api
sudo systemctl status converzas-api
```

## Step 8: Firewall Configuration

```bash
# Allow Nginx and SSH
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
sudo ufw enable
```

## Maintenance and Updates

### Updating the Static Site

When you make changes to the website:

1. Rebuild the site locally: `npm run build`
2. Upload the new files: `rsync -avz --delete ./out/ user@your-server-ip:/var/www/converzas/`

### Updating the API Server

When you make changes to the API:

1. Upload the new files: `scp scripts/api-server.js user@your-server-ip:~/converzas-api/`
2. Restart the service: `sudo systemctl restart converzas-api`

## Troubleshooting

### Check Nginx Logs

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Check API Server Logs

```bash
sudo journalctl -u converzas-api -f
```

### Test API Endpoint

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"Test User","email":"test@example.com","message":"This is a test message"}' http://localhost:3001/api/contact
``` 