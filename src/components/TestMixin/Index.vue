<template>

</template>

<script>
  import mixin from './mixin'
    export default {
        name: "Index",
        mixins:[mixin],
      data(){
          return{
            message: '覆盖了mixin中定义的message',
            message2:'来自组件定义的message2',
            book:{
              name:'java 编程思想',
              other_name:'Thinking In java',
              author:'埃克尔'
            },
            schools:[
              {
                name:'清华大学'
              }
            ]
          }
      },
        mounted() {
          console.log('在组件中调用:',this.message)
          console.log(this.book)
          console.log(this.schools)
        }
    }
</script>

<style scoped>

</style>
