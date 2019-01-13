<template>
    <div class="list">
        <!-- todoList 数据双向绑定 -->
        <h2>Todos ({{ countDone }}/{{ count }}):</h2>
        <ol>
            <li v-for="todo in todos">
                <!-- .sync 实现其它数据绑定 子组件通过在绑定属性名前添加 update: 前缀 传递数据给父组件-->
                <todo :text="todo.text" :done.sync="todo.done"></todo>

                <!-- 
                    v-model 实现方式
                    子组件通过 value 属性（Prop）接受输入
                    子组件通过触发 input 事件输出，带数组参数
                    父组件中用 v-model 绑定
                    <todo :text="todo.text" v-model="todo.done"></todo>
                 -->
            </li>
        </ol>
        <div v-demo="{ color: 'red', text: 'hello!' }"></div>
        <router-link :to="{path: '/add'}">新建</router-link>
        <!-- app.vue -->
        <my-component></my-component>
        <add></add>
    </div>
</template>

<script>
import Todo from '~/todo.vue'
import Add from '~/Add.vue'
import Vue from 'vue'

export default {
    name: 'todoList',
    components:{
        Todo,
        Add
    },
    data() {
        return {
            todos: [
                { text: "Learn JavaScript", done: false },
                { text: "Learn Vue", done: false },
                { text: "Play around in JSFiddle", done: true },
                { text: "Build something awesome", done: true }
            ]
        }
    },
    computed: {
        count() {
            return this.todos.length;
        },
        countDone() {
            return this.todos.filter(todo => todo.done).length;
        }
    },
    watch:{

    },
    methods:{
       
    },
    beforeCreate() {
        console.log('bc',this.$el, this.todos)
    },
    created() {
        console.log('c', this.$el, this.todos)
    },
    beforeMount() {
        console.log('bm', this.$el)
    },
    mounted() {
        console.log('m', this.$el)
        
    },
    beforeUpdate() {
        console.log('bu', this.$el, this.todos)
    },
    updated() {
        console.log('u', this.$el, this.todos)
    }

}
</script>

<style>

</style>
