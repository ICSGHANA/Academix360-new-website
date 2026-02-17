
# ACADEMIX-360 Deployment Guide

Professional School Management ERP Landing Page.

## Recommended Hosting Options

### 1. Vercel (Recommended)
1. Push this code to a GitHub repository.
2. Import the project in Vercel.
3. No build command is required for this ESM structure (Static).
4. Go to **Settings > Domains** to connect your domain.

### 2. Netlify
1. Drag and drop the root folder into the Netlify "Deploy" box.
2. Go to **Domain Settings** to point your custom domain.

### 3. Manual Server (Cpanel/Apache/Nginx)
1. Upload all files (index.html, index.tsx, components/, etc.) to your `public_html` or `/var/www/html` folder.
2. Ensure your server serves `.tsx` files as `application/javascript` if your browser has trouble resolving modules, though ESM usually works out of the box with modern browsers.

## Domain Setup (DNS)
Point your domain's A record or CNAME to the provider's values:
- **Vercel A Record**: `76.76.21.21`
- **Netlify CNAME**: `your-app-name.netlify.app`
