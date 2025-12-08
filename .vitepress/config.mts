import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

export default defineConfig({
  title: "NAS Navigation",
  
  vite: {
    plugins: [
      Unocss() 
    ]
  },

  themeConfig: {
    // 👇 1. 加上这行，防止 startPage 和 footer 报红线错误
    // @ts-ignore
    startPage: {
      title: "十三の导航页",
      // 👇 1. 如果填了 bgVideo，就会优先播放视频
      //    如果没有 bgVideo，就会显示下面的 bgImage 图片
      bgVideo: "/assets/bg/dynamic/bg-05.mp4", 
      bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },

    // 👇 2. 新增：页脚配置 (在这里修改页脚内容)
    footer: {
      author: "十三",
      siteName: "nav.99600000.xyz",
      siteUrl: "https://nav.99600000.xyz",
      poem: "终不似 少年游"
    },

    // ... 原有配置 ...
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})