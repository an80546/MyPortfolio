<script setup>
import SkillCard from '../components/SkillCard.vue'
import { certifications } from '../data/certification'
import { skills } from '../data/skills'
</script>

<template>
  <section>
    <header class="page-header">
      <p class="eyebrow">Skills</p>
      <h1 class="page-title">技能</h1>
      <p class="page-description">
      <span>擁有的證照以及擅長的技能、領域</span>
      </p>
    </header>

    <div class="skills-grid">
      <!-- 將 skills 陣列用 v-for 轉成多張 SkillCard，並用 props 傳入單一 skill。 -->
      <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill" logo-only />
    </div>

    <section class="certifications-section" aria-labelledby="certifications-title">
      <header class="section-header">
        <p class="eyebrow">Certifications</p>
        <h2 id="certifications-title">證照</h2>
      </header>

      <div class="skills-grid">
        <SkillCard
          v-for="certification in certifications"
          :key="certification.id"
          :skill="certification"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
.certifications-section {
  margin-top: 42px;
}

.section-header {
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 0;
  color: #1f2f46;
  font-size: 1.65rem;
  line-height: 1.25;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

@media (max-width: 720px) {
  .certifications-section {
    margin-top: 34px;
  }

  .section-header {
    margin-bottom: 14px;
  }

  .section-header h2 {
    font-size: 1.42rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
