<template>
    <input v-model="firstName" placeholder="edit me">
    <p>Message is: {{ firstName }}</p>
        <div>{{calFullName}}</div>
</template>

<script>

    export default {
        name: "TestComputed",
        data(){
            return{
                firstName:'Wang',
                lastName:'Haotian',
                fullName:''
            }
        },
        computed:{
            calFullName(){
               return this.firstName+this.lastName
            }
        }
    }
</script>

<style scoped>

</style>