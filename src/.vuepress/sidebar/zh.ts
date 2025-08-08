import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "每天一个小工具",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
