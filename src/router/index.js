import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import SkillsView from '../views/SkillsView.vue'

// createRouter 建立 Vue Router 實例，createWebHistory 讓網址看起來像一般網站路徑。
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      // :id 是動態路由參數，詳細頁可以用 route.params.id 取得是哪一個作品。
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailView,
    },
  ],
})

export default router
