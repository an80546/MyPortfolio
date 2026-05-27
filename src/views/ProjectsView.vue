<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

// useRouter 可以在 script 中取得 router 實例，適合在事件函式內用程式方式跳轉頁面。
const router = useRouter()
// ref 建立響應式資料；favoriteIds 改變時，畫面上的收藏數與按鈕狀態會自動更新。
const FAVORITE_STORAGE_KEY = 'portfolio-favorite-projects'

function loadFavoriteIds() {
  try {
    const savedIds = JSON.parse(localStorage.getItem(FAVORITE_STORAGE_KEY) || '[]')
    return Array.isArray(savedIds) ? savedIds : []
  } catch {
    return []
  }
}

const favoriteIds = ref(loadFavoriteIds())

// computed 會根據 favoriteIds 自動重新計算收藏數，避免在多處手動同步數字。
const favoriteCount = computed(() => favoriteIds.value.length)

watch(favoriteIds, (ids) => {
  localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(ids))
})

function viewProject(id) {
  // router.push 由上層執行，符合 ProjectCard 只 emit、不直接使用 RouterLink 的作業要求。
  router.push(`/projects/${id}`)
}

function toggleFavorite(id) {
  if (favoriteIds.value.includes(id)) {
    favoriteIds.value = favoriteIds.value.filter((favoriteId) => favoriteId !== id)
    return
  }

  favoriteIds.value = [...favoriteIds.value, id]
}
</script>

<template>
  <section>
    <header class="projects-header">
      <div class="page-header">
        <p class="eyebrow">Projects</p>
        <h1 class="page-title">作品列表頁</h1>
        <p class="page-description">
          ProjectCard 透過 emits 通知上層要查看作品或切換收藏；真正的路由跳轉由本頁處理。
        </p>
      </div>

      <div class="favorite-counter">🐾 已收藏：{{ favoriteCount }} 個</div>
    </header>

    <div class="projects-grid">
      <!-- @view-project 與 @toggle-favorite 監聽子元件 emit 出來的事件。 -->
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :is-favorite="favoriteIds.includes(project.id)"
        @view-project="viewProject"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
}

.favorite-counter {
  flex-shrink: 0;
  border: 1px solid rgba(183, 205, 255, 0.9);
  border-radius: 999px;
  padding: 14px 18px;
  color: #5571c8;
  background: linear-gradient(135deg, #eff8ff, #fbf2ff);
  box-shadow: 0 12px 24px rgba(124, 150, 232, 0.1);
  font-weight: 900;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
</style>
