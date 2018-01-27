<template>
    <div>{{ title }}</div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
            }
        },
        methods: {},
        mounted() {
            this.title = 'Hello world';

            this.$nextTick(function () {
                // this.$el;
            });
        },
    }
</script>
