# Key Decisions

## 2026-02-12: Header Background Approach
**Decision**: Use pure CSS animated gradient + floating particles instead of a static image.
**Rationale**: User requested an AI-themed animated visual highlighting Finance / Innovation / International / Data / AI. A CSS-only approach is self-contained (no external image dependencies), loads instantly, and creates a living, tech-inspired effect with floating geometric shapes representing data nodes and network connections.
**Alternatives considered**:
- Unsplash photo URL (rejected — static, generic)
- Local image file (rejected — requires asset management)

## 2026-02-12: Icon Library
**Decision**: Font Awesome 6 via CDN.
**Rationale**: Widely used, free tier covers all needed icons, no build step required. CDN loading keeps the project simple (no npm/build tools).

## 2026-02-12: Animation Strategy
**Decision**: CSS animations + minimal inline JS (IntersectionObserver for scroll-triggered fade-ins).
**Rationale**: Keeps the project as two files (HTML + CSS) with a small inline script. No frameworks or dependencies beyond Font Awesome. Performant and works across modern browsers.
