# demo

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## PostCss

vue cli 创建的项目默认安装postcss，且默认安装配置了三个plugin，具体参考项目根目录下的[.postcsssrc.js](.postcssrc.js)

### 使用 [postcss-utils](https://npm.taobao.org/package/postcss-utils)

```bash

# 安装

npm install postcss-utils --save-dev

```

配置[.postcsssrc.js](.postcssrc.js)

```javascript
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-utils":{}// 新增这一句
  }
}

```


在scss中或者vue中就可以使用了，例如：

```scss

.disabled {
  @utils-disabled #ccc #f00 #333;
}

```

### 使用autoprefixer

css代码中的前缀支持和[package.json](package.json)中browserslist项有关，具体参考信息参考[browserslist](https://www.npmjs.com/package/browserslist)

[package.json](package.json)中browserslist的默认值是,

```json

  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]

```

这种配置不会生成火狐相关的前缀，例如：

```css

  /**before**/
  .test-autoprefixer {
    display: flex;
  }
  
  /**after**/
  
  .test-autoprefixer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  

```

如果改成以下配置

```json

  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8",
    "Firefox > 20"
  ]

```

则css会变成

```css

  /**before**/
  .test-autoprefixer {
    display: flex;
  }
  
  /**after**/
  
  .test-autoprefixer {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
  }
  

```

## Vuex

Vuex是为了解决多个组件共享状态时，单向数据流的简介性被破坏的问题。

什么情况下使用：

>如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态

