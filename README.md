# 此 `Readme`，长期维护，保持项目稳定性
---

## 基础组件库
使用 antd v5，为基础，做基础组件库，额外做封装。
这里，可以考虑做组件测试，但是不一定有时间。
---

## 基于 `v15.3.3` 官方脚手架初始化
**定制内容**
1. 将原本的 *react 19* 改为 *react 18.3.1*
2. 去掉了 *eslint、ts* 相关的部分，改用了 *nxlibs* 中的 *eslint、ts、prettier* 配置
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
8. 静态页面导出
9. 主题
10. trading view
11. 部署
12. 多语言路由分包
13. sentry
14. 压测，以及压测方向的监控
15. 单元测试，所有纯函数，都做单元测试