<script setup>
import { RouterLink } from 'vue-router'
import ProfileCard from '../components/ProfileCard.vue'
import { profile } from '../data/profile'
</script>

<template>
  <div class="home-view">
    <ProfileCard :profile="profile" />
    <p class="home-tagline">無論對此生的決定為何，一定要真誠的對待自己。</p>
    <section class="home-actions">
      <div>
        <p class="eyebrow">Portfolio Assignment</p>
        <h2>用 Vue 元件、props、emits 與 router 完成的個人網站</h2>
      </div>
      <div class="action-links">
        <RouterLink class="primary-link" to="/projects">瀏覽作品</RouterLink>
        <RouterLink class="secondary-link" to="/skills">查看技能</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  display: grid;
  gap: 22px;
}

.home-tagline {
  width: fit-content;
  margin: -4px 0 4px;
  border: 1px solid rgba(205, 224, 251, 0.82);
  border-radius: 999px;
  padding: 10px 16px;
  color: #4d6382;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 12px 24px rgba(124, 150, 232, 0.08);
  font-weight: 700;
}

.home-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  border: 1px solid rgba(180, 211, 251, 0.84);
  border-radius: 18px;
  padding: 26px 30px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 14px 30px rgba(81, 124, 190, 0.08);
}

h2 {
  max-width: 650px;
  margin: 0;
  color: #1f2f46;
  font-size: 1.45rem;
}

.action-links {
  display: flex;
  flex-shrink: 0;
  gap: 12px;
}
</style>
