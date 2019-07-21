<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="box">
            <div class="test">
                ABC
            </div>
        </div>
        <div>
            <p @click="changeTheme('theme1')">点击使用配色方案1</p>
            <p @click="changeTheme('theme2')">点击使用配色方案2</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestSass',
        data () {
            return {
                msg: 'This is test sass.'
            }
        },
        mounted () {
            let storage=window.localStorage;
            let theme=storage['data-theme'];
            if (!theme){
               theme='theme1'
            }
            //页面加载完成之后将loaclStorage中的主题取出来
            this.changeTheme(theme)
        },
        methods:{
            changeTheme(theme){
                window.document.documentElement.setAttribute('data-theme',theme)
                //切换主题时将主题信息存放在localStorage中
                let storage=window.localStorage;
                storage['data-theme']=theme;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
</style>
