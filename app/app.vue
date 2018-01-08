<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <modules :modules="modules"></modules>
        <router-view></router-view>
    </div>
</template>

<script>
    import './components/categories';
    import './components/modules';

    export default {
        data() {
            return {
                modules: [
                    {
                        name: 'components',
                        route: '/components',
                    },{
                        name: 'events',
                        route: '/events',
                    },{
                        name: 'plugins',
                        route: '/plugins',
                    },{
                        name: 'instances',
                        route: '/instances',
                    }
                ],
                title: 'app',
            }
        },
        methods: {},
        mounted() {
            this.title = 'Hello world';

            this.$nextTick(function () {
                // this.$el;
            });
        },
    }
</script>
