<template>
    <main>
        <input
            type="file"
            accept="images/*"
            @change="readFile"
        >

        <img
            :src="src"
            alt=""
        >

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
            src: '',
            image: null,
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.jszip = new Jszip();
        },

        readFile(evt) {
            const [file] = evt.target.files;

            this.previewImage(file);
            this.generateImage(file);
        },

        previewImage(file) {
            const that = this;
            const reader = new FileReader();

            reader.onload = function onload(evt) {
                that.src = evt.target.result;
            };

            reader.readAsDataURL(file);
        },

        generateImage(file) {
            const that = this;
            const reader = new FileReader();

            reader.onload = function onload(evt) {
                that.image = evt.target.result;
            };

            reader.readAsArrayBuffer(file);
        },

        download() {
            // 新建文件夹
            // this.jszip.folder('FOLDER_NAME');

            // 方法1
            this.jszip.file('a.png', this.image);
            // 方法2
            this.jszip.file('b.png', this.src.split('base64,')[1], { base64: true });

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
