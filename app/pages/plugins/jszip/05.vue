<template>
    <main>
        <input
            type="file"
            accept=".zip"
            @change="readFile"
        >
        <img
            v-for="(src, index) in srcs"
            :key="index"
            :src="src"
            class="image"
            alt=""
        >
    </main>
</template>

<script>
import Jszip from 'jszip';
import * as iconv from 'iconv-lite';

const queue = (array) => {
    let sequence = Promise.resolve();
    array.forEach(item => {
        sequence = sequence.then(item);
    });
    return sequence;
}

const blobToFile = (blob, name) => {
    blob.lastModifiedDate = new Date();
    blob.name = name;
    return blob;
}

export default {
    alias: '读取视频压缩包',

    data() {
        return {
            jszip: null,
            srcs: [],
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.jszip = new Jszip();
        },

        validateName(name) {
            const disableNames = ['__MACOSX', '.DS_Store'];
            return disableNames.every(i => name.indexOf(i) === -1);
        },

        getFileExt(name) {
            const result = name.match(/\.(\w+)$/);
            return result ? result[1].toLowerCase() : '';
        },

        getFileInfo(entry) {
            return new Promise((resolve) => {
                this.jszip.file(entry.name).async('blob').then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const video = document.createElement('video');
                    video.oncanplay = () => {
                        const {
                            videoHeight: height,
                            videoWidth: width,
                            duration,
                        } = video;

                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = height;
                        canvas.width = width;
                        context.drawImage(video, 0, 0, width, height);

                        const cover = canvas.toDataURL('image/png');
                        this.srcs.push(cover);
                        Object.assign(entry, {
                            size: entry._data.uncompressedSize,
                            duration,
                            height,
                            width,
                            blob,
                            cover,
                        });
                        URL.revokeObjectURL(url);
                        resolve(entry);
                    }
                    video.muted = true;
                    video.autoplay = true;
                    video.src = url;
                });
            });
        },

        readFile(evt) {
            this.init();

            this.srcs = [];

            const [file] = evt.target.files;

            this.jszip.loadAsync(file)
                .then(zip => {
                    const { files } = zip;
                    const entries = Object.values(files);
                    const validEntries = entries.filter(entry => this.validateName(entry.name) && !entry.dir);
                    console.log({ validEntries });

                    Promise.all(validEntries.map(this.getFileInfo)).then((data) => {
                        window.data = data;
                        console.log('window.data: ', window.data);
                    });
                });
        },
    },
};
</script>

<style scoped>
.image {
    width: 300px;
}
</style>
