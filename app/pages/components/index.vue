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
                        name: '01',
                        instances: [
                            {
                                name: 'parent',
                                route: '/components/01',
                            }
                        ],
                    }, {
                        name: 'dialog',
                        instances: [
                            {
                                name: 'confirm',
                                route: '/components/dialog/confirm',
                            }
                        ],
                    }, {
                        name: 'test',
                        instances: [
                            {
                                name: '1',
                                route: '/components/test/01',
                            },{
                                name: 'Click Tip',
                                route: '/components/test/02',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
