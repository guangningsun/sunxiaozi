import comp from "/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"SunXiaozi\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"SunXiaozi\",\"projects\":[{\"icon\":\"book\",\"name\":\"文章\",\"desc\":\"我的博客文章\",\"link\":\"/posts/\"},{\"icon\":\"folder-open\",\"name\":\"工具\",\"desc\":\"实用工具集合\",\"link\":\"/file_diff_tool.html\"}],\"footer\":\"归去，也无风雨也无晴\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://https:/sunxiaozi.cn/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"孙小子\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SunXiaozi\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"SunXiaozi\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":48},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
