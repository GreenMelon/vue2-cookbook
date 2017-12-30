<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="example"></div>
    </main>
</template>

<script>
    import Handsontable from 'handsontable';
    import SheetClip from 'node/handsontable/lib/SheetClip/SheetClip';
    import MockData from '@/data/handsontable-01';
    import ContextMenu from '../config/context-menu';

    export default {
        data() {
            return {
                table: {},
                data: [
                    [1, 2, 3, 4, 5],
                    [6, 7, 8, 9, 10],
                    [11, 12, 13, 14, 15],
                ],
            }
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('example');
                this.table = new Handsontable(container, {
                    // data: MockData,
                    data: this.data,
                    rowHeaders: true,
                    colHeaders: true,
                    contextMenu: true,
                    beforeCopy: function (data, coords) {
                        console.log('beforeCopy', data, coords);
                    },
                    afterCopy: function (data, coords) {
                        console.log('afterCopy', data, coords);
                        window.clipboardCache = SheetClip.stringify(data);
                    },
                    beforeCut: function (data, coords) {
                        console.log('beforeCut', data, coords);
                    },
                    afterCut: function (data, coords) {
                        console.log('afterCut', data, coords);
                        window.clipboardCache = SheetClip.stringify(data);
                    },
                    beforePaste: function (data, coords) {
                        console.log('beforePaste', data, coords);
                        // If returns false then pasting is cancelled.
                    },
                    afterPaste: function (data, coords) {
                        console.log('afterPaste', data, coords);
                    },
                });

                this.table.updateSettings({
                    contextMenu: ContextMenu
                });
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
