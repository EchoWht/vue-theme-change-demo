<template>
  <component-b></component-b>
</template>

<script>
  /**
   * ComponentB extend ComponentA
   */
  import ComponentB from './ComponentB'
    export default {
      name: "TestExtendsIndex",
      components:{ComponentB}
    }
</script>

<style scoped>

</style>
