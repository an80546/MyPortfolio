<script setup>
import SkillCard from '../components/SkillCard.vue'
import { skills } from '../data/skills'
</script>

<template>
  <section>
    <header class="page-header">
      <p class="eyebrow">Skills</p>
      <h1 class="page-title">技能頁</h1>
      <p class="page-description">
      <span>這裡使用 v-for 渲染技能資料，並透過 props 將每一筆技能傳入 SkillCard 元件。</span>
      <br>
      <span>擁有的證照以及擅長的技能、領域</span>
      </p>
    </header>

    <div class="skills-grid">
      <!-- 將 skills 陣列用 v-for 轉成多張 SkillCard，並用 props 傳入單一 skill。 -->
      <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" />
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}
</style>
