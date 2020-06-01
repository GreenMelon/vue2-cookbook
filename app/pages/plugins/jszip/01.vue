<template>
    <main>
        <input
            type="file"
            accept=".zip"
            @change="readFile"
        >

        <input
            type="file"
            accept=".zip"
            @change="readStyleFile"
        >

        <input
            type="file"
            @change="readImage"
        >

        <img :src="src" />
    </main>
</template>

<script>
import Jszip from 'jszip';

// 说明文档 https://stuk.github.io/jszip/documentation/examples/read-local-file-api.html

export default {
    data() {
        return {
            jszip: null,
            src: '',
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

        loadFile(evt) {
            const [file] = evt.target.files;

            this.jszip.loadAsync(file)
                .then(zip => {
                    zip.forEach((relativePath, entry) => {
                        console.log(relativePath, entry);
                    });
                });
        },

        readFile(evt) {
            const [file] = evt.target.files;
            const options = {
                // base64: true,
            };

            this.jszip.loadAsync(file, options)
                .then(zip => {
                    const { files } = zip;
                    const entries = Object.values(files);
                    const validEntries = entries.filter(entry => this.validateName(entry.name) && !entry.dir);
                    console.log({ validEntries });

                    this.convertFilesToBase64(validEntries);
                });
        },

        getBlob(entry) {
            const { compressedContent } = entry._data;

            const blob = new Blob(
                [compressedContent],
                { type: 'image/png' }
            );

            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    resolve(reader.result);
                    this.src = reader.result;
                }
                reader.readAsDataURL(blob);
            });
        },

        getFileExt(name) {
            const result = name.match(/\.(\w+)$/);
            return result ? result[1].toLowerCase() : '';
        },

        getBase64(entry) {
            const { name } = entry;
            const ext = this.getFileExt(name);

            return new Promise((resolve) => {
                this.jszip.file(name).async('base64').then((content) => {
                    const src = `data:image/${ext};base64,${content}`;
                    this.src = src;
                    resolve(src);
                });
            });
        },

        convertFilesToBase64(entries) {
            // Promise.all(entries.map(this.getBlob)).then(() => {});
            Promise.all(entries.map(this.getBase64)).then(() => {});
        },

        readStyleFile(evt) {
            const [file] = evt.target.files;

            this.jszip.loadAsync(file)
                .then(zip => {
                    return zip.files['css/index.css'].async('text');
                })
                .then(text => {
                    console.log(text);
                });
        },

        readImage(evt) {
            const [file] = evt.target.files;
            const reader = new FileReader();
            reader.onloadend = () => {
                this.src = reader.result;
            }
            reader.readAsDataURL(file);
        },
    },
};
</script>
