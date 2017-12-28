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
    import ContextMenu from '../config/context-menu';

    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('example');
                let table = new Handsontable(container, {
                    data: data,
                    rowHeaders: true,
                    colHeaders: true,
                    contextMenu: true,
                    dropdownMenu: true,
                    minSpareCols: 2,
                    minSpareRows: 2,
                });

                table.updateSettings({
                    contextMenu: ContextMenu
                });
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
