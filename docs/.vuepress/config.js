/*
 * @Author: 张苗苗
 * @Date: 2023-02-16 17:29:02
 * @LastEditors: 张苗苗
 * @LastEditTime: 2023-03-12 14:36:14
 * @FilePath: /my-docs/docs/.vuepress/config.js
 * @Description:
 */
module.exports = {
  title: "Home",
  description: "Just playing around",
  themeConfig: {
    nav: [
      {
        text: "Web",
        items: [
          { text: "JavaScript", link: "/Web/JavaScript/" },
          { text: "常见面试", link: "/Web/Interview/" },
        ],
      },
    ],
    sidebar: {
      "/Web/JavaScript/": [
        {
          title: "介绍",
          path: "/Web/JavaScript/",
        },
        {
          title: "常见概念",
          path: "/Web/JavaScript/concept.md",
        },
        {
          title: "es6",
          path: "/Web/JavaScript/es6.md",
        },
      ],
      "/Web/Interview/": [
        {
          title: "js",
          path: "/Web/Interview/js",
        },
        {
          title: "css",
          path: "/Web/Interview/css",
        },
        {
          title: "vue",
          path: "/Web/Interview/vue",
        },
      ],
    },
  },
};
