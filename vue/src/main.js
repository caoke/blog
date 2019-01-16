import 'babel-polyfill'
import Vue from 'vue'
import router from './routes'
import store from './store'
import 'vue-awesome/icons'
import App from './components/App.vue'

// 中间组件
window.bus = new Vue()

Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text)  // => "hello!"
    el.style.background = binding.value.color
    el.innerHTML = binding.value.text
})

// 1 注册全局组
Vue.component('my-component', {
    // template 只能有一个根元素
    template: '<p>A custom component!</p>',
    // 组件中的 `data` 必须是函数 并且函数的返回值必须是对象
    data() {
        return {
            msg: '注意：组件的data必须是一个函数！！！'
        }
    }
})

window.app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')