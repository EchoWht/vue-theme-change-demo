<template>
<!--
组件基础
  props
    通过 Prop 向子组件传递数据
    监听子组件事件
      子组件控制父组件的data
      子组件传递数据到父组件
  slot
    父组件从子组件取数据

https://cn.vuejs.org/v2/guide/components.html

-->
  <div>
    <h2>组件基础</h2>
    <button @click="clickChild">clickChild</button>
    {{someTextFormParent}}
    <page-footer ref="pageFooter" :proverb="saying" v-on:change-parent="someTextFormParent=$event">
      <!--父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。-->
      <!-- 官方：只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法：-->
      <template v-slot:default>
        <p class="color-red">使用插槽方式追加一个带样式的p标签，并且用了<b>{{something}}</b></p>
      </template>
      <template v-slot:second>
          <p>父组件把子组件的第二个插槽内容覆盖掉了</p>
      </template>
      <template v-slot:third="slotProps">
        <!--   slotProps随意起     -->
        <p>这个颜色是父组件从子组件取过来的：{{slotProps.color.red}}</p>
      </template>
    </page-footer>
  </div>
</template>
<script>
  import PageFooter from './PageFooter'
    export default {
        name: "TestProp",
        components:{PageFooter},
        data(){
            return{
              saying:{one:"通过prop传递对象"},
              something:"父级组件的数据",
              someTextFormParent:"父级组件的文字"
            }
        },
      methods:{
          clickChild(){
            this.$refs.pageFooter.childFunction()
          }
      }
    }
</script>

<style scoped>
  .color-red{
      color: darkred;
  }
</style>
