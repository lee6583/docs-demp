// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import confetti from "./components/confetti.vue" //导入插件，主页烟花效果
import VisitorPanel from "./components/VisitorPanel.vue"

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("confetti", confetti); //注册全局组件
    app.component("VisitorPanel", VisitorPanel ); //注册全局组件
    // ...
  }
}


