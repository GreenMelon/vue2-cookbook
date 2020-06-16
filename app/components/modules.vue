<template>
    <aside>
        <ul class="mod-modules list-module">
            <li
                v-for="module in modules"
                v-bind:key="module.name"
                class="item"
            >
                <router-link
                    :to="module.route"
                    :class="{active: $route.path.startsWith(module.route)}">{{ module.name }}
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

const Modules = Vue.extend({
    props: {
        modules: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            localCount: 10,
        }
    },
    // 方式 1
    computed: {
        count () {
            return this.$store.state.count;
        },
        doneTodosCount () {
            return this.$store.getters.doneTodosCount;
        },
        // 方式 1
        // ...mapGetters([
        //     'anotherGetter'
        // ]),
        // 方式 2
        // mapGetters({
        //     doneCount: 'doneTodosCount'
        // }),
    },
    // 方式 2
    // computed: mapState({
    //     count: state => state.count,

    //     countAlias: 'count', // 传字符串参数 'count' 等同于 `state => state.count`

    //     countPlusLocalState (state) {
    //         return state.count + this.localCount // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    //     },
    // }),
    // 方式 3
    // computed: mapState([
    //     'count' // 映射 this.count 为 store.state.count
    // ]),
    // 方式 4
    // computed: {
    //     localComputed () {},
    //     ...mapState({
    //         // 使用对象展开运算符将此对象混入到外部对象中
    //     }),
    // },
    methods: {
        add() {
            this.$store.dispatch('increment', this.localCount);
        },
        // 方式 1 
        // ...mapMutations([
        //     'increment'
        // ]),
        // 方式 2
        // ...mapMutations({
        //     add: 'increment',
        // }),
    },
});

Vue.component('modules', Modules);

export default Modules;
</script>
