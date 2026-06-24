<script setup>
import { RouterLink } from 'vue-router'
import ProfileCard from '../components/ProfileCard.vue'
import { profile } from '../data/profile'
</script>

<template>
  <div class="home-view">
    <ProfileCard :profile="profile" />
    <section class="home-actions">
      <div>
        <p class="eyebrow">Portfolio Assignment</p>
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

@media (max-width: 720px) {
  .home-view {
    gap: 18px;
  }

  .home-actions {
    align-items: stretch;
    flex-direction: column;
    gap: 16px;
    border-radius: 16px;
    padding: 20px;
  }

  .action-links {
    flex-direction: column;
    gap: 10px;
  }

  .action-links a {
    width: 100%;
  }
}
</style>
