<template>
    <label>
        <input type="checkbox"
        v-on:change="toggle"
        v-bind:checked="isDone">
        <del v-if="isDone">
        {{ text }}
        </del>
        <span v-else>
        {{ text }}
        </span>
    </label>
</template>

<script>
import Vue from 'vue'
export default {
    name: "todo",
    props: ['text','done'],
    // props: ["text", "value"],   // <-- v-model  注意 done 改成了 value
    data() {
        return{
            isDone: this.done
            // isDone: this.value    // <-- v-model  注意 this.done 改成了 this.value
        }
    },
    methods:{
        toggle() {
            this.isDone = !this.isDone
            // .sync 实现其它数据绑定 子组件通过在绑定属性名前添加 update: 前缀 传递数据给父组件
            this.$emit("update:done", this.isDone)
            // v-model 实现数据绑定 触发事件名为input
            // this.$emit("input", this.isDone);  // <-- 注意事件名称变了
            window.bus = window.bus ? window.bus : new Vue()
            window.bus.$emit('tellComB', '土豆土豆我是南瓜')
        }
    }

}
</script>

<style>

</style>
