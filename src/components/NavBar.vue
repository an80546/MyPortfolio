<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <header class="nav-wrap">
    <nav class="nav-bar" aria-label="主要導覽">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">M</span>
        <span>鈞鈞 Portfolio</span>
      </RouterLink>

      <div class="nav-links">
        <RouterLink to="/">首頁</RouterLink>
        <RouterLink to="/skills">技能</RouterLink>
        <RouterLink to="/projects" :class="{ 'router-link-active': route.path.startsWith('/projects') }">
          作品
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(194, 218, 250, 0.75);
  background: rgba(250, 253, 255, 0.86);
  backdrop-filter: blur(14px);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1120px, calc(100% - 64px));
  min-height: 72px;
  margin: 0 auto;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #1f2f46;
  font-weight: 800;
}

.brand-mark {
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 14px;
  color: #ffffff;
  background: linear-gradient(135deg, #75b8ff, #9b8cf4);
  box-shadow: 0 12px 22px rgba(109, 160, 238, 0.28);
}

.brand-mark::after {
  position: absolute;
  right: -5px;
  bottom: -3px;
  content: "🐾";
  font-size: 0.78rem;
  filter: drop-shadow(0 2px 4px rgba(97, 132, 205, 0.2));
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-links a {
  position: relative;
  border-radius: 8px;
  padding: 9px 14px;
  color: #586a82;
  font-weight: 700;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #4f8fe8;
  background: #eef7ff;
  box-shadow: 0 8px 20px rgba(151, 138, 238, 0.14);
}

.nav-links a::after {
  position: absolute;
  right: 14px;
  bottom: 5px;
  left: 14px;
  height: 2px;
  content: "";
  border-radius: 999px;
  background: linear-gradient(90deg, #8fc8ff, #d9a8ff);
  opacity: 0;
  transform: scaleX(0.6);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  opacity: 1;
  transform: scaleX(1);
}

@media (max-width: 720px) {
  .nav-bar {
    width: min(100% - 32px, 560px);
    min-height: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 12px 0;
  }

  .brand {
    justify-content: center;
    gap: 10px;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
    border-radius: 12px;
  }

  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .nav-links a {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    text-align: center;
  }

  .nav-links a::after {
    right: 10px;
    left: 10px;
  }
}
</style>
