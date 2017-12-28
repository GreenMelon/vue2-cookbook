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
                        name: '点击事件',
                        instances: [
                            {
                                name: 'dblclick',
                                route: '/events/dblclick',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
