import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "每天一个小工具",
      icon: "screwdriver-wrench",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "Techno 文章",
      icon: "microchip",
      prefix: "techo/",
      children: "structure",
    },
    {
      text: "漫生活",
      icon: "star-of-life",
      prefix: "easylife/",
      children: "structure",
    },
  ],
});
