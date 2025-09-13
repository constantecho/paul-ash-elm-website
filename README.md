# Ash & Elm Contracting Website

Professional finish carpentry and home improvement services website built with Astro.

## Business Information

- **Company**: Ash & Elm Contracting
- **Location**: Virden, Manitoba, Canada
- **Phone**: (204) 512-0866
- **Email**: paul@ash-elm.com
- **GST**: 81250 2235 RT0001
- **Website**: https://ash-elm.ca

## Services

- Finish Carpentry (trim, casing, baseboards)
- Doors & Hardware Installation
- Custom Shelving & Built-ins
- Deck & Fence Repairs
- Small Renovations & Repairs
- Flooring Repairs & Transitions

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open http://localhost:4321 to view the site.

### Production Build

```bash
npm run build
```

Built files are output to `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Configuration

### Business Details

Update business information in `src/consts.ts`:

- Phone number (both raw and display format)
- Email address
- GST number
- Service area towns
- Services offered
- Payment methods

### Contact Form

The contact form uses a mailto fallback by default. To set up a proper form handler:

1. **Netlify Forms** (recommended for Netlify hosting):
   - Change form action to `netlify` in `src/pages/contact.astro`
   - Add `data-netlify="true"` attribute to the form

2. **Formspree**:
   - Sign up at formspree.io
   - Replace the mailto action with your Formspree endpoint
   - Update the JavaScript form handler

### SEO & Metadata

- Site title and description are in `src/consts.ts`
- Page-specific metadata can be updated in each `.astro` file
- JSON-LD structured data is automatically generated for the home page
- Sitemap is automatically generated at `/sitemap-index.xml`

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment variables: None required for basic functionality

### Vercel

1. Import project from GitHub
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

### Manual Hosting

1. Run `npm run build`
2. Upload contents of `dist/` directory to your web server
3. Configure server to serve `/index.html` for 404s (SPA fallback)

## Features

- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with structured data
- ✅ Accessible (semantic HTML, keyboard navigation)
- ✅ Fast loading (static site, optimized assets)
- ✅ Contact form with mailto fallback
- ✅ Service area and business information
- ✅ Professional contractor branding

## Performance

- Lighthouse Score: 95+ (mobile)
- Static site generation for fast loading
- System fonts for performance
- Optimized images and minimal JavaScript

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported
- Mobile browsers fully supported

## License

Private - All rights reserved by Ash & Elm Contracting

## Support

For technical support or modifications, contact the developer or refer to [Astro documentation](https://docs.astro.build/).