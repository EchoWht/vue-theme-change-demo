<template>
    <p>{{msg}}aaaaaaaaaaa</p>
</template>

<script>

    export default {
        name: 'login',
        data () {
            return {
                uid:this.$route.params,
                msg: '这是第二个页面'
            }
        },
        computed: {

        },
        mounted: function() {
            console.log(this.uid);
        },
        methods:{

        }
    }
</script>
