# Deployment Guide

This portfolio is built as a static Next.js site and can be deployed to various hosting platforms.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and provides the best deployment experience:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your `Portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

**That's it!** Your site will be live at `your-project.vercel.app`

**Custom Domain:** Add your own domain in Project Settings → Domains

### 2. Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy site"

**Custom Domain:** Site settings → Domain management

### 3. GitHub Pages

1. Build the site locally:
   ```bash
   npm run build
   ```

2. The static files are in the `out/` directory

3. Deploy to GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose the branch containing your `out/` folder
   - Save

**Note:** You may need to add a `.nojekyll` file to the `out/` directory

### 4. Manual Hosting (Any Static Host)

You can host the `out/` directory on any static file hosting service:

- **AWS S3 + CloudFront**
- **Google Cloud Storage**
- **Azure Static Web Apps**
- **DigitalOcean App Platform**
- **Cloudflare Pages**

Steps:
1. Run `npm run build`
2. Upload contents of `out/` directory to your hosting service
3. Configure your hosting to serve `index.html` for all routes

## Environment Variables

This portfolio doesn't require environment variables. All configuration is in `data/profile.json`.

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown by Vercel

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS configuration instructions

## Updating Content

To update your portfolio information:

1. Edit `data/profile.json`
2. Commit and push changes
3. Your hosting platform will automatically rebuild and deploy

Or manually:
```bash
npm run build
# Upload the new `out/` directory
```

## Performance Tips

✅ The site is already optimized:
- Static export (no server needed)
- Minimal JavaScript bundle
- TailwindCSS purges unused styles
- Next.js font optimization
- Responsive images

## Troubleshooting

### Build Fails

Check:
- Node.js version (16+)
- All dependencies installed: `npm install`
- No TypeScript errors: `npm run lint`

### Dark Mode Not Working

- Make sure JavaScript is enabled in the browser
- Check browser localStorage is not disabled

### Images Not Loading

- When using static export, make sure `images.unoptimized: true` is in `next.config.js` (already configured)

## Support

For issues with:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)

## Analytics (Optional)

To add analytics:

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In your return statement:
<Analytics />
```

### Plausible/Umami
Add the script tag to `app/layout.tsx` in the `<head>` section.
