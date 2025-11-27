
<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          本站总访问量
          <span id="busuanzi_value_site_pv"></span> 次
        </span>
        <img
          src="/public/cat.gif"
          alt="heart"
          class="heart-img"
          width="50"
          height="50"
          @click="onLinkUmiHandle"
        />
        <span class="text">
          本站访客数
          <span id="busuanzi_value_site_uv"></span> 人
        </span>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inBrowser } from "vitepress";

// 动态加载 vercount 统计脚本
if (inBrowser) {
  const s = document.createElement("script");
  s.src = "https://vercount.one/js";
  s.defer = true;
  document.head.appendChild(s);
}

// 点击统计按钮跳转到 Umami
const onLinkUmiHandle = () => {
  if (inBrowser) {
    window.open(
      "https://us.umami.is/share/Y2BYxCAm7R0DG2Xi/carlosme.fun",
      "_blank"
    );
  }
};
</script>

<style scoped>
.panel {
  position: fixed;        /* 固定在窗口中 */
  bottom: 0;              /* 距离底部 0 */
  left: 0;                /* 从左侧开始 */
  width: 100%;            /* 占满整行 */
  z-index: 9999;          /* 保证在最上层 */
  margin: 0;              /* 取消原有 margin */
  background-color: var(--vp-c-bg-soft); /* 可选: 给点背景颜色，防止内容遮挡 */
  backdrop-filter: blur(6px);             /* 可选: 半透明毛玻璃效果 */
  box-shadow: 0 -2px 6px rgba(0,0,0,0.1); /* 顶部投影，美观 */
}
.container {
  border-radius: 8px;
  width: 100%;
  min-height: 40px;
  max-width: 1152px;
  margin: 0 auto;
}
.heart-img {
  border-radius: 4px;
  cursor: pointer;
}
.grid {
  font-weight: 500;
  padding: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
.text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
