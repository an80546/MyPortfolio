<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="app-shell">
    <RouterView />
  </main>
</template>

<style>
:root {
  color: #263447;
  background: #f4f8ff;
  font-family:
    Inter, "Noto Sans TC", "Microsoft JhengHei", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 1024px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(circle at 12% 8%, rgba(144, 203, 255, 0.28), transparent 32rem),
    radial-gradient(circle at 88% 18%, rgba(221, 196, 255, 0.22), transparent 30rem),
    linear-gradient(180deg, #f7fbff 0%, #eef5ff 52%, #d9caec 100%);
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.app-shell {
  width: min(1120px, calc(100% - 64px));
  margin: 0 auto;
  padding: 42px 0 64px;
}

.page-header {
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #4f8fe8;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.page-title {
  margin: 0;
  color: #1f2f46;
  font-size: 2.3rem;
  line-height: 1.2;
}

.page-description {
  max-width: 720px;
  margin: 12px 0 0;
  color: #5b6b80;
  font-size: 1.05rem;
}

.primary-link,
.secondary-link,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  padding: 11px 18px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.primary-link,
.button.primary {
  border: 0;
  color: #ffffff;
  background: linear-gradient(135deg, #6aaef7, #8d8cf4);
  box-shadow: 0 12px 24px rgba(96, 151, 237, 0.24);
}

.secondary-link,
.button.secondary {
  border: 1px solid #d7e6fb;
  color: #2c3d58;
  background: rgba(255, 255, 255, 0.88);
}

.primary-link:hover,
.secondary-link:hover,
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(151, 138, 238, 0.18);
}
</style>
