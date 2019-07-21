<template>
  <footer>
    <h2>这个区域是Footer组件</h2>
    <span>{{proverbContent}}</span>
    <hr>
    <h4>这个组件的第一个插槽</h4>
    <slot></slot>
    <hr>
    <h4>这个组件的第二个插槽</h4>
    <slot name="second">
      <p class="green-bg">内容</p>
    </slot>
    <hr>
    <h4>这个组件的第三个插槽，演示父组件用子组件的数据替换掉</h4>
    <slot name="third" v-bind:color="color">
      <p class="green-bg">{{color.green}}</p>
    </slot>
  </footer>
</template>

<script>
    export default {
        name: "PageFooter",
        props:['proverb'],
        data(){
          return{
            proverbContent:"Hello World",
            color:{
              green:"green",
              red:"red"
            }
          }
        },
        mounted() {
          if (this.proverb) {
            this.proverbContent=this.proverb
          }
        }
    }
</script>

<style scoped>
  footer{
      border: solid #005d65;
  }
  .green-bg{
    background: rgba(0, 93, 101, 0.56);
  }
</style>
