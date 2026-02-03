# Dinn Institutional Website

A modern, performance-focused institutional website for Dinn built with Next.js 14, featuring a dark UI theme and comprehensive SEO optimization.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **CMS:** Sanity
- **Styling:** Vanilla CSS with custom design system
- **Deployment:** Ready for Vercel/Netlify

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Home page
│   ├── estoque/                 # Inventory solution page
│   ├── monitoramento-de-preco/  # Price monitoring page
│   ├── localizacao-de-produtos/ # Product location page
│   ├── estimativa-de-giro/      # Turnover estimation page
│   ├── estudos-e-pesquisas/     # Research page
│   ├── blog/                    # Blog listing & posts
│   ├── contato/                 # Contact page
│   ├── sitemap.ts               # SEO sitemap
│   └── robots.ts                # Robots.txt
├── components/                   # Reusable components
│   ├── Header.tsx               # Fixed header with navigation
│   ├── Footer.tsx               # Footer with links & CTA
│   ├── Hero.tsx                 # Hero section component
│   ├── CTASection.tsx           # Call-to-action sections
│   ├── BenefitsCards.tsx        # Benefits grid component
│   ├── FAQ.tsx                  # Accordion FAQ component
│   └── HowItWorks.tsx           # Step-by-step component
├── sanity/                       # Sanity CMS configuration
│   ├── schemas/post.ts          # Blog post schema
│   └── lib/
│       ├── client.ts            # Sanity client
│       └── queries.ts           # GROQ queries
└── public/                       # Static assets
```

## 🎨 Design System

The site uses a custom dark theme with the following colors:

- **Background Primary:** `#1F2328`
- **Background Secondary:** `#2E343B`
- **Accent/CTA:** `#5625F2`
- **Text Primary:** `#FFFFFF`
- **Text Secondary:** `#B8BFC7`

## 🛠️ Setup & Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity CMS Setup

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Add environment variables:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Deploy Sanity schema:

```bash
cd sanity
npm install
npm run deploy
```

## 📄 Pages Overview

### Core Pages
- **Home (`/`)**: Hero, pain points, features, purpose, social proof, FAQ, CTA
- **Contact (`/contato`)**: Demo request form

### Solution Pages
All solution pages follow the same structure:
1. Hero with benefit
2. Problem statement
3. What we deliver
4. How it works (steps)
5. Benefits (cards)
6. Use cases
7. FAQ
8. Final CTA

- `/estoque` - Inventory Management
- `/monitoramento-de-preco` - Price Monitoring
- `/localizacao-de-produtos` - Product Location
- `/estimativa-de-giro` - Turnover Estimation (weekly & monthly)
- `/estudos-e-pesquisas` - Custom Research (with GLP-1 example)

### Blog
- `/blog` - Blog listing with search and category filters
- `/blog/[slug]` - Individual blog posts with JSON-LD Article schema

## 🔍 SEO Features

- ✅ Comprehensive metadata (title, description, OG, Twitter)
- ✅ JSON-LD structured data (Organization, Article)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized for Core Web Vitals

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Placeholders

All content currently uses placeholders marked as "(Texto será fornecido)". Replace these with actual copy before launch.

## 🎯 Performance Targets

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 📞 Support

For questions or issues, contact the DiWE Ventures Studio team.

---

**Built with ❤️ by DiWE Ventures Studio**
