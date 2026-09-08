# Strategic Value Solutions - Landing Platform

The official web platform and landing page for **Strategic Value Solutions (SVS)**, delivering enterprise architecture, technology transformation, cloud security, DevOps, and product engineering.

---

## Key Features

- **Modern Architecture**: Built on Next.js 16 with Turbopack, React 19, and TypeScript.
- **Dynamic Content Routing**:
  - Service detail pages (`/service/[slug]`)
  - Case studies showcase (`/case-studies/[slug]`)
  - Thought leadership blog (`/blog/[slug]`)
  - News and press releases (`/news-events/[slug]`)
- **Contact & Inquiry System**:
  - Dedicated lead capture form with multi-service and budget selection.
  - Server-side validation via Next.js Route Handler (`/api/contact`).
  - Automated transactional notifications sent via Zoho SMTP with `nodemailer`.
  - Dark mode and light mode safe email template for clear readability across all email clients.
- **Polished User Experience**: Smooth animations and transitions powered by Framer Motion.
- **Responsive Design**: Tailored layouts for desktop, tablet, and mobile devices.

---

## Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: CSS Modules and Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Delivery**: Nodemailer + Zoho SMTP

---

## Getting Started

### Prerequisites

- Node.js 20 LTS or later
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Strategic-Value-Solutions/stratvals-landing.git
   cd stratvals-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and add your Zoho SMTP credentials:
   ```env
   SMTP_HOST=smtppro.zoho.com
   SMTP_PORT=587
   SMTP_USERNAME=suresh.a@stratvals.com
   SMTP_PASSWORD=your_password_here
   EMAIL_FROM=suresh.a@stratvals.com
   CONTACT_EMAIL_TO=contact@stratvals.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `SMTP_HOST` | Zoho SMTP server host | `smtppro.zoho.com` |
| `SMTP_PORT` | SMTP port (STARTTLS: 587, SSL: 465) | `587` |
| `SMTP_USERNAME` | SMTP authentication username / sender address | - |
| `SMTP_PASSWORD` | Zoho account or app-specific password | - |
| `EMAIL_FROM` | From address in outgoing emails | `suresh.a@stratvals.com` |
| `CONTACT_EMAIL_TO` | Target address receiving contact inquiries | `contact@stratvals.com` |

---

## Deployment Guides

### Option 1: Vercel (Fastest & Zero-Configuration)

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Under **Settings > Environment Variables**, add the SMTP environment variables listed above.
4. Click **Deploy**.
5. To use your custom domain from IONOS or another registrar, add your domain in Vercel settings and update your DNS records (A record pointing to `76.76.21.21` and CNAME for `www` to `cname.vercel-dns.com`).

---

### Option 2: IONOS VPS / Linux Server (Ubuntu 22.04 or 24.04)

Because the project includes an active Node.js API route (`/api/contact`), it can be hosted on an IONOS VPS using Node.js, PM2, and Nginx:

1. **Connect to your server via SSH**:
   ```bash
   ssh root@YOUR_SERVER_IP
   ```

2. **Install Node.js 20, Git, Nginx, and PM2**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs git nginx
   sudo npm install -g pm2
   ```

3. **Clone and setup the project**:
   ```bash
   cd /var/www
   git clone https://github.com/Strategic-Value-Solutions/stratvals-landing.git stratvals
   cd stratvals
   npm install
   ```

4. **Create the environment file**:
   ```bash
   nano .env.local
   ```
   Paste your production SMTP credentials, save, and exit (`CTRL + O`, `ENTER`, `CTRL + X`).

5. **Build and start with PM2**:
   ```bash
   npm run build
   pm2 start npm --name "stratvals" -- start -- -p 3000
   pm2 startup
   pm2 save
   ```

6. **Configure Nginx as reverse proxy**:
   Create `/etc/nginx/sites-available/stratvals`:
   ```nginx
   server {
       listen 80;
       server_name stratvals.com www.stratvals.com;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```
   Enable the site and reload Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/stratvals /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

7. **Install SSL certificate with Certbot**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d stratvals.com -d www.stratvals.com
   ```

8. **Update DNS in IONOS**:
   Point your domain's A record (`@` and `www`) to `YOUR_SERVER_IP`.

---

## Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Generates the production build and type-checks the code.
- `npm run start`: Runs the built Next.js application in production mode.
- `npm run lint`: Runs ESLint checks across the codebase.

---

## License

Copyright (c) 2026 Strategic Value Solutions. All rights reserved.
