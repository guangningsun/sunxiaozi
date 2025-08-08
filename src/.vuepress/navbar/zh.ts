import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "工具",
    icon: "screwdriver-wrench",
    prefix: "/posts/",
    children: [
      { text: "文件对比工具", icon: "file-lines", link: "file-diff-tool" },
    ]
  },
  {
    text: "科技",
    icon: "microchip",
    prefix: "/techo/",
    children: [
      { text: "AI笔记", icon: "file-lines", link: "file-diff-tool" },
    ],
  },
  {
    text: "漫生活",
    icon: "star-of-life",
    prefix: "/easy_life/",
    children: [
      { text: "轻松自在的生活", icon: "file-lines", link: "file-diff-tool" },
    ],
  },
]);
