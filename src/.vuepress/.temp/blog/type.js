export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[0,6,7,23,1,2,3,4,5]},\"/zh/\":{\"path\":\"/zh/article/\",\"indexes\":[19,8,16,15,14,21,22,17,18,20,24,9,10,11,13,12]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[0]},\"/zh/\":{\"path\":\"/zh/star/\",\"indexes\":[17,19,8]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[6,7,0]},\"/zh/\":{\"path\":\"/zh/timeline/\",\"indexes\":[19,16,15,14,21,22,17,18,20,8]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

