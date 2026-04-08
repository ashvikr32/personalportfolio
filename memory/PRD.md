# Ashvik Rajeev Portfolio - PRD

## Original Problem Statement
Convert an existing HTML portfolio into a modern React application. User provided `index.html` with 3 projects and 2 images. Requirements:
- Remove "exploded motor" image
- Add "top orifice model" image for Liquid Rocket Injector project
- Include ALL projects from original HTML

## User Personas
- Ashvik Rajeev: Sophomore MechE student at Northeastern University (Class of 2028)
- Target Audience: Potential employers, co-op recruiters for Fall 2026

## Core Requirements
- [x] Dark theme portfolio design
- [x] Hero section with name, tagline, and CTAs
- [x] Skills bar with relevant engineering skills
- [x] Projects section with all 3 projects
- [x] About section with bio and stats
- [x] Responsive design
- [x] Image lightbox functionality

## What's Been Implemented (Jan 2026)
- **Session 1**: Created React portfolio with dark theme, hero section, skills bar
- **Session 2**: Added Top Orifice Model image, removed exploded motor
- **Session 3**: Added all 3 projects from original HTML:
  1. Liquid Rocket Injector Assembly (with image)
  2. Tilt-a-Turt — Board Game Design (placeholder)
  3. Robotic Arm — Shoulder Actuator Subsystem (placeholder)

## Prioritized Backlog
### P0 (Critical) - DONE
- [x] All projects from HTML migrated

### P1 (High Priority)
- [ ] Add actual images for Tilt-a-Turt and Robotic Arm projects (user needs to provide)
- [ ] Add contact form or email CTA
- [ ] Resume download button

### P2 (Medium Priority)
- [ ] Individual project detail modals/pages
- [ ] Animation enhancements
- [ ] SEO meta tags

## Architecture
- Frontend: React.js
- Styling: Custom CSS with CSS variables (dark theme)
- No backend needed (static content)

## Files
- `/app/frontend/src/App.js` - Main portfolio component
- `/app/frontend/src/App.css` - All styling
