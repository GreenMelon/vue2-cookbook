<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="qrcode"></div>
    </main>
</template>

<script>
    import $ from 'jquery';

    const loadScript = function(url) {
        let caches = loadScript.caches;
        if (!caches) {
            caches = loadScript.caches = {};
        }

        if (!caches[url]) {
            $.ajaxSetup({
                cache: true,
            });

            caches[url] = new Promise((resolve, reject) => {
                $.getScript(url, resolve, reject);
            });
        }

        return caches[url];
    };

    export default {
        data() {
            return {
                QRCODE_JS_URL: 'https://github.com/davidshimjs/qrcodejs/blob/master/qrcode.min.js',
                url: 'https://github.com/greenmelon/vue2-cookbook',
            }
        },
        methods: {
            loadQrCode() {
                return loadScript(this.QRCODE_JS_URL)
                    .then(() => {
                        return window.QRCode;
                    });
            },
            init() {
                return this.loadQrCode()
                    .then(QRCode => {
                        const container = document.getElementById('qrcode');
                        new QRCode(container, url);
                    });
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
