<style lang="less" scoped>
</style>

<template>
    <main>
        <div>
            <v-table
                :settings="config.settings"
            ></v-table>
        </div>
    </main>
</template>

<script>
    import VTable from './v-table';
    import Handsontable from 'handsontable';
    import ContextMenu from '../config/context-menu';
    import productIndex from '@/data/product-index';

    function myRenderer(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);

        if (value.type === 'radio') {
            td.innerHTML = `<input type="radio" name="radio-${value.group}"> ${value.text}`;
        }

        if (value.type === 'head') {
            td.innerHTML = `${value.text}`;
        }
    };

    Handsontable.renderers.registerRenderer('myRenderer', myRenderer);

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
                        cells(row, col, prop) {
                            const cellProperties = {};
                            cellProperties.renderer = myRenderer;
                            return cellProperties;
                        },
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
                        });
                    });
                });

                this.config.settings.data = data;
            },
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
