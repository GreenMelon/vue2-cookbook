<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="example"></div>
    </main>
</template>

<script>
    import Handsontable from 'handsontable';
    import data from '@/data/handsontable-01';

    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('example');
                const table = new Handsontable(container, {
                    data: data,
                    rowHeaders: true,
                    colHeaders: true,
                });
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
