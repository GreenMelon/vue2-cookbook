<style lang="less" scoped>
</style>

<template>
    <main>
        <div>
            <VueHotTable
                :root="config.root"
                :settings="config.settings"
            ></VueHotTable>
        </div>
    </main>
</template>

<script>
    import VueHotTable from 'vue-handsontable-official';
    import data from '@/data/handsontable-01';

    export default {
        components: {
            VueHotTable,
        },
        data() {
            return {
                config: {
                    root: 'example',
                    settings: {
                        data: data,
                        colHeaders: true,
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
