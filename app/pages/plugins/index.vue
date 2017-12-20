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
                                name: '01',
                                route: '/plugins/handsontable/01',
                            }
                        ],
                    },{
                        name: 'vue-handsontable',
                        instances: [
                            {
                                name: '01',
                                route: '/plugins/vue-handsontable/01',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
