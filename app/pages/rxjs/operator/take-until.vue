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
                const interval = Rx.Observable.interval(1000);
                const click = Rx.Observable.fromEvent(document, 'click');
                const result = interval.takeUntil(click);

                result.subscribe(x => console.log(x));
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
