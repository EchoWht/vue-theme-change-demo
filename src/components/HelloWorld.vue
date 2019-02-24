<template>
  <div>
      <div class="disabled">{{msg}}</div>
      <div class="ellipsis"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '~@/assets/scss/test-postcss-utils';
  .ellipsis {
    @utils-ellipsis;
  }
</style>
