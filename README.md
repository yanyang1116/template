# 此 `Readme`，长期维护，保持项目稳定性

---

## 基础组件库

使用 antd v5，为基础，做基础组件库，额外做封装。
这里，可以考虑做组件测试，但是不一定有时间。

---

## 基于 `v15.3.3` 官方脚手架初始化

**定制内容**

1. 将原本的 _react 19_ 改为 _react 18.3.1_
2. 去掉了 _eslint、ts_ 相关的部分，改用了 _nxlibs_ 中的 _eslint、ts、prettier_ 配置
3. 增加 `@nxlibs/format` 包
4. 增加 `module.d.ts` 来处理包的申明

## 主要思路和基建

css，用 tailwind + css module
query 管理，用 nuqs
基础工具，用 lodash
状态管理，用 use-immer、zustand
语言，TODO

## doing

"@nxlibs/eslint-config": "^1.0.2",
"@nxlibs/prettier-config": "^1.0.0", 有效性

## TODO

1. 路由多语言
2. image 组件相关
3. zy 的 ts api
4. zy 的 图片转 react component
5. immer
6. zstands
7. 静态页面导出
8. 主题
9. trading view
10. 部署
11. 多语言路由分包
12. sentry
13. 压测，以及压测方向的监控
14. 单元测试，所有纯函数，都做单元测试

a. postcss 改成 cjs 不知道行不行
b. eslintrc 不知道行不行，不是后缀的问题，而是从没验证过行不行
c. commit lint 阶段还是考虑接入 es 和 ts
