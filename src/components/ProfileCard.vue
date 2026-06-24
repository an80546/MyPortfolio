<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

// defineProps 用來接收上層傳入的 profile 資料，讓元件可以重複使用不同資料。
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

const isIntroExpanded = ref(false)
</script>

<template>
  <section class="profile-card">
    <div class="profile-rail">
      <div class="avatar" aria-hidden="true">
        <img class="profile-photo" src="/me.jpg" :alt="`${profile.name} 的個人照片`" />
      </div>

      <div class="contact-list" aria-label="Contact me">
        <span class="contact-label">Contact me</span>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <span>{{ profile.location }}</span>
        <span>Tel : {{ profile.phone }}</span>
      </div>
    </div>

    <div class="profile-content">
      <p class="eyebrow">About Me</p>
      <h1>{{ profile.name }}</h1>
      <p class="title">{{ profile.title }}</p>
      <div class="profile-actions" aria-label="Portfolio links">
        <RouterLink class="primary-link" to="/projects">作品</RouterLink>
        <RouterLink class="secondary-link" to="/skills">技能</RouterLink>
      </div>
      <p class="intro" :class="{ 'intro--collapsed': !isIntroExpanded }">我是陳奕鈞，目前就讀於勤益科技大學資訊管理系。平時熱衷於體驗各類軟體與遊戲，並透過程式追蹤、規則拆解與使用者觀察來理解產品設計邏輯。我曾參與遊戲 Demo 的 UX
        回饋，從中學習以使用者角度思考問題，並透過分析與整理提出具體建議。 <br><br>

        目前正持續學習前端開發與 UI/UX 設計，熟悉 Vue 基礎、資料整理與介面製作，並嘗試將技術與設計結合，打造兼具功能性與良好體驗的作品。
        <br><br>

        我的個性細心、慢熟但真誠，擅長傾聽與客觀分析。當團隊遇到迷惘或問題時，我能運用對大眾心理學的興趣，協助夥伴釐清現況並共同尋找解決方向。同時，我對自我要求較高，習慣思考如何優化流程與提升效率，也具備良好的文字表達能力、快速打字能力，以及流暢的溝通能力。希望未來能持續在資訊與設計領域成長，將想法轉化為能被理解、被使用的優質產品。
      </p>
      <button class="intro-toggle" type="button" @click="isIntroExpanded = !isIntroExpanded">
        {{ isIntroExpanded ? '收合自我介紹' : '展開完整自我介紹' }}
      </button>

      <aside class="motto-card" aria-label="座右銘">
        <span class="motto-label">座右銘</span>
        <p>{{ profile.motto }}</p>
      </aside>

      <ul class="highlight-list">
        <!-- v-for 會依照陣列資料重複產生畫面；:key 幫助 Vue 追蹤每個項目。 -->
        <li v-for="item in profile.highlights" :key="item">{{ item }}</li>
      </ul>

    </div>
  </section>
</template>

<style scoped>
.profile-card {
  position: relative;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 36px;
  align-items: start;
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
  border-radius: 9px 6px 6px 6px;
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

.profile-rail {
  display: grid;
  gap: 16px;
  justify-items: center;
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

.contact-list {
  display: grid;
  width: 220px;
  gap: 8px;
  border-top: 1px solid rgba(205, 224, 251, 0.9);
  padding-top: 14px;
  color: #52677f;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.45;
  overflow-wrap: anywhere;
}

.contact-list a {
  color: #4f78d1;
}

.contact-label {
  color: #4f8fe8;
  font-size: 0.76rem;
  font-weight: 800;
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

.profile-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.intro {
  max-width: 660px;
  margin: 18px 0 0;
  color: #4f6074;
  font-size: 1.05rem;
}

.intro-toggle {
  display: none;
}

.motto-card {
  width: min(520px, 100%);
  margin-top: 18px;
  border: 1px solid rgba(205, 224, 251, 0.82);
  border-radius: 14px;
  padding: 14px 18px;
  background: rgba(247, 251, 255, 0.84);
  box-shadow: 0 10px 20px rgba(124, 150, 232, 0.08);
}

.motto-label {
  color: #6f7fa0;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.motto-card p {
  margin: 4px 0 0;
  color: #4d6382;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.7;
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

@media (max-width: 720px) {
  .profile-card {
    grid-template-columns: 1fr;
    gap: 24px;
    border-radius: 18px;
    padding: 22px;
  }

  .profile-card::before,
  .profile-card::after {
    top: 14px;
    width: 20px;
    height: 20px;
  }

  .profile-card::before {
    right: 44px;
  }

  .profile-card::after {
    right: 20px;
  }

  .profile-card:hover {
    transform: none;
  }

  .avatar,
  .profile-photo,
  .contact-list {
    width: min(100%, 240px);
  }

  .avatar,
  .profile-photo {
    height: auto;
    aspect-ratio: 1;
  }

  .profile-rail {
    justify-items: center;
  }

  .avatar {
    justify-self: center;
    border-radius: 18px;
  }

  .profile-photo {
    border-radius: 18px;
  }

  h1 {
    font-size: clamp(2rem, 12vw, 2.65rem);
  }

  .title {
    font-size: 1.03rem;
  }

  .profile-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .intro {
    position: relative;
    max-width: none;
    overflow: hidden;
    font-size: 0.98rem;
    line-height: 1.75;
  }

  .intro--collapsed {
    max-height: 8.75rem;
  }

  .intro--collapsed::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3rem;
    content: "";
    background: linear-gradient(180deg, rgba(255, 255, 255, 0), #ffffff 82%);
  }

  .intro-toggle {
    display: inline-flex;
    width: 100%;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    border: 1px solid #d7e6fb;
    border-radius: 8px;
    color: #4567a6;
    background: #f7fbff;
    font-weight: 800;
    cursor: pointer;
  }

  .motto-card {
    padding: 13px 15px;
  }

  .highlight-list {
    gap: 8px;
  }

  .highlight-list li {
    font-size: 0.86rem;
  }

}
</style>
