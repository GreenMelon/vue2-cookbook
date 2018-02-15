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
            binding() {
                const button = document.querySelector('button');

                Rx.Observable
                    .fromEvent(button, 'click')
                    .subscribe(() => alert('Clicked!'));
            },
        },
        mounted() {
            this.binding();
        },
    };
</script>
