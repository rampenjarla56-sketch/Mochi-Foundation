# The Mochi Foundation Website

A beautiful, responsive website for The Mochi Foundation built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Blue & green Mochi branding
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Homepage with 12 sections
- ✅ Get Support page
- ✅ Chapters page
- ✅ Contact page
- ✅ Microsoft Forms integration

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Build for Production
```bash
npm run build
npm start
```

## Update Form URLs

In your files, replace:
- `[YOUR_FORM_ID]` - Pet support form URL
- `[YOUR_CHAPTER_FORM_ID]` - Chapter application form URL

Search for these in:
- `app/get-support/page.tsx`
- `app/chapters/page.tsx`

## Update Contact Info

In `app/contact/page.tsx`, update:
- Email address
- Location/city
- Response time

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Deploy

Or use: `vercel` command in terminal
