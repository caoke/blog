<template>
    <div class="list">
        <p><router-link :to="{path: '/add'}">新建</router-link></p>
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
        
        <button @click="changeClickCount">点击我</button>
        <span>{{clickCount}}</span>

        <my-component></my-component>
        <transition name="fade">
            <router-link :to="{path: '/detail/3'}" tag="button">点击查看详情</router-link>
        </transition>
        <h2>已经完成的事情列表</h2>
        <ol>
            <li v-for="todo in doneTodos">
                {{todo.text}}
            </li>
        </ol>
        
    </div>
</template>

<script>
import Todo from '~/todo.vue'
import Add from '~/Add.vue'
import Vue from 'vue'
import {mapGetters, mapState, mapActions } from 'vuex'

export default {
    name: 'todoList',
    components:{
        Todo,
        Add
    },
    data() {
        return {
            donedData: []
        }
    },
    computed: {
        ...mapState([
           'clickCount',
            'todos'
        ]),
        ...mapGetters(['doneTodos']),
        count() {
            return this.todos.length;
        },
        countDone() {
            return this.doneTodos.length
        }
    },
    watch:{

    },
    methods:{
        ...mapActions(["addClickCount"]), // 将 `this.addClickCount()` 映射为 `this.$store.commit('addClickCount')`
        changeClickCount() {
            // this.$store.commit('increment')
            this.addClickCount()
        }
    },
    mounted() {
        
    }
}
</script>

<style>
div{
    width: 50%;
    margin: 10px;
}
a{
    text-decoration: none;
    color: blue;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 10s;
}
.fade-enter, .fade-leave-active{
    opacity: 0;
}
</style>
