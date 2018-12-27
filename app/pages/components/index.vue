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
                    }
                ],
            }
        },
    }
</script>
