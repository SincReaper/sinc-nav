import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NavGrid from './components/NavGrid.vue'
// 1. 导入新的起始页组件 (请确保您已经创建了该文件)
import HomeStart from './components/HomeStart.vue' 

import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  
  // 这里保持您原有的类型忽略写法
  enhanceApp({ app }: { app: any }) { 
    // 原有的组件注册保留
    app.component('NavGrid', NavGrid)
    
    // 2. 注册新的全局组件
    app.component('HomeStart', HomeStart)
  }
}