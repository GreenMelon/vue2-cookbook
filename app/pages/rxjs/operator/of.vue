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
                const letters = Rx.Observable.of('a', 'b', 'c');
                const interval = Rx.Observable.interval(1000);
                const result = numbers.concat(letters).concat(interval);
                result.subscribe(x => console.log(x));
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
