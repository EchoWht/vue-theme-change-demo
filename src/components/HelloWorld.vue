<template>
    <div id="app">
        <div><router-link to="/">首页</router-link></div>
        <div><a href="javascript:void(0)" @click="getMovieDetail(1)">去第二个页面</a></div>
        <div><router-link to="/home">去home</router-link></div>
        <router-view/>

        <a href="https://www.feiyit.com">abc</a>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods:{
            getMovieDetail(id) {
                this.$router.push({
                    name: 'TestPostcss',
                    params: {
                        id: id,
                        name:123
                    }
                })
            }
        }
    }
</script>
