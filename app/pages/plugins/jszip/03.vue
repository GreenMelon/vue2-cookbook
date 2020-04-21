<template>
    <main>
        <button @click="download">download</button>
    </main>
</template>

<script>
import Jszip from 'jszip';
import { saveAs } from 'file-saver';

export default {
    data() {
        return {
            jszip: null,
            urls: [
                'https://st-gdx.dancf.com/gaodingx/341/design/20190801-151113-8b5d.png',
                'https://st-gdx.dancf.com/gaodingx/341/design/20190801-151159-009e.png',
            ],
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.jszip = new Jszip();
        },

        async download() {
            const promises = this.urls
                .map(async (url) => {
                    const response = await fetch(url);
                    const data = await response.blob();
                    console.log(data);
                    return data;
                });

            const images = await Promise.all(promises);
            images.forEach((image, index) => {
                this.jszip.file(`${index}.png`, image);
            });

            this.jszip.generateAsync({ type: 'blob' })
                .then((content) => {
                    saveAs(content, 'hello.zip');
                }).catch(err => {
                    console.log('下载失败，请重试');
                });
        },
    },
};
</script>
