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
                    },{
                        name: '可观察对象',
                        instances: [
                            {
                                name: '01 订阅',
                                route: '/rxjs/observable/01',
                            },{
                                name: '02 报错',
                                route: '/rxjs/observable/02',
                            },{
                                name: '02 取消订阅',
                                route: '/rxjs/observable/03',
                            }
                        ],
                    },{
                        name: '观察者',
                        instances: [
                            {
                                name: '01',
                                route: '/rxjs/observer/01',
                            }
                        ],
                    },
                ],
            }
        },
    }
</script>
