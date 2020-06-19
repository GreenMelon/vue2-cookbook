<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="example"></div>
    </main>
</template>

<script>
// 复制剪切粘贴
import Handsontable from 'handsontable';
import SheetClip from 'node/handsontable/lib/SheetClip/SheetClip';
import MockData from '@/data/handsontable-01';
import ContextMenu from '../config/context-menu';

export default {
    data() {
        return {
            table: {},
            data: [],
            selection: [],
        }
    },

    mounted() {
        this.$nextTick(this.init);
    },

    methods: {
        init() {
            const self = this;
            this.data = this.generateData(10, 10);

            const container = document.getElementById('example');
            this.table = new Handsontable(container, {
                data: this.data,
                rowHeaders: true,
                colHeaders: true,
                contextMenu: true,
                multiSelect: true,
                className: 'htCenter htMiddle',
                fillHandle: true,
                beforeCopy(data, coords) {
                    console.log('beforeCopy', data, coords);
                },
                afterCopy(data, coords) {
                    console.log('afterCopy', data, coords);
                    window.clipboardCache = SheetClip.stringify(data);
                },
                beforeCut(data, coords) {
                    console.log('beforeCut', data, coords);
                },
                afterCut(data, coords) {
                    console.log('afterCut', data, coords);
                    window.clipboardCache = SheetClip.stringify(data);
                },
                beforePaste(data, coords) {
                    console.log('beforePaste', data, coords);
                    // If returns false then pasting is cancelled.
                },
                afterPaste(data, coords) {
                    console.log('afterPaste', data, coords);
                },
                afterOnCellCornerDblClick() {
                    // console.log('afterOnCellCornerDblClick');
                },
                afterOnCellCornerMouseDown(event) {
                    // console.log('afterOnCellCornerMouseDown', event);
                },
                afterSelection(startRow, startCol, endRow, endCol) {
                    self.selection = [startRow, startCol, endRow, endCol];
                    // console.log('afterSelection', self.selection);
                },
                beforeAutofill(startCellCoords, endCellCoords, data) {
                    console.log('beforeAutofill', startCellCoords, endCellCoords, data);

                    const { selection } = self;
                    let direction;
                    let originalData;
                    if (startCellCoords.row === endCellCoords.row && startCellCoords.col === endCellCoords.col) {
                        return;
                    } else if (startCellCoords.row === endCellCoords.row) {
                        direction = 'horizontal';
                    } else if (startCellCoords.col === endCellCoords.col) {
                        direction = 'vertical';
                    }

                    if (direction === 'vertical') {
                        originalData = self.getCellDataAtCol(selection[1], selection[0], selection[2]);
                    } else if (direction === 'horizontal') {
                        originalData = self.getCellDataAtRow(selection[0], selection[1], selection[3]);
                    }
                    console.log('originalData', originalData);

                    const res = self.validateArithmeticProgression(originalData);
                    console.log('validateResult', res);

                    if (res.isValid) {
                        setTimeout(() => {
                            let index = 1;
                            if (direction === 'vertical') {
                                for (let i = startCellCoords.row; i <= endCellCoords.row; i++) {
                                    self.table.setDataAtCell(i, endCellCoords.col, res.start + index * res.d);
                                    index++;
                                }
                            } else if (direction === 'horizontal') {
                                for (let i = startCellCoords.col; i <= endCellCoords.col; i++) {
                                    self.table.setDataAtCell(endCellCoords.row, i, res.start + index * res.d);
                                    index++;
                                }
                            }
                        }, 10);
                    }
                },
            });

            this.table.updateSettings({
                contextMenu: ContextMenu
            });
        },
        generateData(rows = 1, cols = 1) {
            const data = [];
            while (rows > 0) {
                data.push(new Array(cols).fill(''));
                rows--;
            }
            return data;
        },
        getCellDataAtCol(col, startRow, endRow) {
            const series = [];
            for (let i = startRow; i <= endRow; i++) {
                const data = this.table.getDataAtCell(i, col);
                series.push(data);
            };
            return series;
        },
        getCellDataAtRow(row, startCol, endCol) {
            const series = [];
            for (let i = startCol; i <= endCol; i++) {
                const data = this.table.getDataAtCell(row, i);
                series.push(data);
            };
            return series;
        },
        validateArithmeticProgression(data) {
            let isValid = true;

            if (data.length === 0 || (data.length === 1 && data[0] === '')) {
                return { isValid: false };
            } else if (data.length === 1 && data[0] !== '') {
                return {
                    isValid,
                    start: Number(data[0]),
                    d: 1,
                };
            }

            const a1 = +data[0];
            const d = data[1] - a1;
            data.every((item, index) => {
                if (item === '' || Number(item) !== (index * d + a1)) {
                    isValid = false;
                }
                return isValid;
            });

            let start;
            if (isValid) {
                start = +data[data.length - 1];
            }

            return { isValid, start, d };
        },
    },
};
</script>
