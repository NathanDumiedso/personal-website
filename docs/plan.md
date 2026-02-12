# Plan: Enhance Personal Website with Visuals, Animations & New Sections

## Context
The current website is functional but static and plain. The goal is to make it feel alive and professional by adding an animated header background, animations/transitions throughout, and two new content sections (Achievements and Actively Learning).

## Files to Modify
- `index.html`
- `styles.css`

No new files needed.

---

## Changes

### 1. Icon Library (Font Awesome 6 via CDN)
- Add `<link>` to Font Awesome in `<head>`
- Use themed icons throughout: sections headings, achievement categories, learning topics

### 2. Animated Header Background (Pure CSS — no image files)
- **Animated gradient**: slowly shifting dark gradient (deep blue → teal → indigo) using `@keyframes` on `background-position`
- **Floating particles**: 6-8 `<div>` elements absolutely positioned in the header, styled as translucent circles/hexagons, animated with `@keyframes` (float upward, drift sideways, fade in/out). These represent data points / network nodes — evoking AI/Data/Finance themes
- **Result**: a living, tech-inspired backdrop behind the name — no external images needed, fully self-contained

### 3. CSS Animations & Transitions
- **Scroll fade-in**: Inline `<script>` (~15 lines) using `IntersectionObserver` to add `.visible` class to sections on scroll. CSS handles opacity 0→1, translateY 20px→0 transition
- **Header text**: fade-in + slide-up on page load via `@keyframes`
- **Nav links**: underline slide-in on hover (pseudo-element)
- **Skill tags**: scale-up + box-shadow on hover
- **Achievement cards**: lift + shadow on hover
- **Language badges**: subtle color shift on hover
- **Learning cards**: pulsing glow border animation

### 4. New Section: Past Main Achievements (after Skills)
Three category cards with icons:

**Sports** (`fa-person-running`)
- Marathon Moscow
- EcoTrail 45km
- Semi-marathon below 1h25

**Family** (`fa-heart`)
- 1 wife and three happy boys

**Excel Modeling** (`fa-file-excel`)
- Inventory tool for all IBM Z systems
- Strategic cashflow split tool — 300+ operating units (Bourbon)
- Costs allocation tool — 20+ countries (BNP Paribas)
- PV project value split tool — 50+ projects (Solek)
- VBA search/navigation app for large databases
- Custom Excel add-in for complex model navigation

### 5. New Section: Actively Learning (after Achievements, before Contact)
Animated cards with icons + pulsing glow:
- Artificial Intelligence (`fa-brain`)
- Machine Learning (`fa-gears`)
- Claude (`fa-robot`)
- AI Agents (`fa-network-wired`)

### 6. Nav Update
Add "Achievements" and "Learning" links.

---

## Verification
- Open `index.html` in a browser
- Confirm animated gradient + floating particles in header
- Scroll down — sections should fade in smoothly
- Hover over skill tags, nav links, achievement cards — check transitions
- Verify all 3 achievement categories with correct content
- Verify 4 "Actively Learning" cards with pulsing glow
- Resize browser window — check responsive behavior
