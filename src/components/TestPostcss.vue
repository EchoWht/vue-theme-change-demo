<template>
    <div>
      <h2 class="disabled">Test postcss</h2>
      scss中使用 @utils-disabled
      <code lang="scss">
        .disabled {
          @utils-disabled #ccc #f00 #333;
        }
      </code>
      <hr>
      css会自动生成
      <code lang="css">
        .disabled {
          background-color: #ccc;
          border-color: #f00;
          color: #333;
          cursor: default;
          pointer-events: none;
        }
      </code>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>
<style lang="scss">
  @import '~@/assets/scss/test-postcss-utils';
</style>
