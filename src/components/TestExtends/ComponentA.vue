<template>
    <div>
      ComponentA
    </div>
</template>
<script>
    export default {
      name: "ComponentA",
      methods:{
          helloFromA(){
            console.log("function helloFromA")
          }
      },
      mounted() {
          console.log("mounted helloFromA")
      }
    }
</script>

<style scoped>

</style>
