# Strategic Value Solutions - Agent Guidelines

This repository hosts the official landing page and web platform for Strategic Value Solutions (SmartEditor Landing).

## Architecture & Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Library**: React 19
- **Language**: TypeScript (strict mode)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: Nodemailer integrated with Zoho SMTP
- **Styling**: CSS Modules with global CSS variable design tokens

## Directory Structure
- `src/app/`: App router page routes, layouts, and API routes.
  - `src/app/api/contact/route.ts`: API endpoint processing contact form submissions via Zoho SMTP.
  - `src/app/service/[slug]/`: Dynamic service detail pages.
  - `src/app/case-studies/[slug]/`: Dynamic case study detail pages.
  - `src/app/blog/[slug]/`: Dynamic blog post pages.
  - `src/app/news-events/[slug]/`: Dynamic news and press release pages.
- `src/components/`: Reusable modular components (e.g., ContactFormSection, Header, Footer, Hero, ServiceCards).
- `src/data/`: Structured content and mock data for services, case studies, blogs, and partners.
- `public/`: Static images, company logos, and icons.

## Conventions & Rules
1. **Server vs Client Components**: Use React Server Components by default. Include `"use client";` only when components require hooks, event listeners, or Framer Motion animations.
2. **Typography**: Always use standard hyphens (-) or colons (:) instead of em dashes or en dashes.
3. **Environment Configuration**:
   - Never commit sensitive credentials or `.env.local` files to git.
   - Use `.env.example` as the canonical template for required environment variables.
4. **Email Routing**:
   - Production inquiries are routed to `contact@stratvals.com`.
   - Contact form notifications must maintain light and dark mode compatibility with high contrast styling.
5. **Quality & Validation**:
   - Always run `npm run build` before pushing to ensure zero TypeScript or build regressions.
