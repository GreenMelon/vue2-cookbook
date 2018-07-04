import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
    },

    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
    },

    mutations: {
        increment (state, n) {
            // 变更状态
            state.count += n;
        },
        decrement (state, payload) {
            state.count += payload.amount
        },
    },

    actions: {
        increment (context) {
            context.commit('increment');
        },
        decrement ({ commit }, x) {
            // store.commit('decrement', {
            //     amount: 10,
            // });
            commit({
                type: 'decrement',
                amount: x,
            });
        },
    },
});

export default store;
