# <div>
  Brick &amp; Board Sandwich Co. | Sandwich Shop Demo
</div>

A fictional portfolio concept built with Next.js 16 App Router and React 19.

## Development

Use Node.js 26.12.0 (current stable release; pinned in .nvmrc). Node.js 24 LTS is also supported.

- npm ci
- npm run dev
- Open http://localhost:3000/sandwich-shop-demo/

## Build and publish

- npm run build
- npm run check
- Commit source changes and the generated docs/ directory, then push to main.

GitHub Pages continues to serve docs/ on main. Node.js runs the Next.js build; GitHub Pages serves the exported result and does not run a Node.js server. Existing .html links remain supported.

## Source

- app/: server-rendered pages, metadata, shared styles
- components/: React navigation, forms, accordion, reviews, motion lifecycle
- public/assets/: retained imagery and artwork
- tools/: static export publishing, validation, local preview

Forms demonstrate the interface only. They do not send, store, or subscribe submitted information.

## Photography

Large, locally hosted Pexels photographs are credited in [PHOTO-CREDITS.md](PHOTO-CREDITS.md) and the site footer. The images illustrate this fictional concept; they are not presented as the organisation’s actual staff, members, or client work.
