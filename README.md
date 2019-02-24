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

## 使用 [postcss-utils](https://npm.taobao.org/package/postcss-utils)

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


