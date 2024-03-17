import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/Unisky-Blog/",

  lang: "zh-CN",
  title: "宙宇空",
  description: "Unisky 的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
