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
                const observable = Rx.Observable.create(function (observer) {
                    observer.next(1);
                    observer.next(2);
                    observer.next(3);

                    setTimeout(() => {
                        observer.next(4);
                        observer.complete();
                    }, 1000);
                });

                console.log('just before subscribe');

                const subscription = observable.subscribe({
                    next: x => console.log('got value ' + x),
                    complete: () => console.log('done'),
                });

                console.log('just after subscribe');

                subscription.unsubscribe();
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
