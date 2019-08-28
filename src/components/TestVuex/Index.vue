<template>
  <div>
    <other-component></other-component>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <router-link to="/test/vuex/other">查看另一个路由下的值</router-link>
  </div>
</template>

<script>
  import store from './store'
  import OtherComponent from './OtherComponent'
    export default {
        name: "TextVuex",
      components:{OtherComponent},
      computed: {
        count () {
          return store.state.count
        }
      },
      methods: {
        increment () {
          store.commit('increment')
        },
        decrement () {
          store.commit('decrement')
        }
      }
    }
</script>

<style scoped>

</style>
