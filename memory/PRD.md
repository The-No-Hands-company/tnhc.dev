# The No Hands Company (TNHC) — Landing Page

## Problem Statement
Landing page for The No Hands Company: a radical experiment in autonomous software engineering. 100% AI-generated code, zero human intervention ("no hands on the keyboard"). Flagship product: Nexus Systems — an 80+ app open-source, self-hosted, federated alternative to big-tech cloud (Google Workspace, M365, iCloud).

## User Direction
- Landing can change often; must clearly communicate the TNHC brand.
- Lean HARD into "AI develops anything and everything" — pro-AI autonomous development, 0 human intervention.
- Flagship = Nexus Systems ecosystem.
- Award-worthy (Awwwards-level) motion & craft.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth scroll) + react-fast-marquee + @phosphor-icons/react. Single-page scroll (src/pages/Landing.jsx, section components in src/components/site/).
- Backend: FastAPI + MongoDB. Waitlist endpoints under /api.
- Design: Brutalist dark (#030303 void, #CCFF00 acid accent), Cabinet Grotesk headings, Satoshi body, JetBrains Mono labels. Grain overlay, tracing-beam cards.

## Implemented (2026-07-30)
- Sections: Header (glass nav), kinetic Hero (masked line reveal + parallax), editorial Marquee, numbered Manifesto (4 chapters), Cloud-OS Kernel diagram, Nexus 4-Pillars bento, Traditional-vs-NoHands comparison table, Waitlist footer + giant NEXUS wordmark.
- Backend: POST /api/waitlist (dedupe + email validation), GET /api/waitlist/count. Stored in Mongo `waitlist` collection.
- Verified: all endpoints via curl; full UI flow + waitlist submission via screenshots.

## Backlog / Next
- P1: Email notification on signup (Resend) + admin view of signups.
- P1: Live app directory for the 80+ Nexus apps.
- P2: Federation explainer animation / interactive node map.
- P2: Blog/changelog of AI-built releases.
