<script setup>
// defineProps 用來接收上層傳入的 profile 資料，讓元件可以重複使用不同資料。
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section class="profile-card">
    <div class="avatar" aria-hidden="true">
      <img class="profile-photo" src="/me.jpg" :alt="`${profile.name} 的個人照片`" />
    </div>

    <div class="profile-content">
      <p class="eyebrow">About Me</p>
      <h1>{{ profile.name }}</h1>
      <p class="title">{{ profile.title }}</p>
      <p class="intro">{{ profile.intro }}</p>

      <ul class="highlight-list">
        <!-- v-for 會依照陣列資料重複產生畫面；:key 幫助 Vue 追蹤每個項目。 -->
        <li v-for="item in profile.highlights" :key="item">{{ item }}</li>
      </ul>

      <div class="meta">
        <span>{{ profile.location }}</span>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-card {
  position: relative;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 36px;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(172, 207, 252, 0.82);
  border-radius: 22px;
  padding: 36px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 42px rgba(81, 124, 190, 0.12);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.profile-card::before,
.profile-card::after {
  position: absolute;
  top: 18px;
  width: 28px;
  height: 28px;
  content: "";
  border: 1px solid rgba(166, 198, 246, 0.75);
  background: linear-gradient(135deg, #e9f5ff, #f3eaff);
  transform: rotate(45deg);
}

.profile-card::before {
  right: 62px;
  border-radius: 9px 6px 12px 6px;
}

.profile-card::after {
  right: 30px;
  border-radius: 6px 9px 6px 12px;
}

.profile-card:hover {
  border-color: #b9b5ff;
  transform: translateY(-4px);
  box-shadow: 0 24px 54px rgba(118, 146, 224, 0.2);
}

.avatar {
  display: grid;
  width: 220px;
  height: 220px;
  place-items: center;
  border-radius: 22px;
  color: #ffffff;
  background:
    linear-gradient(135deg, rgba(127, 199, 255, 0.72), rgba(142, 140, 244, 0.9)),
    #75b8ff;
  box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.5);
  overflow: hidden;
}

.profile-photo {
  display: block;
  width: 220px;
  height: 220px;
  max-width: 100%;
  border-radius: 22px;
  object-fit: cover;
  object-position: center;
}

h1 {
  margin: 0;
  color: #1f2f46;
  font-size: 2.8rem;
  line-height: 1.12;
}

.title {
  margin: 10px 0 0;
  color: #4f8fe8;
  font-size: 1.18rem;
  font-weight: 800;
}

.intro {
  max-width: 660px;
  margin: 18px 0 0;
  color: #4f6074;
  font-size: 1.05rem;
}

.highlight-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
}

.highlight-list li {
  border-radius: 999px;
  padding: 8px 12px;
  color: #4567a6;
  background: #edf7ff;
  font-size: 0.92rem;
  font-weight: 700;
}

.meta {
  display: flex;
  gap: 18px;
  margin-top: 24px;
  color: #65768c;
  font-weight: 700;
}

.meta a {
  color: #5b8eed;
}
</style>
