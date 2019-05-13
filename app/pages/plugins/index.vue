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
                        name: 'brace',
                        instances: [
                            {
                                name: '01',
                                route: '/plugins/brace/01',
                            }
                        ],
                    },{
                        name: 'handsontable',
                        instances: [
                            {
                                name: '示例',
                                route: '/plugins/handsontable/01',
                            },{
                                name: '自定义renderer',
                                route: '/plugins/handsontable/02',
                            },{
                                name: '复制剪切粘贴',
                                route: '/plugins/handsontable/03',
                            },{
                                name: '边缘检测',
                                route: '/plugins/handsontable/04',
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
                    },{
                        name: 'psd-to-templet',
                        instances: [
                            {
                                name: 'V5.6.25 透明 SVG 元素',
                                route: '/plugins/psd-to-templet/01',
                            },{
                                name: 'V5.6.25 测试 PSD 的 category',
                                route: '/plugins/psd-to-templet/02',
                            },{
                                name: 'V5.6.25 测试 PSD 的 背景元素解析',
                                route: '/plugins/psd-to-templet/03',
                            },{
                                name: 'V5.6.25 测试 PSD 的 背景色解析',
                                route: '/plugins/psd-to-templet/04',
                            },{
                                name: 'V6.1.0 测试 PSD 的 背景色解析',
                                route: '/plugins/psd-to-templet/05',
                            }
                        ],
                    },{
                        name: 'vue-poster-editor',
                        instances: [
                            {
                                name: 'V5.6.25 背景图层的实现设计',
                                route: '/plugins/vue-poster-editor/background-layer',
                            },{
                                name: 'V5.6.25 背景图层的截图分割',
                                route: '/plugins/vue-poster-editor/background-shot',
                            },{
                                name: 'V5.6.25 蒙版图框与普通图框',
                                route: '/plugins/vue-poster-editor/mask',
                            },{
                                name: 'V5.6.25 模块背景图',
                                route: '/plugins/vue-poster-editor/background-image',
                            }
                        ],
                    },{
                        name: 'qrcode',
                        instances: [
                            {
                                name: '二维码 (失效)',
                                route: '/plugins/qrcode/01',
                            },{
                                name: '二维码',
                                route: '/plugins/qrcode/02',
                            }
                        ],
                    },{
                        name: 'tinycolor2',
                        instances: [
                            {
                                name: '01',
                                route: '/plugins/tinycolor2/01',
                            }
                        ],
                    },{
                        name: 'screenshot',
                        instances: [
                            {
                                name: '01',
                                route: '/plugins/screenshot/01',
                            }
                        ],
                    }
                ],
            }
        },
    }
</script>
