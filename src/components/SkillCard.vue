<script setup>
import { computed } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
  logoOnly: {
    type: Boolean,
    default: false,
  },
})

const logoText = computed(() => {
  return props.skill.title
    .split(/\s|\/|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
})

const hasLogo = computed(() => Boolean(props.skill.logoUrl))

const hasTools = computed(() => Array.isArray(props.skill.tools) && props.skill.tools.length > 0)
</script>

<template>
  <article class="skill-card" :class="{ 'skill-card--logo-only': logoOnly }">
    <template v-if="logoOnly">
      <div class="logo-frame" aria-hidden="true">
        <img v-if="hasLogo" :src="skill.logoUrl" :alt="`${skill.title} logo`" loading="lazy" />
        <span v-else>{{ logoText }}</span>
      </div>
      <div class="skill-summary">
        <h2>{{ skill.title }}</h2>
      </div>
    </template>

    <template v-else>
      <div class="card-top">
        <h2>{{ skill.title }}</h2>
      </div>
      <p>{{ skill.description }}</p>
      <ul v-if="hasTools">
        <li v-for="tool in skill.tools" :key="tool">{{ tool }}</li>
      </ul>
    </template>
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

.skill-card--logo-only {
  display: flex;
  min-height: 132px;
  align-items: center;
  gap: 18px;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 10px 18px rgba(81, 124, 190, 0.08);
}

.skill-card--logo-only:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 28px rgba(124, 150, 232, 0.14);
}

.card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
}

.logo-frame {
  display: flex;
  width: 58px;
  height: 58px;
  flex: 0 0 58px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(205, 224, 251, 0.9);
  border-radius: 14px;
  color: #5d72d8;
  background: linear-gradient(135deg, #edf7ff, #f6edff);
  font-size: 1rem;
  font-weight: 900;
}

.logo-frame img {
  width: 72%;
  height: 72%;
  object-fit: contain;
}

.skill-summary {
  min-width: 0;
}

h2 {
  margin: 0;
  color: #1f2f46;
  font-size: 1.35rem;
}

.skill-card--logo-only h2 {
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.3;
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

@media (max-width: 720px) {
  .skill-card {
    min-height: 0;
    border-radius: 16px;
    padding: 18px;
  }

  .skill-card:hover {
    transform: none;
  }

  .skill-card--logo-only {
    align-items: flex-start;
    gap: 14px;
    padding: 16px;
  }

  .logo-frame {
    width: 52px;
    height: 52px;
    flex-basis: 52px;
    border-radius: 12px;
  }

  h2,
  .skill-card--logo-only h2 {
    font-size: 1.08rem;
  }

  ul {
    margin-top: 16px;
  }

  li {
    font-size: 0.84rem;
  }
}
</style>
