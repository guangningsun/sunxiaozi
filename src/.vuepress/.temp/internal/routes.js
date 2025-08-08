export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"SunXiaozi","i":"house"} }],
  ["/posts/encryption-tool.html", { loader: () => import(/* webpackChunkName: "posts_encryption-tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/encryption-tool.html.js"), meta: {"c":["工具"],"g":["字符加解密","开发工具"],"e":"\n<p>在这个信息时代，数据安全越来越重要。任何场景下我们都需要一个简单易用的加密工具！</p>\n<h2>功能特点</h2>\n<p>🔒 一键加密 - 输入文本，秒速加密<br>\n🔓 一键解密 - 还原数据，安全可靠<br>\n📋 快速复制 - 结果一键复制到剪贴板<br>\n🎨 界面美观 - 现代化设计，操作简单<br>\n✨ 支持5种主流加密算法</p>\n<ul>\n<li>AES（银行级安全）</li>\n<li>TripleDES（三重加密）</li>\n<li>RC4（流密码）</li>\n<li>Rabbit（高速加密）</li>\n<li>Base64（编码转换）</li>\n</ul>\n<h2>使用工具</h2>","r":{"minutes":1.01,"words":302},"t":"002.字符加解密工具","i":"fas fa-code-compare","O":2,"y":"a"} }],
  ["/posts/file-diff-tool.html", { loader: () => import(/* webpackChunkName: "posts_file-diff-tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/file-diff-tool.html.js"), meta: {"c":["工具"],"g":["文件对比","开发工具"],"e":"\n<p>这是一个在线文件对比工具，可以帮助您快速比较两个文件的差异。</p>\n<h2>功能特点</h2>\n<ul>\n<li>支持多种文件格式</li>\n<li>高亮显示差异</li>\n<li>并排对比视图</li>\n<li>响应式设计</li>\n</ul>\n<h2>使用工具</h2>\n<iframe src=\"/tools/file_diff_tool.html\" width=\"100%\" height=\"800px\" frameborder=\"0\" style=\"border: 1px solid #ddd; border-radius: 8px;\"></iframe>\n<h2>备用访问方式</h2>","r":{"minutes":0.81,"words":243},"t":"001.文件对比工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "category_工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/工具/index.html.js"), meta: {"t":"工具 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E5%AD%97%E7%AC%A6%E5%8A%A0%E8%A7%A3%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_字符加解密_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/字符加解密/index.html.js"), meta: {"t":"标签: 字符加解密","I":false} }],
  ["/tag/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_开发工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/开发工具/index.html.js"), meta: {"t":"标签: 开发工具","I":false} }],
  ["/tag/%E6%96%87%E4%BB%B6%E5%AF%B9%E6%AF%94/", { loader: () => import(/* webpackChunkName: "tag_文件对比_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/文件对比/index.html.js"), meta: {"t":"标签: 文件对比","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
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
