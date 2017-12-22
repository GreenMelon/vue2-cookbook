<style lang="less" scoped>
</style>

<template>
    <main>
        <div>
            <v-hot-table
                ref="hotTable"
                root="example"
                :settings="settings"
            ></v-hot-table>
        </div>
    </main>
</template>

<script>
    import Vue from 'vue';
    import VueHotTable from 'vue-handsontable-official';

    const VTable = Vue.extend({
        components: {
            'v-hot-table': VueHotTable,
        },
        props: {
            settings: {
                type: Object,
                default: {},
            },
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            init() {},
        },
        mounted() {},
    });

    Vue.component('v-table', VTable);

    export default VTable;
</script>
