// 技能資料獨立放在 data 檔案中，頁面只負責呈現，資料維護會比較清楚。
export const skills = [
  {
    id: 1,
    title: 'Vue 3',
    level: '熟悉',
    description: '能使用 Composition API 建立頁面、元件與互動狀態。',
    tools: ['props', 'emits', 'v-for', 'Vue Router'],
  },
    {
    id: 2,
    title: 'HTML / CSS',
    level: '熟悉',
    description: '能規劃語意化結構、卡片版型、按鈕狀態與桌面版響應式排版。',
    tools: ['Flexbox', 'Grid', 'Hover effects', 'Layout'],
  },
  {
    id: 3,
    title: 'JavaScript',
    level: '中階',
    description: '能處理陣列資料、事件傳遞、條件渲染與簡單資料查找。',
    tools: ['Array methods', 'ES Modules', 'Events', 'Computed'],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    level: '基礎',
    description: '能建立清楚的資訊層級，讓內容容易瀏覽與操作。',
    tools: ['Wireframe', 'Visual hierarchy', 'Prototype', 'Accessibility'],
  },
  {
    id: 5,
    title: 'SQL 語言',
    level: '基礎',
    description: '能撰寫查詢語法、篩選資料並整理資料表之間的關聯。',
    tools: ['SELECT', 'WHERE', 'JOIN', 'GROUP BY'],
  },
  {
    id: 6,
    title: 'Git 語法使用',
    level: '基礎',
    description: '能使用 Git 進行版本控管、分支操作與專案變更追蹤。',
    tools: ['commit', 'branch', 'merge', 'push'],
  },
  {
    id: 7,
    title: 'Tailwind CSS',
    level: '基礎',
    description: '能使用 utility class 快速建立排版、間距與響應式樣式。',
    tools: ['Utility classes', 'Responsive', 'Spacing', 'Colors'],
  },
]
