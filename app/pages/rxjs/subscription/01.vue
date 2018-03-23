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
                const observable1 = Rx.Observable.interval(400);
                const observable2 = Rx.Observable.interval(300);

                const subscription = observable1.subscribe(x => console.log('first: ' + x));
                const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

                subscription.add(childSubscription);

                setTimeout(() => {
                    // subscription 和 childSubscription 都会取消订阅
                    subscription.unsubscribe();
                }, 1000);

                // subscription.remove(childSubscription);
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
