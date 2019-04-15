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
                        name: 'clipboard',
                        instances: [
                            {
                                name: '01',
                                route: '/test/clipboard/01'
                            }
                        ],
                    },{
                        name: 'FileReader',
                        instances: [
                            {
                                name: '01',
                                route: '/test/filereader/image'
                            }
                        ],
                    },{
                        name: 'scrollTop',
                        instances: [
                            {
                                name: '01',
                                route: '/test/scroll-top/01'
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
