<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: 'handsontable',
                        instances: [
                            {
                                name: '示例',
                                route: '/plugins/handsontable/01',
                            },{
                                name: '自定义renderer',
                                route: '/plugins/handsontable/02',
                            }
                        ],
                    },{
                        name: 'vue-handsontable',
                        instances: [
                            {
                                name: '示例',
                                route: '/plugins/vue-handsontable/01',
                            },{
                                name: '产品信息',
                                route: '/plugins/vue-handsontable/02',
                            },{
                                name: '产品指数',
                                route: '/plugins/vue-handsontable/03',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
