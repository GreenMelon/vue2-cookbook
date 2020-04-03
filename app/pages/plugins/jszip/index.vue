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
            const [file] = evt.target.files;

            this.jszip.loadAsync(file)
                .then(content => {
                    const { files } = content;
                    const entries = Object.values(files);
                    const validFiles = entries.filter(entry => this.validateName(entry.name));
                    console.log({ validFiles });
                });
        },
    },
};
</script>
