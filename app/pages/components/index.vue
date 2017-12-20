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
                    }
                ],
            }
        },
    }
</script>
