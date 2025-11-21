# Design Guidelines: Neon Cyberpunk Personal Notes Website

## Design Approach
**Reference-Based: Cyberpunk/Neon Aesthetic**
Drawing inspiration from cyberpunk interfaces, synthwave design, and modern tech portfolios with glowing effects. Think Blade Runner meets modern portfolio sites with flat design principles.

## Core Design Principles
1. **Neon Glow Effects**: Utilize CSS glowing borders, text shadows, and hover effects for cyberpunk feel
2. **Geometric Flat Design**: Clean, flat UI elements with sharp edges and minimal gradients
3. **Tech Grid Patterns**: Subtle grid overlays and geometric accent elements
4. **Depth Through Glow**: Create hierarchy using glow intensity rather than shadows

## Typography System
- **Primary Font**: "Orbitron" or "Rajdhani" (Google Fonts) - geometric, futuristic sans-serif for headers
- **Secondary Font**: "Inter" or "Space Mono" - clean monospace for body text and technical elements
- **Hierarchy**:
  - Hero/Screen Name: text-5xl to text-7xl, bold weight, neon glow effect
  - Section Headers: text-3xl to text-4xl, uppercase tracking-wide
  - Subsection Titles: text-xl to text-2xl, medium weight
  - Body Text: text-base, regular weight with increased line-height (1.7)
  - Code/Technical: text-sm, monospace font

## Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, and 16 consistently (p-4, m-8, gap-6, etc.)

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Side padding: px-6 on mobile, px-8 on desktop
- Vertical rhythm: py-16 to py-24 for sections

## Component Library

### Navigation
- Fixed top navigation with translucent backdrop blur
- Horizontal layout with logo/screen name on left
- Menu items with neon underline on hover/active state
- Mobile: Hamburger menu with slide-in panel from right

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large animated screen name with pulsing neon glow
- Subtitle/tagline beneath
- Geometric accent elements (floating hexagons, grid lines)
- Call-to-action buttons with neon borders

### Content Sections (Diary, Portfolio, Gallery, Guestbook)
**Diary Entries**:
- Card-based timeline layout
- Each entry: date badge, title, content preview, "read more" link
- Single column on mobile, staggered two-column on desktop

**Portfolio/Works**:
- Masonry grid layout (2 columns mobile, 3-4 desktop)
- Each work card: image thumbnail, title overlay, tech tags
- Click to expand modal with full details

**Gallery/Drawings**:
- Grid layout with equal-height squares
- Lightbox functionality for full-size viewing
- Hover effect: neon border glow

**Guestbook**:
- Input form at top with neon-bordered fields
- Message cards below in reverse chronological order
- Each message: avatar placeholder, name, timestamp, message text

### Form Elements
- Input fields: neon-bordered with focus glow effect
- Buttons: outlined style with glow on hover, backdrop blur when over images
- Textareas: matching border style, auto-expanding height

### Cards & Containers
- Border: 2px neon-colored outlines, no fill backgrounds or subtle dark fills
- Padding: p-6 to p-8 internally
- Hover state: increased glow intensity, slight scale transform (1.02)

### Footer
- Full-width section with grid overlay background
- Three columns: About, Quick Links, Social/Contact
- Social icons with neon glow on hover
- Copyright notice in small text

## Images Strategy

**Hero Background**: Yes - use a subtle cyberpunk cityscape or abstract geometric pattern as a low-opacity background overlay. Keep it dark and atmospheric.

**Portfolio/Works Section**: Include 6-8 placeholder work thumbnails showing creative projects

**Gallery Section**: Include 8-12 art/drawing placeholders in grid format

**Avatar/Profile**: Small circular profile image in introduction section with neon ring border

**Image Treatment**: All images should have subtle scan-line overlay effect for retro-tech feel

## Animations
**Minimal & Purposeful**:
- Hero screen name: subtle pulsing glow (2s loop)
- Navigation items: smooth underline slide on hover
- Cards: gentle glow intensity change on hover (0.3s transition)
- Page transitions: fade-in on scroll for sections (once only, no repeating)

## Accessibility
- Maintain readable contrast despite neon aesthetic (ensure text legibility)
- All interactive elements have clear focus states with neon outlines
- Consistent keyboard navigation throughout
- Form inputs have proper labels and ARIA attributes
- Alt text for all images and icons

## Technical Requirements
- Use Heroicons for all iconography (CDN link)
- Google Fonts for typography (Orbitron + Space Mono recommended)
- Responsive breakpoints: mobile-first, tablet (md:), desktop (lg:, xl:)
- All neon effects using CSS box-shadow and text-shadow (no custom SVGs)