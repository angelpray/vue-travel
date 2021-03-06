# vue-travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
<hr>

# Vue单页面应用

## 构建Vue项目工程

1. 下载vue-cli`npm install --global vue-cli`

2. 创建基于webpack模板的新项目`vue init webpack vue-travel`【需要在vue-travel的上一层目录上输入该命令】,填入项目初始的相关信息。

    ![](https://image-static.segmentfault.com/345/379/3453798512-5cc6e29366623_articlex)

3. 项目目录结构
```
vue-travel/          --> 项目根目录
  build/         --> webpack项目构建打包的配置内容
  config/        --> 存放项目配置文件
    dev.env.js   --> 开发环境下的配置
    index.js     --> 基本配置信息
    prod.env.js  --> 线上环境下的配置
  src/           --> 存放项目源文件，进行业务代码的开发
    assets       --> 项目用到图片类资源
    router       --> 所有的项目路由
      index.js   --> 路由存放在index.js
    components   --> 存放项目使用到组件
    App.vue      --> 项目最原始的根组件
    main.js      --> 整个项目的入口文件
  node_modules/  --> 存放第三方模块
  static/        --> 存放静态资源文件
  routes/        --> 存放路由文件
  index.html     --> 默认首页模板文件
  .babelrc       --> 语法转换配置，让浏览器能识别
  .postcssrc.js  --> postcss的配置项
  .editorconfig  --> 编辑器配置项
  .eslintrc      --> 代码检测
  .gitignore     --> Git忽略文件
  LICENSE        --> 项目许可文件
  package.json   --> NPM包管理文件
  README.md      --> 项目说明文件
```

## 引入reset.css和fastClick

# 使用Less进行样式编写

# 首页header编写

# 首页轮播图

# 首页图标栏

# 首页推荐列表和周末去哪儿

# ajax获取首页数据
- static模拟数据，只有static目录下是可以被外部访问到

# 城市路由配置

# 城市搜索框

# 列表布局

# Better-scroll

# 城市选择页面动态获取数据

# 字母选择相关逻辑

# 搜索功能逻辑实现

# 城市状态vuex

- vuex数据框架
- Vuex的高级使用和localStorage【HTML5新API，提供类似cookie的功能，本地存储】

# 使用keep-alive优化网页性能
- 每次切换路由都会重新渲染，重新发起http请求。

# 详情页面banner制作

# 详情页面header制作

# 使用递归组件实现详情页面列表

# 使用ajax动态获取详情页面数据

# Vue项目的接口联调

# Vue项目真机测试

# 页面动态数据渲染

#

# 问题集

1. 移动端1像素边框问题？引入border.css
2. 移动端，300ms点击延迟？ 引入fastclick
3. inline-block，间距空白问题？ 父元素font-size=0，子元素重新设置font-size即可
4. Css导入变量？ 使用`~@`表示src目录
5. 使用webpack别名？ 修改`alias`字段就可以
6. 轮播图加载抖动问题？
7. Vue中scoped穿透问题？ stylus使用>>>,sass和less使用/deep/
8. 为什么v-for不要使用index作为key值，以及为什么v-for需要key值？
9. 长段落省略号？ overflow:hidden;white-space: nowrap;text-overflow: ellipsis;
10. 请求转发？vue-cli的config的proxyTable选项
11. 轮播图刷新显示最后一张问题？ 使用v-if判断是否有数据，有数据才渲染
12. export default导出的到底是什么，模块化工程？？ 学习中
13. 设置元素为非静态定位的时候，同时设定left=0、right=0、top=0、bottom=0会有什么效果？元素会被拉伸。
14. 为什么要对全局事件进行解绑？组件内部绑定事件没影响，但如果是使用window对象进行绑定就会影响其他的组件。使用`deactived周期函数`【keep-alive特有生命周期函数】解决，当页面即将被替换成新页面时触发。
15. 什么是递归组件？学习中
16. 如何获得动态路由的参数？ 在请求url的时候增加查询参数`?name= + this.$route.params.id`
17. 进入页面重新发送ajax请求，而不是缓存起来？`结合mounted使用actived`或者让某个组件不使用keep-alive【请注意，如果取消了keep-alive，则以往使用的actived函数会失效，因为actived只有在keep-alive的时候才存在】
```
<keep-alive exclude="Detail">
  <router-view/>
</keep-alive>
```
18. 每一个组件里面的name值到底有什么用？ 1. 递归组件需要使用本身名字；2. 取消keep-alive缓存； 3.devtool里面的组件名
19. 组件之间的滚动条会互相影响问题？
```js
scrollBehavior(to, from, savedPosition){
  return {x: 0, y: 0}
};
```
## 优化
1. 触摸滑动事件处理程序，当一个值是固定的时候，如果每一次触发事件都去运算，那性能就很低了。使用updated生命周期钩子。
2. 函数节流，限制函数执行的频率
