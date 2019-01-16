<template>
    <div class="list">
        <label>新增待办事项：</label>
        <input v-model="obj.text">
        <button @click="addTodo">添加</button>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: "list",
    data() {
        return {
            msg: '',
            obj: {
                text: '',
                done: false
            }
        }
    },
    methods:{
        ...mapActions(['commitTodo']),
        addTodo() {
            this.commitTodo(this.obj)
            this.$router.push('/list')
        }
    },
    mounted() {
        window.bus = window.bus ? window.bus : new Vue()
        window.bus.$on('tellComB',(msg) => {
            this.msg = msg
        })
    }
}
</script>

<style>

</style>
