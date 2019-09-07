export default {
  data(){
    return{
      message: '来自mixin的数据message',
      message3: '来自mixin的数据message3',
      book:{
        name:'java 编程思想',
        author:'埃克尔、陈昊鹏',
        year:'2007'
      },
      schools:[
        {
          name:'北京大学'
        }
      ]
    }
  },
  mounted: function () {
    console.log('在mixin的mounted中输出被组件覆盖的变量:',this.message)
    console.log('在mixin的mounted中输出组件中定义的变量:',this.message2)
  },
  methods: {
    hello: function () {
      console.log('在mixin 中定义的函数')
    }
  }
}
