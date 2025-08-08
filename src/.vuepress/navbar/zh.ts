import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "工具",
    icon: "tools",
    children: [
      { text: "文件对比工具", icon: "file-lines", link: "/file_diff_tool.html" }
    ]
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      { text: "文件对比工具", icon: "file-lines", link: "file-diff-tool" },
    ],
  },
]);
