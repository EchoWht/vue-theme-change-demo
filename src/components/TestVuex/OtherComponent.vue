<template>
  <div>{{count}}</div>
</template>

<script>
  import store from './store'
    export default {
        name: "OtherComponent",
      computed: {
        count () {
          return store.state.count
        }
      },
    }
</script>

<style scoped>

</style>
