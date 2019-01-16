<template>
    <div class="detail">
        这里是详情页
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return{

        }
    },
    methods: {
       
    },
    mounted() {
        console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>
