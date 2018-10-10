import 'babel-polyfill'
import Vue from 'vue'
import App from './components/App.vue'


window.app = new Vue({
    render: h => h(App)
}).$mount('#app')