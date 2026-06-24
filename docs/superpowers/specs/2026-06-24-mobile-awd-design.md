# Mobile AWD Design

## Goal

Create an adaptive mobile experience for the Vue portfolio. The mobile version should avoid horizontal scrolling, reduce long-page fatigue, and make the site feel like a project showcase rather than a compressed desktop resume.

## Current Context

The site is a Vue 3 and Vite portfolio with routes for home, skills, projects, and project detail pages. The current desktop layout uses fixed multi-column grids and `body { min-width: 1024px; }`, which blocks real mobile rendering. Main surfaces are `ProfileCard`, `SkillCard`, `ProjectCard`, `ProjectDetail`, `NavBar`, and the route views.

## Recommended Approach

Use adaptive responsive rules instead of a separate mobile app. Desktop behavior remains intact, while mobile breakpoints introduce different content rhythm:

- Remove the desktop-only body minimum width.
- Use smaller mobile shell spacing and fluid widths.
- Convert navigation, profile, skills, projects, and detail layouts to one-column mobile arrangements.
- Add controlled expand/collapse behavior where long content makes mobile scanning harder.

This is better than a pure grid collapse because the home and skills pages need mobile-specific content pacing. It is also lower risk than a full redesign because it preserves the existing routes, data modules, and desktop visual identity.

## Mobile Behavior

### Navigation

On mobile, the nav becomes a compact two-row header. The brand stays visible, and route links become thumb-friendly controls below it. The sticky header remains, but vertical height is kept modest.

### Home

The profile card becomes single-column. The photo appears above the name and role. The long intro shows an initial summary, followed by a native button to expand or collapse the full text. Highlights and contact metadata wrap cleanly into mobile rows.

### Skills

Skill cards show the title, level, and tool tags first. The description is hidden behind an expand button on mobile. Desktop keeps the full card content visible.

### Projects

Project cards become a single-column list with shorter spacing and full-width action buttons. The favorite counter stacks below the page title so it does not squeeze the header.

### Project Detail

The heading, metadata, tags, features, and result sections stack vertically. The year and role metadata move below the title area, and feature items become a one-column list.

## Components And Data

No data model changes are required. Expand/collapse state can live inside `ProfileCard` and each `SkillCard` because the state is purely presentational. Existing props and events should remain unchanged.

## Testing

Run `npm run build` after implementation. Verify mobile layouts at narrow widths around 360px and 430px, plus a desktop width to confirm existing layouts were not broken. Check that expanding the home intro and skill descriptions works with keyboard-accessible buttons.

## Open Assumptions

The mobile version should keep all current content available. The home intro and skill descriptions may be collapsed by default on mobile, but expanded content should still reveal the original text.
