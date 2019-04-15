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
    import './components/toast';

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
                        name: 'instances',
                        route: '/instances',
                    },{
                        name: 'plugins',
                        route: '/plugins',
                    },{
                        name: 'test',
                        route: '/test',
                    }
                ],
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
