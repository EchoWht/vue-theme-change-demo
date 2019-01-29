<template>
    <div class="TreeGrid">
       <h1>treegrid</h1>
        <tree-grid-item :model="treeData"></tree-grid-item>
    </div>
</template>
<script>
    import TreeGridItem from "./TreeGridItem";
    export default {
        name: 'TreeGrid',
        components: {TreeGridItem},
        props: {
        },
        data:function () {
           return {
               treeData:{
                   name: "1",
                   level:1,
                   children: [
                       {
                           name: "1-1",level:2,
                           children: [{ name: "1-1-1",level:3 }, { name: "1-1-2" ,level:3}]
                       },
                       { name: "1-2" ,level:2}
                   ]
               }
           }
        }
    };
</script>
