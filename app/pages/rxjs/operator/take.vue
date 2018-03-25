<template>
    <main></main>
</template>

<script>
    import Rx from 'rxjs/Rx';

    export default {
        data() {
            return {}
        },
        methods: {
            init() {
                const numbers = Rx.Observable.of(10, 20, 30);
                const result = numbers.take(2);
                result.subscribe(x => console.log(x));
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
