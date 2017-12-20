<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <aside>
            <ul class="mod-modules list-module">
                <li v-for="module in modules" class="item">
                    <router-link
                        :to="module.route"
                        :class="{active: $route.path.startsWith(module.route)}">{{ module.name }}
                    </router-link>
                </li>
            </ul>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
    import './components/categories';

    export default {
        data() {
            return {
                modules: [
                    {
                        name: 'components',
                        route: '/components'
                    }
                ]
            }
        },
        methods: {},
        mounted() {
            this.$nextTick(function () {
                // this.$el;
            });
        },
    }
</script>
