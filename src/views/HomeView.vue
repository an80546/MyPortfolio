<script setup>
import ProfileCard from '../components/ProfileCard.vue'
import { profile } from '../data/profile'
</script>

<template>
  <div class="home-view">
    <ProfileCard :profile="profile" />
  </div>
</template>

<style scoped>
.home-view {
  display: grid;
  min-height: calc(100vh - 178px);
  align-items: center;
}

@media (max-width: 720px) {
  .home-view {
    min-height: 0;
    align-items: stretch;
  }
}
</style>
