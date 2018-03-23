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
                const observable = Rx.Observable.from([1, 2, 3]);

                observable.subscribe(
                    x => console.log('Observer got a next value: ' + x),
                    err => console.error('Observer got an error: ' + err),
                    () => console.log('Observer got a complete notification')
                );
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
