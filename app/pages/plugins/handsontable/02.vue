<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="v-table"></div>
        <button @click="getData" type="button">getData</button>
    </main>
</template>

<script>
    import $ from 'jquery';
    import Handsontable from 'handsontable';
    import data from '@/data/handsontable-02';
    import ContextMenu from '../config/context-menu';

    // custom renderer
    function radioRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);

        if (value === null) {
            return;
        }

        if (value.type === 'radio') {
            td.innerHTML = `<input type="radio" name="radio-${value.group}"> ${value.text}`;

            $(td.children[0]).on('change', function() {
                console.log('instance', prop, instance);
                value.selected = this.checked;
            });

            if (value.selected) {
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
        console.log('beginEditing', this);

        this.TEXTAREA = document.createElement('input');
        this.TEXTAREA.value = this.originalValue.text;
        Handsontable.dom.empty(this.TEXTAREA_PARENT);
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    };
    radioEditor.prototype.close = function() {
        Handsontable.editors.TextEditor.prototype.close.apply(this, arguments);
        console.log('close', this);

        // this.originalValue.text = this.TEXTAREA.value;

        const data = this.instance.getData();
        const { row, col } = this;
        data[row][col].text = this.TEXTAREA.value;
        this.instance.render();
    };

    export default {
        data() {
            return {
                table: {},
            }
        },
        computed: {},
        methods: {
            init() {
                const container = document.getElementById('v-table');
                const self = this;
                this.table = new Handsontable(container, {
                    data: data,
                    rowHeaders: true,
                    colHeaders: true,
                    contextMenu: true,
                    dropdownMenu: true,
                    cells(row, col, prop) {
                        const cellProperties = {};
                        cellProperties.renderer = radioRenderer;
                        cellProperties.editor = radioEditor;
                        return cellProperties;
                    },
                    beforeCreateRow: function(index, amount, source) {
                        console.log('beforeCreateRow', index, amount, source);
                    },
                    afterCreateRow: function(index) {
                        let data = self.table.getData();
                        const groupId = ('' + Math.random()).substr(2);
                        let maxLength = 0;
                        data.forEach((group, groupIndex) => {
                            maxLength = group.length > maxLength ? group.length : maxLength;
                        });
                        for (let i = 0; i < maxLength; i++) {
                            if (i === 0) {
                                self.table.setDataAtCell(index, i, {
                                    group: groupId,
                                    type: 'head',
                                    text: '',
                                });
                            } else {
                                self.table.setDataAtCell(index, i, {
                                    group: groupId,
                                    type: 'radio',
                                    text: '',
                                    selected: false,
                                });
                            }
                        }

                        console.log('afterCreateRow', self.table.render());
                    },
                });

                this.table.updateSettings({
                    contextMenu: ContextMenu
                });
            },
            getData() {
                console.log('getData', this.table.getData());
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
