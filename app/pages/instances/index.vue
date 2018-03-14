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
                        name: '截图',
                        instances: [
                            {
                                name: '01',
                                route: '/instances/rasterizehtml/01',
                            },{
                                name: '02',
                                route: '/instances/rasterizehtml/02',
                            },{
                                name: '03',
                                route: '/instances/rasterizehtml/03',
                            }
                        ],
                    },{
                        name: '表单',
                        instances: [
                            {
                                name: 'submit',
                                route: '/instances/form/submit',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
