<template>
  <div>
    <div>Scoped:只对当前组件生效，对父组件子组件没有影响</div>
    <span class="test">Test</span>
    <div class="only">
      <!--   如果想通过父组件控制子组件样式，可以通过class的选择器控制，例如 .only .test   -->
      <test-one ></test-one>
    </div>
  </div>
</template>

<script>
  import TestOne from './TestOne'
    export default {
        name: "TestScoped",
      components:{TestOne}
    }
</script>

<style scoped>
   .test{
    color: #005d65;
     font-size: 30px;
  }
</style>
