# The Star Auto Service Website

A modern, responsive website for The Star Auto Service - an ASE-certified auto repair shop in Richardson, TX.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Tailwind CSS 4** for styling
- ♿ **Accessible** with ARIA labels and semantic HTML
- 📱 **Fully Responsive** design
- ⚡ **Performance Optimized** with dynamic imports
- 🔄 **Auto Loops Component** for showcasing services

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
└── components/
    └── AutoLoops.tsx    # Scrolling showcase component
```

## Components

### AutoLoops

A dynamic scrolling component that showcases services and features.

**Usage:**
```tsx
import AutoLoops from '@/components/AutoLoops';

<AutoLoops 
  items={['Service 1', 'Service 2']}
  speed={30}
  direction="left"
/>
```

**Props:**
- `items`: Array of strings to display (default: predefined services)
- `speed`: Animation speed in pixels per second (default: 30)
- `direction`: Scroll direction - 'left' or 'right' (default: 'left')
- `className`: Additional CSS classes

## SEO & Metadata

The website includes comprehensive SEO optimization:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data for local business

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- High contrast ratios

## Performance

- Dynamic component imports
- Optimized images with Next.js Image
- Minimal JavaScript bundle
- Static page generation

## Contact Information

**The Star Auto Service**
- Address: 900 E Belt Line Rd, Richardson, TX 75081
- Phone: (972) 231-2886
- Hours: Mon-Fri 8AM-6:30PM, Sat 8AM-4PM

## License

© 2024 The Star Auto Service. All rights reserved.
