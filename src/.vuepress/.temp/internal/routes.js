export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"SunXiaozi","i":"house"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<p>将你的个人介绍和档案放置在此处。</p>\n","r":{"minutes":0.08,"words":23},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/posts/cherry.html", { loader: () => import(/* webpackChunkName: "posts_cherry.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/cherry.html.js"), meta: {"d":1641686400000,"l":"2022年1月9日","c":["樱桃"],"g":["红","小","圆"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":33},"t":"樱桃","i":"pen-to-square","y":"a"} }],
  ["/posts/file-diff-tool-intro.html", { loader: () => import(/* webpackChunkName: "posts_file-diff-tool-intro.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/file-diff-tool-intro.html.js"), meta: {"d":1705708800000,"l":"2024年1月20日","c":["工具"],"g":["工具","前端"],"e":"\n<p>这是一个基于浏览器的文件对比工具，支持对比文本文件和 Word 文档的内容差异。</p>\n<h2>功能特点</h2>\n<ul>\n<li>支持文本文件和 Word 文档的内容对比</li>\n<li>直观的差异显示，包括新增、删除和修改的内容</li>\n<li>简洁美观的用户界面</li>\n<li>完全在浏览器端运行，无需服务器</li>\n</ul>\n<h2>使用方法</h2>\n<ol>\n<li>点击<a href=\"/file-diff-tool.html\" target=\"_blank\">这里</a>访问工具</li>\n<li>选择要对比的两个文件</li>\n<li>查看文件差异</li>\n</ol>","r":{"minutes":0.76,"words":229},"t":"文件对比工具介绍","y":"a"} }],
  ["/posts/strawberry.html", { loader: () => import(/* webpackChunkName: "posts_strawberry.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/strawberry.html.js"), meta: {"d":1641859200000,"l":"2022年1月11日","c":["水果","草莓"],"g":["红","小"],"e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p>这里是内容。</p>\n","r":{"minutes":0.11,"words":34},"t":"草莓","i":"pen-to-square","y":"a"} }],
  ["/posts/tomato.html", { loader: () => import(/* webpackChunkName: "posts_tomato.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/tomato.html.js"), meta: {"d":1641945600000,"l":"2022年1月12日","c":["蔬菜"],"g":["红","圆"],"u":true,"v":"/assets/images/cover2.jpg","e":"\n<h2>标题 2</h2>\n<p>这里是内容。</p>\n<h3>标题 3</h3>\n<p><a href=\"/posts/file_diff_tool.html\" target=\"_blank\">点击跳转到HTML页面</a></p>\n","r":{"minutes":0.14,"words":42},"t":"番茄","i":"pen-to-square","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E6%A8%B1%E6%A1%83/", { loader: () => import(/* webpackChunkName: "category_樱桃_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/樱桃/index.html.js"), meta: {"t":"樱桃 分类","I":false} }],
  ["/category/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "category_工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/工具/index.html.js"), meta: {"t":"工具 分类","I":false} }],
  ["/category/%E6%B0%B4%E6%9E%9C/", { loader: () => import(/* webpackChunkName: "category_水果_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/水果/index.html.js"), meta: {"t":"水果 分类","I":false} }],
  ["/category/%E8%8D%89%E8%8E%93/", { loader: () => import(/* webpackChunkName: "category_草莓_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/草莓/index.html.js"), meta: {"t":"草莓 分类","I":false} }],
  ["/category/%E8%94%AC%E8%8F%9C/", { loader: () => import(/* webpackChunkName: "category_蔬菜_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/蔬菜/index.html.js"), meta: {"t":"蔬菜 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E7%BA%A2/", { loader: () => import(/* webpackChunkName: "tag_红_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/红/index.html.js"), meta: {"t":"标签: 红","I":false} }],
  ["/tag/%E5%B0%8F/", { loader: () => import(/* webpackChunkName: "tag_小_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/小/index.html.js"), meta: {"t":"标签: 小","I":false} }],
  ["/tag/%E5%9C%86/", { loader: () => import(/* webpackChunkName: "tag_圆_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/圆/index.html.js"), meta: {"t":"标签: 圆","I":false} }],
  ["/tag/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/工具/index.html.js"), meta: {"t":"标签: 工具","I":false} }],
  ["/tag/%E5%89%8D%E7%AB%AF/", { loader: () => import(/* webpackChunkName: "tag_前端_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/前端/index.html.js"), meta: {"t":"标签: 前端","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
  ["/file-diff-tool.html", { loader: () => import(/* webpackChunkName: "file-diff-tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/file-diff-tool.html.js"), meta: {"c":["工具"],"g":["文件对比","开发工具"],"e":"\n<p>这是一个在线文件对比工具，可以帮助您快速比较两个文件的差异。</p>\n<h2>功能特点</h2>\n<ul>\n<li>支持多种文件格式</li>\n<li>高亮显示差异</li>\n<li>并排对比视图</li>\n<li>响应式设计</li>\n</ul>\n<h2>使用工具</h2>\n<iframe src=\"/file_diff_tool.html\" width=\"100%\" height=\"800px\" frameborder=\"0\" style=\"border: 1px solid #ddd; border-radius: 8px;\"></iframe>\n<h2>备用访问方式</h2>\n","r":{"minutes":0.81,"words":242},"t":"文件对比工具","i":"fas fa-code-compare","O":2,"y":"a"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
