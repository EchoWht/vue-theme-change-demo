<template>
    <div>
      ComponentB
    </div>
</template>

<script>
  import ComponentA from './ComponentA'
    export default {
      name: "ComponentB",
      extends:ComponentA,
      mounted() {
        this.helloFromA()
      }
    }
</script>

<style scoped>

</style>
