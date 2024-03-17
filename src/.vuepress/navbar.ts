import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/document/",
  {
    text: "航行日志",
    icon: "pen-to-square",
    link: "/article/",
  },
  "intro"
]);
