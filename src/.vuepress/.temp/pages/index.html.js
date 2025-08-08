import comp from "/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"SunXiaozi\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"SunXiaozi\",\"heroImage\":false,\"heroText\":\"\",\"tagline\":\"\",\"heroImageStyle\":{\"display\":\"none\"},\"projects\":[{\"icon\":\"screwdriver-wrench\",\"name\":\"在线工具\",\"desc\":\"实用工具集合\",\"link\":\"/posts/file-diff-tool.html\"},{\"icon\":\"microchip\",\"name\":\"科技\",\"desc\":\"Techno 文章\",\"link\":\"/techno/\"},{\"icon\":\"star-of-life\",\"name\":\"漫生活\",\"desc\":\"悠闲自在的生活\",\"link\":\"/easylife/\"}],\"footer\":\"归去，也无风雨也无晴\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://https:/sunxiaozi.cn/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"孙小子\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SunXiaozi\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"SunXiaozi\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.25,\"words\":74},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
