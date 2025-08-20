import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "SunXiaozi",
    //   description: "SunXiaozi",
    // },
    "/": {
      lang: "zh-CN",
      title: "孙小子",
      description: "小楼一夜听春雨",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  
});
