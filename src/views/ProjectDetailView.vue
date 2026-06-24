<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'
import { projects } from '../data/projects'

// useRoute 取得目前網址資訊，例如 /projects/:id 裡面的 id。
const route = useRoute()

// 透過 route.params.id 找出對應作品；computed 讓資料依路由參數自動更新。
const project = computed(() => projects.find((item) => item.id === route.params.id))
</script>

<template>
  <section>
    <RouterLink class="secondary-link back-link" to="/projects">返回作品列表</RouterLink>

    <ProjectDetail v-if="project" :project="project" />

    <!-- v-else 處理找不到資料的情況，避免網址 id 錯誤時畫面空白。 -->
    <div v-else class="not-found">
      <p class="eyebrow">Not Found</p>
      <h1>找不到這個作品</h1>
      <p>目前網址中的作品 id 是「{{ route.params.id }}」，資料中沒有相符的作品。</p>
    </div>
  </section>
</template>

<style scoped>
.back-link {
  margin-bottom: 22px;
}

.back-link:hover {
  border-color: #cdb8ff;
  color: #5571c8;
  background: #f7fbff;
}

.not-found {
  border: 1px solid rgba(180, 211, 251, 0.86);
  border-radius: 18px;
  padding: 34px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 30px rgba(81, 124, 190, 0.09);
}

.not-found h1 {
  margin: 0;
  color: #1f2f46;
}

.not-found p:not(.eyebrow) {
  margin: 12px 0 0;
  color: #5b6b80;
}

@media (max-width: 720px) {
  .back-link {
    width: 100%;
    margin-bottom: 16px;
  }

  .not-found {
    border-radius: 16px;
    padding: 22px;
  }
}
</style>
