export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"SunXiaozi","i":"house"} }],
  ["/posts/encryption-tool.html", { loader: () => import(/* webpackChunkName: "posts_encryption-tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/encryption-tool.html.js"), meta: {"c":["工具"],"g":["字符加解密","开发工具"],"e":"\n<p>在这个信息时代，数据安全越来越重要。任何场景下我们都需要一个简单易用的加密工具！</p>\n<h2>功能特点</h2>\n<p>🔒 一键加密 - 输入文本，秒速加密<br>\n🔓 一键解密 - 还原数据，安全可靠<br>\n📋 快速复制 - 结果一键复制到剪贴板<br>\n🎨 界面美观 - 现代化设计，操作简单<br>\n✨ 支持5种主流加密算法</p>\n<ul>\n<li>AES（银行级安全）</li>\n<li>TripleDES（三重加密）</li>\n<li>RC4（流密码）</li>\n<li>Rabbit（高速加密）</li>\n<li>Base64（编码转换）</li>\n</ul>\n<h2>使用工具</h2>","r":{"minutes":1.01,"words":302},"t":"002.字符加解密工具","i":"fas fa-code-compare","O":2,"y":"a"} }],
  ["/posts/file-diff-tool.html", { loader: () => import(/* webpackChunkName: "posts_file-diff-tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/file-diff-tool.html.js"), meta: {"c":["工具"],"g":["文件对比","开发工具"],"e":"\n<p>这是一个在线文件对比工具，可以帮助您快速比较两个文件的差异。</p>\n<h2>功能特点</h2>\n<ul>\n<li>支持多种文件格式</li>\n<li>高亮显示差异</li>\n<li>并排对比视图</li>\n<li>响应式设计</li>\n</ul>\n<h2>使用说明</h2>\n<ol>\n<li>在左侧文本框中粘贴或输入第一个文件的内容</li>\n<li>在右侧文本框中粘贴或输入第二个文件的内容</li>\n<li>工具会自动高亮显示两个文件之间的差异</li>\n<li>绿色表示新增内容，红色表示删除内容</li>\n</ol>\n<h2>使用工具</h2>\n<iframe src=\"/tools/file_diff_tool.html\" width=\"100%\" height=\"800px\" frameborder=\"0\" style=\"border: 1px solid #ddd; border-radius: 8px;\"></iframe>","r":{"minutes":0.81,"words":243},"t":"001.文件对比工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
  ["/posts/interval_training_tool.html", { loader: () => import(/* webpackChunkName: "posts_interval_training_tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/interval_training_tool.html.js"), meta: {"c":["工具"],"g":["音程训练工具","音乐"],"e":"\n<p>为了让自己（还有朋友们）不再被“音程听力”卡住，我们做了一个纯前端的在线训练工具。<br>\n它不需要安装、不需要注册，点开就能用。</p>\n<h2>功能特点</h2>\n<p>•\t支持 从纯一度到纯八度 全范围训练<br>\n•\t训练节奏可调（2~10 秒一题）<br>\n•\t一键播放 A4 基准音，帮你稳住音高基准<br>\n•\t纯前端运行，安全、无隐私风险<br>\n•\t手机、电脑都能用</p>\n<h2>使用说明</h2>\n<ol>\n<li>先点“播放基准音”，让耳朵找到音高基准</li>\n<li>点“开始训练”，每隔几秒会播放一个音程，你要在心里判断这是啥<br>\n（不用担心，答案会自动显示，方便你对照）</li>\n</ol>","r":{"minutes":1.06,"words":319},"t":"004.音程训练工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
  ["/posts/pdf-check.html", { loader: () => import(/* webpackChunkName: "posts_pdf-check.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/pdf-check.html.js"), meta: {"c":["工具"],"g":["PDF签名检查","开发工具"],"e":"\n<p>在工作中，我们经常会收到带有电子签名的PDF文件，比如合同、报告等重要文档。数字签名可以确保：</p>\n<ul>\n<li>文件内容在签名后未被篡改</li>\n<li>签名者的身份真实可信</li>\n<li>文件来源合法可靠</li>\n</ul>\n<h2>功能特点</h2>\n<ul>\n<li>简单易用：拖放文件或点击上传，一键完成检测</li>\n<li>快速验证：即时显示签名状态（有效/无效）</li>\n<li>详细信息：展示签署者、签名时间、签名原因等</li>\n<li>安全放心：所有操作在浏览器本地完成，文件不上传服务器</li>\n</ul>\n<h2>使用说明</h2>\n<h5>检查只需3步：</h5>","r":{"minutes":1.18,"words":353},"t":"003.PDF签名检查工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/category/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "category_工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/category/工具/index.html.js"), meta: {"t":"工具 分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/tag/%E5%AD%97%E7%AC%A6%E5%8A%A0%E8%A7%A3%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_字符加解密_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/字符加解密/index.html.js"), meta: {"t":"标签: 字符加解密","I":false} }],
  ["/tag/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_开发工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/开发工具/index.html.js"), meta: {"t":"标签: 开发工具","I":false} }],
  ["/tag/%E6%96%87%E4%BB%B6%E5%AF%B9%E6%AF%94/", { loader: () => import(/* webpackChunkName: "tag_文件对比_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/文件对比/index.html.js"), meta: {"t":"标签: 文件对比","I":false} }],
  ["/tag/%E9%9F%B3%E7%A8%8B%E8%AE%AD%E7%BB%83%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_音程训练工具_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/音程训练工具/index.html.js"), meta: {"t":"标签: 音程训练工具","I":false} }],
  ["/tag/%E9%9F%B3%E4%B9%90/", { loader: () => import(/* webpackChunkName: "tag_音乐_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/音乐/index.html.js"), meta: {"t":"标签: 音乐","I":false} }],
  ["/tag/pdf%E7%AD%BE%E5%90%8D%E6%A3%80%E6%9F%A5/", { loader: () => import(/* webpackChunkName: "tag_pdf签名检查_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/tag/pdf签名检查/index.html.js"), meta: {"t":"标签: PDF签名检查","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
  ["/posts/text_statistics_tool.html", { loader: () => import(/* webpackChunkName: "posts_text_statistics_tool.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/text_statistics_tool.html.js"), meta: {"c":["工具"],"g":["字符统计工具","写作工具"],"e":"\n<p>写公众号文章时，需要控制字数...<br>\n写论文时，要求严格的字符限制...<br>\n做翻译工作，需要精确统计字数...<br>\n写小说时，想知道今天写了多少字...<br>\n今天，这些问题都有了完美的解决方案！</p>\n<h2>功能特点</h2>\n<ul>\n<li>一键清空文本</li>\n<li>快速复制统计结果</li>\n<li>内置示例文本</li>\n<li>支持快捷键操作</li>\n</ul>\n<h2>使用说明</h2>\n<h5>检查只需3步：</h5>\n<ul>\n<li>打开工具网页</li>\n<li>在文本框中输入或粘贴内容</li>\n<li>统计结果实时显示</li>\n</ul>","r":{"minutes":0.92,"words":276},"t":"005.字符数量统计工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
  ["/posts/string_obfuscator.html", { loader: () => import(/* webpackChunkName: "posts_string_obfuscator.html" */"/Users/sunguangning/Documents/code/npmtest/sunxiaozi/src/.vuepress/.temp/pages/posts/string_obfuscator.html.js"), meta: {"c":["工具"],"g":["字符混淆工具","写作工具"],"e":"\n<p>今天给大家带来一款超实用的字符混淆小工具，让你既能清晰表达，又能保护隐私！</p>\n<h2>功能特点</h2>\n<ul>\n<li>智能保留：自定义保留开头、结尾字符数量</li>\n<li>贴心细节：可选择保留或隐藏空格字符</li>\n<li>实时预览：输入即时显示混淆效果</li>\n<li>一键复制：轻松复制处理结果</li>\n<li>打开即用，无需注册</li>\n</ul>\n<h2>使用说明</h2>\n<h5>检查只需3步：</h5>\n<ul>\n<li>打开工具网页</li>\n<li>在文本框中输入内容</li>\n<li>实时显示混淆结果</li>\n</ul>\n<h2>使用工具</h2>","r":{"minutes":0.77,"words":232},"t":"006.字符混淆工具","i":"fas fa-code-compare","O":1,"y":"a"} }],
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
