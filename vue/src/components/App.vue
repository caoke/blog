<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Todo from '~/todo.vue'
import Vue from 'vue'
export default {
    name: 'todoList',
    components:{
        Todo
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
