# Mobile AWD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved adaptive mobile layout for the Vue portfolio while preserving the user's latest desktop changes.

**Architecture:** Keep the existing Vue components and data flow. Add local presentational state only where mobile content needs disclosure, and use scoped responsive CSS plus global shell rules to remove desktop-only width constraints.

**Tech Stack:** Vue 3 Composition API, Vue Router, Vite, scoped CSS, native buttons.

---

### Task 1: Home Profile Mobile Disclosure

**Files:**
- Modify: `src/components/ProfileCard.vue`

- [ ] Add local `isIntroExpanded` state.
- [ ] Render the long intro with a mobile-only expand/collapse button.
- [ ] Keep the desktop profile content fully visible.
- [ ] Add mobile CSS for one-column profile layout, smaller avatar, wrapped metadata, and collapsed intro.

### Task 2: Skills Mobile Layout

**Files:**
- Modify: `src/components/SkillCard.vue`

- [ ] Preserve the user's `logoOnly` skill-card mode for the main skills grid.
- [ ] Do not add skill description disclosure controls.
- [ ] Keep certification descriptions visible where the data already provides them.
- [ ] Make logo cards smaller and touch-friendly on narrow screens.

### Task 3: Responsive Shell And Pages

**Files:**
- Modify: `src/App.vue`
- Modify: `src/components/NavBar.vue`
- Modify: `src/components/ProjectCard.vue`
- Modify: `src/components/ProjectDetail.vue`
- Modify: `src/views/HomeView.vue`
- Modify: `src/views/ProjectsView.vue`
- Modify: `src/views/SkillsView.vue`
- Modify: `src/views/ProjectDetailView.vue`

- [ ] Remove the global `min-width: 1024px`.
- [ ] Add mobile shell spacing, page title scaling, and full-width button behavior.
- [ ] Convert nav, home actions, projects grid, skills grid, project cards, and project detail sections to mobile-friendly one-column layouts.
- [ ] Keep desktop layout behavior intact.

### Task 4: Verification

**Files:**
- No source files.

- [ ] Run `npm run build`.
- [ ] Review the final diff to confirm user desktop changes were preserved and mobile rules were added.
