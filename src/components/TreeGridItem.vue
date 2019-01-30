<template>
    <table>
        <tr>
            <td width="200px" @click="toggle">{{ model.name }}</td>
            <td>pppppp</td>
        </tr>
        <tr v-show="open" v-for="(model,index) in model.children"
            :key="index">
            <td colspan="2">
                <tree-grid-item :model="model"> </tree-grid-item>
            </td>
        </tr>
    </table>
</template>
<script>
    export default {
        name: 'TreeGridItem',
        props: {
            model: Object
        },
        data: function() {
            return {
                open: false
            };
        },
        computed: {
            hasChild: function() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle: function() {
                if (this.hasChild) {
                    this.open = !this.open;
                }
            }
        }
    }
</script>
<style>
    table{
        width: 100%;
    }
    td{
        border: 1px black solid;
    }
</style>
