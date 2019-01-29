<template>
    <div class="TreeGrid">
        <h1>treegrid</h1>
        <table>
            <tr v-for="item in items">
                <td>{{item.title}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name: 'TableGrid',

        props: {
        },
        data:function () {
            return {
                items:[
                    {id:1,title:'1',level:1,parent:0},
                    {id:2,title:'1-1',level:2,parent:1},
                    {id:3,title:'1-1-1',level:3,parent:2},
                ]
            }
        },
        methods: {
            toggle: function() {
                let id=this.id;
                if (this.hasChild) {
                    this.open = !this.open;
                }
            }
        }
    };
</script>
