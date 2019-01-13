<template>
    <div class="list">
        {{msg}}
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: "list",
    data() {
        return {
            msg: ''
        }
    },
    methods:{
        
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
