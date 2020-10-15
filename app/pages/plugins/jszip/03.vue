<template>
    <main>
        <button @click="downloadImage">下载图片压缩包</button>
        <button @click="downloadVideo">下载视频压缩包</button>
    </main>
</template>

<script>
import Jszip from 'jszip';
import { saveAs } from 'file-saver';

export default {
    alias: '下载ZIP',

    methods: {
        async download(files) {
            const jszip = new Jszip();

            const promises = files
                .map(async (file) => {
                    const response = await fetch(file.url);
                    const data = await response.blob();
                    console.log(data);
                    return Object.assign(file, { data });
                });

            const result = await Promise.all(promises);
            result.forEach(({ url, data }, index) => {
                const i = url.lastIndexOf('.') + 1;
                const ext = url.substr(i);
                jszip.file(`${index}.${ext}`, data);
            });

            jszip.generateAsync({ type: 'blob' })
                .then((content) => {
                    saveAs(content, `${Date.now()}.zip`);
                })
                .catch(err => {
                    console.log('下载失败，请重试');
                });
        },

        downloadImage() {
            const files = [
                { url: 'https://st-gdx.dancf.com/gaodingx/341/design/20190801-151113-8b5d.png' },
                { url: 'https://st-gdx.dancf.com/gaodingx/341/design/20190801-151159-009e.png' },
            ];
            this.download(files);
        },

        downloadVideo() {
            const files = [
                { url: 'http://sts-zs-images.oss-cn-zhangjiakou.aliyuncs.com/3215139/627553758114.mp4' },
                { url: 'http://sts-zs-images.oss-cn-zhangjiakou.aliyuncs.com/3215139/626870810014.mp4' },
            ];
            this.download(files);
        },
    },
};
</script>
