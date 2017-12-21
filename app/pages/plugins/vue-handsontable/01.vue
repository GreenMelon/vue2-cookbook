<style lang="less" scoped>
</style>

<template>
    <main>
        <div>
            <v-hot-table
                :root="config.root"
                :settings="config.settings"
            ></v-hot-table>
        </div>
    </main>
</template>

<script>
    // import Handsontable from 'handsontable';
    import VueHotTable from 'vue-handsontable-official';
    import data from '@/data/handsontable-01';
    // const Handsontable = require('handsontable');

    const RadioRenderer = (instance, td, row, col, prop, value, cellProperties) => {
        // Handsontable.renderers.TextRenderer.apply(this, arguments);
    };

    const _data = data.map((item, index) => {
        return Object.assign({}, item, {
            content: `<input type="checkbox"> ${item.text}`,
        });
    });

    export default {
        components: {
            'v-hot-table': VueHotTable,
        },
        data() {
            return {
                config: {
                    root: 'example',
                    settings: {
                        data: _data,
                        columns: [
                            {
                                data: 'id',
                                type: 'text',
                            },{
                                data: 'name',
                                type: 'text',
                            },{
                                data: "date",
                                type: 'date',
                                dateFormat: 'YYYY-MM-DD',
                            },{
                                data: 'active',
                                renderer: RadioRenderer,
                            },{
                                data: 'checked',
                                type: 'checkbox',
                            },{
                                data: 'content',
                                renderer: 'html',
                            }
                        ],
                        colHeaders: true,
                        rowHeaders: true,
                    },
                },
            }
        },
        computed: {},
        methods: {
            init() {
                //
            },
        },
        mounted() {
            //
        },
    };
</script>
