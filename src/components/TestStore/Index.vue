<template>
    <div>
      {{message}}
      <button @click="setStoreMessage">SET</button>
    </div>
</template>

<script>
  import store from './store'
    export default {
        name: "TestStore",
        data(){
          return{
            message:store.state.message
          }
        },methods:{
          setStoreMessage:function () {
            store.setMessageAction("Hello Li")
            console.log(store.state.message)
          }
      }
    }
</script>

<style scoped>

</style>
