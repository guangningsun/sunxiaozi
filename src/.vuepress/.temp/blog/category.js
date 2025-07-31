export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"樱桃\":{\"path\":\"/category/%E6%A8%B1%E6%A1%83/\",\"indexes\":[0]},\"工具\":{\"path\":\"/category/%E5%B7%A5%E5%85%B7/\",\"indexes\":[1]},\"水果\":{\"path\":\"/category/%E6%B0%B4%E6%9E%9C/\",\"indexes\":[2]},\"草莓\":{\"path\":\"/category/%E8%8D%89%E8%8E%93/\",\"indexes\":[2]},\"蔬菜\":{\"path\":\"/category/%E8%94%AC%E8%8F%9C/\",\"indexes\":[3]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"红\":{\"path\":\"/tag/%E7%BA%A2/\",\"indexes\":[3,2,0]},\"小\":{\"path\":\"/tag/%E5%B0%8F/\",\"indexes\":[2,0]},\"圆\":{\"path\":\"/tag/%E5%9C%86/\",\"indexes\":[3,0]},\"工具\":{\"path\":\"/tag/%E5%B7%A5%E5%85%B7/\",\"indexes\":[1]},\"前端\":{\"path\":\"/tag/%E5%89%8D%E7%AB%AF/\",\"indexes\":[1]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

