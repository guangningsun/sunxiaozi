export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"工具\":{\"path\":\"/category/%E5%B7%A5%E5%85%B7/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"字符加解密\":{\"path\":\"/tag/%E5%AD%97%E7%AC%A6%E5%8A%A0%E8%A7%A3%E5%AF%86/\",\"indexes\":[0]},\"开发工具\":{\"path\":\"/tag/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/\",\"indexes\":[0,1,5,6]},\"文件对比\":{\"path\":\"/tag/%E6%96%87%E4%BB%B6%E5%AF%B9%E6%AF%94/\",\"indexes\":[1]},\"音程训练工具\":{\"path\":\"/tag/%E9%9F%B3%E7%A8%8B%E8%AE%AD%E7%BB%83%E5%B7%A5%E5%85%B7/\",\"indexes\":[2]},\"音乐\":{\"path\":\"/tag/%E9%9F%B3%E4%B9%90/\",\"indexes\":[2]},\"图像处理\":{\"path\":\"/tag/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86/\",\"indexes\":[3]},\"交互式可视化\":{\"path\":\"/tag/%E4%BA%A4%E4%BA%92%E5%BC%8F%E5%8F%AF%E8%A7%86%E5%8C%96/\",\"indexes\":[3]},\"创意工具\":{\"path\":\"/tag/%E5%88%9B%E6%84%8F%E5%B7%A5%E5%85%B7/\",\"indexes\":[3]},\"密码工具\":{\"path\":\"/tag/%E5%AF%86%E7%A0%81%E5%B7%A5%E5%85%B7/\",\"indexes\":[4]},\"PDF签名检查\":{\"path\":\"/tag/pdf%E7%AD%BE%E5%90%8D%E6%A3%80%E6%9F%A5/\",\"indexes\":[5]},\"声音分贝检测\":{\"path\":\"/tag/%E5%A3%B0%E9%9F%B3%E5%88%86%E8%B4%9D%E6%A3%80%E6%B5%8B/\",\"indexes\":[6]},\"网络测速工具\":{\"path\":\"/tag/%E7%BD%91%E7%BB%9C%E6%B5%8B%E9%80%9F%E5%B7%A5%E5%85%B7/\",\"indexes\":[7]},\"计时器工具\":{\"path\":\"/tag/%E8%AE%A1%E6%97%B6%E5%99%A8%E5%B7%A5%E5%85%B7/\",\"indexes\":[8]},\"字符混淆工具\":{\"path\":\"/tag/%E5%AD%97%E7%AC%A6%E6%B7%B7%E6%B7%86%E5%B7%A5%E5%85%B7/\",\"indexes\":[9]},\"写作工具\":{\"path\":\"/tag/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7/\",\"indexes\":[9,10]},\"字符统计工具\":{\"path\":\"/tag/%E5%AD%97%E7%AC%A6%E7%BB%9F%E8%AE%A1%E5%B7%A5%E5%85%B7/\",\"indexes\":[10]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

