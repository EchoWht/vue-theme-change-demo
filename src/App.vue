<template>
  <div>
    <h1>HomePage</h1>
    <div>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/test/sass">一个sass写的简易切换主题功能</router-link></li>
        <li><router-link to="/test/tablegrid">一个简易的tablegrid</router-link></li>
        <li><router-link to="/test/postcss">如何使用postcss-utils</router-link></li>
        <li><router-link to="/test/component">使用component</router-link></li>
        <li><router-link to="/test/keep-alive">使用keep-alive</router-link></li>
        <li><router-link to="/test/scoped">使用Style Scoped</router-link></li>
        <li><router-link to="/test/vuex">使用Vuex</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import '~@/assets/scss/index';
</style>
