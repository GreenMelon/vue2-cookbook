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

                    try {
                        a.b = 1;
                    } catch(error) {
                        observer.error(error);
                    }
                });

                console.log('just before subscribe');

                observable.subscribe({
                    next: x => console.log('got value ' + x),
                    error: err => console.error('something wrong occurred: ' + err),
                    complete: () => console.log('done'),
                });

                console.log('just after subscribe');
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
