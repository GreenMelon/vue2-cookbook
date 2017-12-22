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
    import ContextMenu from '../config/context-menu';
    import data from '@/data/handsontable-01';

    const RadioRenderer = (instance, td, row, col, prop, value, cellProperties) => {
        //
    };

    const _data = data.map((item, index) => {
        return Object.assign({}, item, {
            content: `<input type="checkbox"> ${item.text}`,
        });
    });

    export default {
        components: {
            'v-table': VTable,
        },
        data() {
            return {
                config: {
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
                                // renderer: RadioRenderer,
                                type: 'checkbox',
                                label: {
                                    position: 'after',
                                    property: 'name'
                                },
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
                        contextMenu: ContextMenu,
                        dropdownMenu: true,
                        afterPaste(data) {
                            console.log('afterPaste', data);
                            // this.rootElement.__vue__.$emit('myAfterPaste');
                        },
                    },
                },
            }
        },
        computed: {},
        methods: {
            init() {},
        },
        mounted() {
            this.$nextTick(this.init);
        },
    };
</script>
