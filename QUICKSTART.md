# Quick Start Guide 🚀

Welcome to your new portfolio! Here's everything you need to get started.

## View Your Portfolio

### Development Mode

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Production Build

```bash
npm run build
```

The static site will be exported to the `out/` directory.

## Customize Your Portfolio

### Update Your Information

Edit `data/profile.json` to change:
- ✏️ Name, role, and bio
- 📧 Contact information (email, GitHub)
- 💼 Work experience
- 🚀 Featured projects
- 🛠️ Skills and technologies

### Change Colors

Edit `tailwind.config.ts` to customize:
- Primary color (currently red `#E63946`)
- Dark mode colors
- Light mode colors

### Add More Projects

In `data/profile.json`, add projects to the `projects` array:

```json
{
  "title": "Your Project Name",
  "description": "Brief description of your project",
  "tech": ["Tech1", "Tech2", "Tech3"],
  "stars": 0,
  "url": "https://github.com/YourUsername/ProjectName",
  "featured": true
}
```

Set `featured: true` to show it in the Featured section.

## Deploy Your Portfolio

### Easiest: Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Done! Your site is live.

### Alternative: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Set build command: `npm run build`
5. Set publish directory: `out`
6. Deploy

See `DEPLOYMENT.md` for more options.

## Features

✨ **Already Included:**
- Dark/Light mode toggle
- Fully responsive design
- Smooth animations
- Fast, optimized build
- SEO-friendly
- Accessible (WCAG compliant)

## File Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Projects.tsx       # Projects grid
│   ├── Skills.tsx         # Skills list
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── ThemeProvider.tsx  # Theme context
├── data/
│   └── profile.json       # Your information
└── out/                   # Build output (after npm run build)
```

## Common Tasks

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Linter
```bash
npm run lint
```

### Preview Production Build
After building:
```bash
npx serve out
```

## Need Help?

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **TailwindCSS Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Deployment Guide:** See `DEPLOYMENT.md`

## Tips

💡 **Pro Tips:**
1. Keep your bio concise (2-3 sentences)
2. Feature your best 3-5 projects
3. List relevant skills for your target role
4. Update your GitHub profile before deploying
5. Add a custom domain for a professional look

🎨 **Design Tips:**
1. Use high-quality screenshots for projects
2. Keep consistent spacing
3. Test on mobile devices
4. Choose 1-2 accent colors max
5. Ensure good contrast in both themes

🚀 **Performance Tips:**
1. Optimize images before adding them
2. Keep dependencies minimal
3. Test Lighthouse scores
4. Enable compression on your host
5. Use a CDN for static assets

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
