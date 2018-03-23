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
                        name: '入门',
                        instances: [
                            {
                                name: '01',
                                route: '/rxjs/introduction/01',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
