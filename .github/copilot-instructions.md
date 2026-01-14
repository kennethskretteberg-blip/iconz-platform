# ICONZ Platform – Copilot Instructions

## Locked decisions
- URL structure must be /{country}/{season}/...
- Platform sections are fixed: Public, Community, Brand Portal, Retailer Portal (burn), Creator Apply, Admin.
- Single responsive web app (no separate mobile app).
- Prototype uses Next.js Middleware Basic Auth.

## Scope (V1.1)
- UI/UX polish and pitch-ready prototype only.
- No payments, no production database, no real authentication.
- Use mock/static data only.

## Tech rules
- Next.js App Router with TypeScript.
- Tailwind CSS for all styling.
- Prefer server components; use client components only when required.
- Keep components small and composable.

## Design direction (Premium / Neo-Luxe)
- Dark base theme.
- High contrast typography.
- Generous spacing and grid-based layout.
- Card-first design inspired by premium trading cards.
- Avoid loud gradients and excessive animations.

## Coding standards
- No hardcoded magic numbers.
- Reusable components under /components.
- Shared helpers under /lib.
- Mock data under /data.

## Output expectations
- Production-quality code.
- Follow existing patterns in this repository.
