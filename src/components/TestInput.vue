<template>
    <div >
        <span class="jgp-input-num-prev" @click="removeNum">-</span>
        <br>
        <span class="jgp-input-num-next" @click="addNum">+</span>
        <div class="jgp-input">
            <input type="text" class="jgp-input-inner" :value="val">
        </div>
    </div>
</template>


<script>
    //import Common from '../../utils/common'

    /**
     *
     * 项目   jgp-front-pc-dev
     * 作者   zhang yiwen
     * 时间   2019/2/25 9:41
     */
    export default {
        data() {
            return {
                val:5
            }
        },
        props: {
            _max: {
                type: Number,
                default: Infinity
            },
            _min: {
                type: Number,
                default: -Infinity
            },
            _step: {
                type: Number,
                default: 1
            },
        },
        computed: {

        },
        methods: {
            addNum(){
                if (this.val+this._step < this._max){
                    this.val = this.val + this._step
                }
            },
            removeNum(){
                if (this.val-this._step > this._min){
                    this.val = this.val - this.step
                }
            }
        },
        /*
            在实例初始化之后，数据观测 (data observer)
            和 event/watcher 事件配置之前被调用。
        */
        beforeCreate() {
        },
        /*
            在实例创建完成后被立即调用。在这一步，实例已完成以下
            的配置：数据观测 (data observer)，属性和方法的运算，
            watch/event 事件回调。然而，挂载阶段还没开始，
            $ el 属性目前不可见。
        */
        created() {
        },
        /*
            在挂载开始之前被调用：相关的 render 函数首次被调用。
        */
        beforeMount() {
        },
        /*
            el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
            如果 root 实例挂载了一个文档内元素，当 mounted 被调用时
            vm.$ el 也在文档内。

            注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望
            等到整个视图都渲染完毕，可以用 vm.$ nextTick 替换掉 mounted：
        */
        mounted() {
        },
        /*
            数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，
            比如手动移除已添加的事件监听器。
        */
        beforeUpdate() {
        },
        /*
            由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

            当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
            然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使
            用计算属性或 watcher 取而代之。

            注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重
            绘完毕，可以用 vm.$ nextTick 替换掉 updated：
        */
        updated() {
        },
        /*keep-alive 组件激活时调用。*/
        activated() {
        },
        /*keep-alive 组件停用时调用。*/
        deactivated() {
        },
        /*实例销毁之前调用。在这一步，实例仍然完全可用。*/
        beforeDestroy() {
        },
        /*Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。*/
        destroyed() {
        },
    }
</script>

<style>

</style>