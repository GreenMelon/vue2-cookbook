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
    </main>
</template>

<script>
import Jszip from 'jszip';

// 说明文档 https://stuk.github.io/jszip/documentation/examples/read-local-file-api.html

export default {
    data() {
        return {
            jszip: null,
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

            this.jszip.loadAsync(file)
                .then(zip => {
                    const { files } = zip;
                    const entries = Object.values(files);
                    const validFiles = entries.filter(entry => this.validateName(entry.name));
                    console.log({ validFiles });
                });
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
    },
};
</script>
