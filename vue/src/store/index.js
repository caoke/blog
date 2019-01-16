//  store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        clickCount: 0,
        todos: [
            { text: "learn JavaScript", done: false },
            { text: "learn Vue", done: false },
            { text: "play around in JSFiddle", done: true },
            { text: "build something awesome", done: true }
        ]
    },
    getters,
    actions: {
        addClickCount: ({ commit }) => {
            // commit('increment')
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        commitTodo: ({commit}, params) => {
            commit('commitTodo', params)
        }
    },
    mutations: {
        increment (state) {
          state.clickCount++
        },
        commitTodo (state, params) {
            state.todos.push(params)
        }
    }
})

export default store