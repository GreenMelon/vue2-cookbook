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
    mounted() {
        this.$nextTick(function () {
            // this.$el;
        });
    },
};
</script>

<style lang="less">
@import './less/main.less';
</style>
