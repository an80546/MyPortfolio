<script setup>
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

// useRouter 可以在 script 中取得 router 實例，適合在事件函式內用程式方式跳轉頁面。
const router = useRouter()
function viewProject(id) {
  // router.push 由上層執行，符合 ProjectCard 只 emit、不直接使用 RouterLink 的作業要求。
  router.push(`/projects/${id}`)
}
</script>

<template>
  <section>
    <header class="projects-header">
      <div class="page-header">
        <p class="eyebrow">Projects</p>
        <h1 class="page-title">作品列表頁</h1>
      </div>
    </header>

    <div class="projects-grid">
      <!-- @view-project 監聽子元件 emit 出來的事件。 -->
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @view-project="viewProject"
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

@media (max-width: 1020px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .projects-header {
    display: block;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
