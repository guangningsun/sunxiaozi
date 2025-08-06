import comp from "/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"SunXiaozi\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"SunXiaozi\",\"projects\":[{\"icon\":\"book\",\"name\":\"文章\",\"desc\":\"我的博客文章\",\"link\":\"/posts/\"},{\"icon\":\"folder-open\",\"name\":\"工具\",\"desc\":\"实用工具集合\",\"link\":\"/file-diff-tool.html\"}],\"footer\":\"归去，也无风雨也无晴\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.17,\"words\":50},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
