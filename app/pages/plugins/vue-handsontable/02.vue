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
    import data from '@/data/product-info';

    const contextMenu = Object.assign({}, ContextMenu);
    contextMenu.items.col_left.disabled = true;
    contextMenu.items.col_right.disabled = true;

    export default {
        components: {
            'v-table': VTable,
        },
        data() {
            return {
                config: {
                    settings: {
                        data: data,
                        colHeaders: true,
                        rowHeaders: true,
                        contextMenu: contextMenu,
                        className: 'htLeft',
                        cell: [
                            // { col: 0, row: 0, className: 'htCenter' },
                        ],
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
