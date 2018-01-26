<style lang="less" scoped>
    .container {
        margin-top: 30px;
    }
</style>

<template>
    <main>
        <div id="example"></div>

        <div class="container">
            <button
                @click="save"
                type="button">click
            </button>
        </div>
    </main>
</template>

<script>
    import Handsontable from 'handsontable';
    import ContextMenu from '../config/context-menu';

    export default {
        data() {
            return {
                table: {},
                data: [
                    [
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                        { text: 5 }
                    ],[
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                        { text: 5 }
                    ],[
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                        { text: 5 }
                    ],[
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                        { text: 5 }
                    ],[
                        { text: 1 },
                        { text: 2 },
                        { text: 3 },
                        { text: 4 },
                        { text: 5 }
                    ]
                ],
                setting: {
                    rowHeaders: true,
                    colHeaders: true,
                    contextMenu: true,
                    className: 'htCenter htMiddle',
                    fillHandle: true,
                    minCols: 8,
                    minRows: 8,
                    minSpareCols: 1,
                    minSpareRows: 1,
                },
            }
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('example');
                this.table = new Handsontable(container, Object.assign({
                    data: this.data,
                }, this.setting));

                this.table.updateSettings({
                    contextMenu: ContextMenu
                });
            },
            save() {
                const { table } = this;
                const rowCount = table.countRows();
                const colCount = table.countCols();
                const rows = [];
                const cols = [];

                for (let i = 0; i < rowCount; i++) {
                    if (!table.isEmptyRow(i)) {
                        rows.push(i);
                    }
                }

                for (let j = 0; j < colCount; j++) {
                    if (!table.isEmptyCol(j)) {
                        cols.push(j);
                    }
                }

                const minRow = rows[0] || 0;
                const maxRow = rows.length >= 1 ? rows[rows.length - 1] : minRow;
                const minCol = cols[0] || 0;
                const maxCol = cols.length >= 1 ? cols[cols.length - 1] : minCol;

                const data = this.table.getData(minRow, minCol, maxRow, maxCol);

                console.log('data', data);
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
