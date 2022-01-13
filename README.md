# 一.待办任务
## 1.1 基建
- [x] 1.使用[`craco`](https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation)自定义webpack
- [x] 2.使用`@`改写路径别名
- [ ] 3.懒加载组件，打包后一个组件对应一个js文件
- [x] 4.打包增加进度条，使用[webpackBar](https://github.com/unjs/webpackbar)
- [x] 5.[使用打包分析工具-webpack-bundle-analyzer查看产物大小](https://github.com/webpack-contrib/webpack-bundle-analyzer)
- [x] 6.[打包时长分析：speed-measure-webpack-plugin](https://github.com/stephencookdev/speed-measure-webpack-plugin)
- [ ] 7.添加eslint，commit时执行校验

## 1.2 问题解决
- [ ] 1.CRA使用`webpack@5`，而`storybook`使用`webpack@4.46.0`,造成编译报错，[解决方案：将storybook升级为webpack@5](https://storybook.js.org/blog/storybook-for-webpack-5/)
- [ ] 2.


# 二. React Router示例
## 2.1 路由权限管理
* 1.登录页不登录也可以访问
* 2.'我的'页面必须登录才可访问
* 3.登录后跳转到登陆前的那个url上
  
# 三.基础知识
## 3.1 react组件懒加载
 - [import()函数的作用](https://blog.csdn.net/ixygj197875/article/details/79263912)
 - [webpack动态导入-import()](https://webpack.docschina.org/guides/code-splitting/#dynamic-imports)
 - [使用React.lazy()函数实现懒加载](https://react.docschina.org/docs/code-splitting.html#reactlazy)
 - [理解高阶组件](https://react.docschina.org/docs/higher-order-components.html)
 - [React高阶组件（HOC)解析](https://www.jianshu.com/p/4143a6296994)