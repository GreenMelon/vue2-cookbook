<style lang="less" scoped>
</style>

<template>
    <main>
        <button type="button">click</button>
    </main>
</template>

<script>
    import Rx from 'rxjs/Rx';

    export default {
        data() {
            return {}
        },
        methods: {
            init() {
                const button = document.querySelector('button');

                Rx.Observable
                    .fromEvent(button, 'click')
                    .subscribe(() => console.log('clicked'));
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
