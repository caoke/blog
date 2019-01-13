// routes/index.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const List = () => import(/* webpackChunkName: "Index" */ '../components/List.vue')
const Add = () => import(/* webpackChunkName: "Index" */ '../components/Add.vue')
const routes = [
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/',
        redirect: {
            name: 'list'
        }
    }
]

export default new Router({
    routes
})
