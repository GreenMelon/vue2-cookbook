<style lang="less" scoped>
</style>

<template>
    <main>
        <canvas id="canvas"></canvas>
    </main>
</template>

<script>
    import QrCode from 'qrcode'

    export default {
        data() {
            return {
                //
            }
        },
        methods: {
            getQrCode() {
                const canvas = document.getElementById('canvas');

                QrCode.toCanvas(canvas, 'http://172.16.13.251:4000/#/index', function (error) {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log('success!');
                });
            },
            init() {
                this.getQrCode();
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
