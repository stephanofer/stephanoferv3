# Copilot Instructions - Stephano Fernandez Portfolio

## Project Overview
This is a personal portfolio built with **Astro 5** for showcasing projects and professional experience. The site uses a content-driven architecture with Markdown-based project entries and focuses on Spanish-language content.

## Architecture & Key Patterns

### Content Management
- **Content Collections**: Projects are managed via Astro's content collections in `src/content/projects/*.md`
- **Schema**: Defined in `src/content.config.ts` with required fields: `title`, `description`, `technologies`, `image`, `featured`, `publishDate`, `status`, `order`
- **Project Organization**: Featured projects display prominently, others are sorted by `order` field

### Component Structure
- **Layout Hierarchy**: `Layout.astro` → sections (`Hero`, `Projects`, `Aboutme`) → components
- **Path Aliases**: Use `@/*` for all imports (configured in `tsconfig.json`)
- **Icon System**: SVG icons stored in `src/icons/` and imported directly into components
- **Technology Pills**: Use `TechnologyPill.astro` with icon slots for consistent tech display

### Styling Conventions
- **CSS Variables**: Font sizes use clamp() functions defined in `:root` (`--fs-sm`, `--fs-base`, etc.)
- **Custom Fonts**: "Inter" (body) and "Clash" (headings/accents) loaded via `@font-face`
- **Component-Scoped Styles**: Each Astro component contains its own `<style>` block
- **Dark Theme**: Primary background `#141414` used consistently

### Development Workflow
```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

### Deployment Configuration
- **Cloudflare Pages**: Configured via `wrangler.jsonc` with custom domain `stephanofer.com`
- **Static Generation**: No SSR, uses Astro's static site generation
- **SEO Integration**: `astro-seo` package handles meta tags, configured in `MainHead.astro`

## Project-Specific Patterns

### Adding New Projects
1. Create `.md` file in `src/content/projects/`
2. Include all required frontmatter fields (see `bytek.md` example)
3. Set `featured: true` for homepage display
4. Use descriptive `order` number for positioning

### Technology Icons
- Map technology names to specific icons in `Project.astro`
- Supported: "Astro", "tailwind", "sentry", "workers", "React", "NestJS", etc.
- Icons must exist in `src/icons/` directory

### Component Props Interface
Always define TypeScript interfaces for component props:
```typescript
interface Props {
  title: string;
  description: string;
  // ... other props
}
```

### Translation/Localization
- Content is primarily in Spanish
- Default page title: "Stephano Fernandez - Desarrollador Fullstack"
- SEO keywords focus on Spanish terms and development technologies

## File Organization Principles
- Components: Reusable UI elements in `src/components/`
- Sections: Page-level sections in `src/sections/`
- Content: Markdown content in `src/content/`
- Icons: SVG assets in `src/icons/`
- Layouts: Page templates in `src/layouts/`