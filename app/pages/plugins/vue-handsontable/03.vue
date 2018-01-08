<style lang="less" scoped>
</style>

<template>
    <main>
        <div>
            <v-table
                ref="productIndexTable"
                :settings="config.settings"
            ></v-table>
        </div>
        <button
            @click="update"
            type="button">update
        </button>
    </main>
</template>

<script>
    import $ from 'jquery';
    import VTable from './v-table';
    import Handsontable from 'handsontable';
    import ContextMenu from '../config/context-menu';
    import productIndex from '@/data/product-index';

    // custom renderer
    function radioRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);

        if (value.type === 'radio') {
            td.innerHTML = `<input type="radio" name="radio-${value.group}"> ${value.text}`;

            $(td.children[0]).on('click', function() {
                console.log('instance', prop, instance);
                value.checked = this.checked;
            });

            if (value.checked) {
                setTimeout(function() {
                    $(td.children[0]).prop('checked', true);
                }, 20);
            }
        }

        if (value.type === 'head') {
            td.innerHTML = `${value.text}`;
        }
    };
    Handsontable.renderers.registerRenderer('radioRenderer', radioRenderer);

    // custom editor
    const radioEditor = Handsontable.editors.TextEditor.prototype.extend();
    radioEditor.prototype.beginEditing = function() {
        Handsontable.editors.TextEditor.prototype.beginEditing.apply(this, arguments);

        this.TEXTAREA = document.createElement('input');

        // if (this.TD.children[0].checked) {
        //     this.originalValue.checked = true;
        // }

        console.log('beginEditing', this);

        this.TEXTAREA.value = this.originalValue.text;
        Handsontable.dom.empty(this.TEXTAREA_PARENT);
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
        this.TEXTAREA.focus();
    };
    radioEditor.prototype.close = function() {
        Handsontable.editors.TextEditor.prototype.close.apply(this, arguments);

        console.log('close', this);
        this.originalValue.text = this.TEXTAREA.value;
        // if (this.originalValue.checked) {
        //     $(this.TD.children[0]).prop('checked', true);
        // }
    };

    export default {
        components: {
            'v-table': VTable,
        },
        data() {
            return {
                config: {
                    settings: {
                        data: [],
                        colHeaders: true,
                        rowHeaders: true,
                        contextMenu: ContextMenu,
                        // cell: [
                        //     { row: 0, col: 0, readOnly: true },
                        // ],
                        cells(row, col, prop) {
                            const cellProperties = {};
                            cellProperties.renderer = radioRenderer;
                            cellProperties.editor = radioEditor;
                            return cellProperties;
                        },
                        // afterBeginEditing(row, col) {
                        //     // const td = this.getCell(row, col);
                        //     // td.innerHTML = td.textContent;
                        // },
                    },
                },
            }
        },
        computed: {},
        methods: {
            init() {
                this.convertData();
            },
            convertData() {
                const data = [];

                productIndex.values.forEach((group, groupIndex) => {
                    data[groupIndex] = [];

                    data[groupIndex].unshift({
                        group: groupIndex,
                        text: productIndex.heads[groupIndex] || '',
                        type: 'head',
                    });

                    group.forEach((item) => {
                        data[groupIndex].push({
                            group: groupIndex,
                            text: item.text,
                            type: item.type || 'radio',
                            checked: item.checked,
                        });
                    });
                });

                this.config.settings.data = data;
            },
            update() {
                const data = this.config.settings.data;
                data[0][1].text = '指数666';
                this.$refs.productIndexTable.$refs.hotTable.table.render();
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
