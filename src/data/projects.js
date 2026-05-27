// 使用 ES Module 匯出作品資料，讓不同頁面與元件可以 import 同一份資料，避免重複撰寫。
export const projects = [
  {
    id: 'tomaple',
    title: 'ToMaple(這是真的)',
    category: 'Productivity Web App',
    year: '2026',
    role: 'Frontend Developer / UIUX Designer',
    demoUrl: 'https://tomaple.vercel.app',
    summary: '一款以番茄鐘為核心，結合每日行程、任務管理、進度筆記與前置準備的專注管理工具。',
    description:
      'ToMaple 是一個主打寧靜、專注與日常節奏管理的網頁應用。使用者可以透過首頁快速查看今日番茄數、專注分鐘、月曆視圖、今日重點任務與本週專注時長；也能在每日行程中追蹤完成率與習慣狀態，在番茄鐘頁面進行 25 分鐘專注、短休息與長休息切換，並透過任務項目、進度筆記與前置準備功能，建立完整的專注工作流程。',
    tags: [
      'Vue',
      'Frontend',
      'UIUX',
      'Pomodoro',
      'Productivity',
      'Task Management',
      'Calendar',
      'Responsive Web'
    ],
    features: [
      '番茄鐘專注計時，支援番茄鐘、短休息與長休息模式',
      '每日行程管理，可查看已完成、待完成與完成率',
      '月曆視圖，用於整理每日任務與專注紀錄',
      '任務與項目目標追蹤，包含進行中項目、目標清單與里程碑',
      '進度筆記功能，可記錄專注歷程與學習狀態',
      '前置準備清單與提醒設定，協助使用者進入專注狀態',
      '首頁儀表板整合今日番茄、專注分鐘、今日重點任務與本週專注時長'
    ],
    result:
      '完成一個具備番茄鐘、行程管理、任務追蹤、筆記紀錄與準備流程的專注管理網站原型，讓使用者可以用單一介面管理每日專注節奏。'
  },
  {
    id: 'portfolio',
    title: '個人作品集網站(本網頁)',
    category: 'Vue Website',
    year: '2026',
    role: '前端開發、介面設計',
    summary: '使用 Vue Router 製作多頁式作品集，展示個人介紹、技能與作品詳細內容。',
    description:
      '這個作品集網站以元件化方式拆分導覽列、個人卡片、技能卡片、作品卡片與詳細內容。作品列表透過 emits 把點擊事件傳回上層，再由上層進行路由跳轉。',
    tags: ['Vue 3', 'Vue Router', 'Props', 'Emits'],
    features: ['四個主要頁面', '作品詳細頁使用 route params', '作品收藏數統計'],
    result: '完成可瀏覽、可互動的桌面版個人網站。',
  },
  {
    id: 'dashboard',
    title: '學習進度儀表板',
    category: 'Dashboard UI',
    year: '2026',
    role: '資料整理、畫面切版',
    summary: '把課程進度、待辦事項與練習紀錄整理成清楚的管理介面。',
    description:
      '這個專案練習資料列表渲染、狀態整理與卡片式資訊設計，讓使用者能快速看見本週學習目標與完成進度。',
    tags: ['JavaScript', 'CSS Grid', 'UI Design'],
    features: ['進度卡片', '待辦清單', '重點資料摘要'],
    result: '強化資料視覺化與資訊層級設計能力。',
  },
  {
    id: 'travel-note',
    title: '旅行筆記網站',
    category: 'Content Website',
    year: '2025',
    role: '版面設計、內容規劃',
    summary: '以卡片列表整理城市景點、交通方式與行程筆記。',
    description:
      '此專案著重在內容型網站的閱讀體驗，使用乾淨的排版、分類標籤與明確的按鈕狀態，讓旅行資訊容易查找。',
    tags: ['HTML', 'CSS', 'Responsive Layout'],
    features: ['景點卡片', '分類標籤', '行程摘要'],
    result: '完成適合展示內容與圖片的作品頁面。',
  },
]
