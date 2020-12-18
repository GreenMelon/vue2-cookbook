<template>
    <main>
        <input
            type="file"
            accept=".zip"
            @change="readFile"
        >
    </main>
</template>

<script>
import Jszip from 'jszip';
import * as iconv from 'iconv-lite';

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

        readFile(evt) {
            this.init();

            const [file] = evt.target.files;
            const options = {
                // base64: true,
                decodeFileName: (bytes) => {
                    return iconv.decode(bytes, 'gb2312' || 'utf-8');
                },
            };

            this.jszip.loadAsync(file, options)
                .then(zip => {
                    const { files } = zip;
                    const entries = Object.values(files);
                    const validEntries = entries.filter(entry => this.validateName(entry.name) && !entry.dir);
                    console.log({ validEntries });
                });
        },
    },
};
</script>
