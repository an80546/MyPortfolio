<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="skill-card">
    <div class="card-top">
      <h2>{{ skill.title }}</h2>
      <span>{{ skill.level }}</span>
    </div>
    <p>{{ skill.description }}</p>
    <ul>
      <li v-for="tool in skill.tools" :key="tool">{{ tool }}</li>
    </ul>
  </article>
</template>

<style scoped>
.skill-card {
  min-height: 245px;
  border: 1px solid rgba(180, 211, 251, 0.86);
  border-radius: 18px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 30px rgba(81, 124, 190, 0.09);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.skill-card:hover {
  border-color: #b9b5ff;
  transform: translateY(-5px);
  box-shadow: 0 22px 42px rgba(124, 150, 232, 0.18);
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

h2 {
  margin: 0;
  color: #1f2f46;
  font-size: 1.35rem;
}

.card-top span {
  border-radius: 999px;
  padding: 6px 10px;
  color: #5d72d8;
  background: linear-gradient(135deg, #edf7ff, #f6edff);
  font-size: 0.86rem;
  font-weight: 800;
  white-space: nowrap;
}

p {
  margin: 16px 0 0;
  color: #5b6b80;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

li {
  border: 1px solid rgba(205, 224, 251, 0.8);
  border-radius: 999px;
  padding: 7px 10px;
  color: #43546b;
  background: #f7fbff;
  font-size: 0.9rem;
  font-weight: 700;
}
</style>
