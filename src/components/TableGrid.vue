<template>
    <div>
        <h2>TableGrid(TreeGrid)</h2>
        <span>使用的是bootstrop的css</span>
        <table class="table table-hover">
            <tbody>
                <tr v-for="item in items" :parent="item.parent" v-show="item.isShow" >
                    <td><span @click="toggle(item)" :class="item.isOpen?'glyphicon glyphicon-menu-up':'glyphicon glyphicon-menu-down'"></span></td>
                    <!--<td :style="textIndent(item)">{{item.title}}</td>-->
                    <td :style="textIndent(item)">{{item.id}}</td>
                    <td>{{item.isShow}}</td>
                    <td style="color: red">{{item.sort}}</td>
                </tr>
            </tbody>
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
                realItems:[
                    {
                        id:'1',
                        child:[
                            {
                                id:'1-1',

                                child:[
                                    {
                                        id:'1-1-1'
                                    }
                                ],
                            },
                            {
                                id:'1-2'
                            }

                        ],
                    }
                    ,
                    {
                        id:'2'
                    }
                    ,
                    {
                        id:'3',
                        child:[
                            {
                                id:'3-1'
                            }
                        ],
                    }
                ],
                format:[],
                items:[
                    // {id:'abcd',title:'1',level:1,parent:'ROOT',isShow:true},
                    // {id:'efgh',title:'1-1',level:2,parent:'abcd',isShow:false},
                    // {id:'igkl',title:'1-1-1',level:3,parent:'efgh',isShow:false},
                    // {id:'mn',title:'1-1-1-1',level:4,parent:'igkl',isShow:false},
                    // {id:'op',title:'1-1-1-2',level:4,parent:'igkl',isShow:false},
                    // {id:'191',title:'1-2',level:2,parent:'abcd',isShow:false},
                ],
               openIds:['ROOT']
            }
        },
        created:function () {
            this.formatData()
        },
        methods: {
            textIndent: function (item) {
                let textIndent;
                textIndent=item.level*20
                return "text-indent:"+textIndent+"px"
            },
            toggle: function(item) {
                // this.openIds.push(1);
                // this.openIds.splice(1)
                let hasId = this.openIds.indexOf(item.id)
                if (hasId !== -1) {
                    let index = this.openIds.indexOf(item.id);
                    if (index > -1) {
                        this.openIds.splice(index, 1);
                        item.isOpen=false;
                    }
                } else {
                    this.openIds.push(item.id)
                    item.isOpen=true;
                }
                this.eachItem();

            },
            eachItem:function () {
                for (let i=0;i<this.items.length;i++){
                    let hasId=this.openIds.indexOf(this.items[i].parent)
                    if (hasId>-1){
                        this.items[i].isShow=true;

                    }else {
                        this.items[i].isShow=false;
                    }
                }
                this.setChildItem();
            },
            setChildItem:function () {
                for (let i=0;i<this.items.length;i++){
                    //let hasId=this.openIds.indexOf()
                    if (this.items[i].isShow===false){
                        for (let j=0;j<this.items.length;j++){
                            let parent=this.items[j].parent;
                            if (parent===this.items[i].id){
                                this.items[j].isShow=false
                                console.log(this.items[j])
                                //debugger
                                //this.setChildItem(this.items[i].id)
                            }
                        }
                    }
                }
            },
            formatData:function(data,parentId,level,deep,sort) {
                if (!data){
                    data=this.realItems
                }
                if (!level){
                    level=1
                }
                if (!parentId){
                    parentId="ROOT"
                }
                if (!deep){
                    deep=1
                }
                if (!sort){
                    sort=0
                }
                for (let i=0;i<data.length;i++){
                    let obj={id:'',sort:'',title:'',isShow:false,level:'',parent:''};
                    if (parentId==="ROOT") {
                        obj.isShow=true;
                    }
                    if (data[i].isShow){
                        obj.isShow=true;
                        this.openIds.push(data[i].id)
                        data[i].isOpen=true;
                    }
                    obj.parent=parentId;
                    obj.level=level;
                    obj.sort=(i+1)*deep+sort
                    obj.id=data[i].id
                    if (data[i].child){
                        this.formatData(data[i].child,data[i].id,level+1,deep*0.1,obj.sort)
                    }
                    this.items.push(obj)
                }
                this.items=this.items.sort(this.compare('sort'))
            },
            compare:function(property){
                return function(a,b){
                    let value1 = a[property];
                    let value2 = b[property];
                    return value1 - value2;
                }
            }
        }
    };
</script>

<style>

</style>
