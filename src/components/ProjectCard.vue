<script setup>
// 子元件用 props 接收單一作品資料與收藏狀態，畫面內容由上層資料決定。
defineProps({
  project: {
    type: Object,
    required: true,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
})

// defineEmits 宣告子元件會發出的事件；ProjectCard 不直接換頁，而是通知上層處理。
const emit = defineEmits(['view-project', 'toggle-favorite'])
</script>

<template>
  <article class="project-card">
    <div>
      <p class="category">{{ project.category }}</p>
      <h2>{{ project.title }}</h2>
      <p class="summary">{{ project.summary }}</p>

      <ul class="tag-list">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>

    <div class="card-actions">
      <!-- 點擊後 emit 作品 id 給 ProjectsView，由上層用 router.push 前往詳細頁。 -->
      <button class="button primary" type="button" @click="emit('view-project', project.id)">
        查看作品
      </button>
      <button
        class="button secondary favorite-button"
        :class="{ active: isFavorite }"
        type="button"
        @click="emit('toggle-favorite', project.id)"
      >
        <!-- Vue 的 class binding 與文字插值可依照收藏狀態即時改變按鈕樣式與文字。 -->
        {{ isFavorite ? '取消收藏' : '收藏' }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  display: flex;
  min-height: 320px;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border: 1px solid rgba(180, 211, 251, 0.86);
  border-radius: 18px;
  padding: 26px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 30px rgba(81, 124, 190, 0.09);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.project-card::after {
  position: absolute;
  top: 18px;
  right: 20px;
  content: "🐾";
  color: rgba(147, 178, 239, 0.42);
  font-size: 1.05rem;
}

.project-card:hover {
  border-color: #b9b5ff;
  transform: translateY(-5px);
  box-shadow: 0 22px 42px rgba(124, 150, 232, 0.18);
}

.category {
  margin: 0;
  color: #4f8fe8;
  font-size: 0.9rem;
  font-weight: 800;
}

h2 {
  margin: 8px 0 0;
  color: #1f2f46;
  font-size: 1.45rem;
}

.summary {
  margin: 14px 0 0;
  color: #5b6b80;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.tag-list li {
  border: 1px solid rgba(205, 224, 251, 0.8);
  border-radius: 999px;
  padding: 7px 10px;
  color: #4b5f7b;
  background: #f7fbff;
  font-size: 0.86rem;
  font-weight: 700;
}

.card-actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.button {
  cursor: pointer;
}

.favorite-button.active {
  border-color: #d7b7ff;
  color: #7351bd;
  background: #fbf5ff;
  box-shadow: 0 10px 22px rgba(189, 154, 232, 0.18);
}
</style>
