import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_sidebar.mjs'  // 同级 utils 目录

export default defineConfig({
  base: "/docs/",
  head: [["link", { rel: "icon", href: "/docs/logo.png" }]],//网站 Logo
  title: '我的厉害的项目',
  description: 'A VitePress Site',
  themeConfig: {
    outlineTitle: '目录',
    outline: [2, 6],
    logo: '/logo.png', // 确保 docs/public/logo.png 存在

    // 顶部导航
    nav: [
      {
        text: '家',
        items: [
          { text: '首页', link: '/' },
          { text: 'markdown 示例', link: '/markdown-examples' },
        ],
      },
      { text: '示例', link: 'https://github.com/lee6583' },
      { text: '自动生成侧边栏', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
      { text: '两边栏演示', link: '/两边栏演示' },
    ],

    // 侧边栏（key 以 / 结尾；传参不要以 / 开头）
    // sidebar: {
    //   '/front-end/react/': set_sidebar('front-end/react'),
    //   '/backend/rabbitmq/': set_sidebar('backend/rabbitmq'),
    // },
    sidebar:false,
    aside:"left",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2025 lee6583'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },   
})