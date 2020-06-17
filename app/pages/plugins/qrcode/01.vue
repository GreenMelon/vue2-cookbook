<style lang="less" scoped>
</style>

<template>
    <main>
        <div id="qrcode"></div>
    </main>
</template>

<script>
// 二维码 (失效)
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
            QRCODE_JS_URL: 'http://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js',
            reference: [
                'https://codepen.io/davidshimjs/pen/NdBYrg'
            ],
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
                    
                    // new QRCode(container, this.url);

                    new QRCode(container, {
                        text: this.url,
                        width: 128,
                        height: 128,
                        colorDark: "#8a2be2",
                        colorLight: "#ffffff",
                    });
                });
        },
    },
    mounted() {
        this.init();
    },
};
</script>
