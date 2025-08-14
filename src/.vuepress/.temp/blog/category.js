export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"工具\":{\"path\":\"/category/%E5%B7%A5%E5%85%B7/\",\"indexes\":[0,1,2]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"字符加解密\":{\"path\":\"/tag/%E5%AD%97%E7%AC%A6%E5%8A%A0%E8%A7%A3%E5%AF%86/\",\"indexes\":[0]},\"开发工具\":{\"path\":\"/tag/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/\",\"indexes\":[0,1,2]},\"文件对比\":{\"path\":\"/tag/%E6%96%87%E4%BB%B6%E5%AF%B9%E6%AF%94/\",\"indexes\":[1]},\"PDF签名检查\":{\"path\":\"/tag/pdf%E7%AD%BE%E5%90%8D%E6%A3%80%E6%9F%A5/\",\"indexes\":[2]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

