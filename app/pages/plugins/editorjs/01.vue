<template>
    <main>
        <header id="header">
            <button for="file" id="import-btn">
                <input type="file" @change="importFile">
                导入
            </button>
            <button @click="exportFile">导出</button>
        </header>
        <div id="editorjs" />
    </main>
</template>

<script>
// https://editorjs.io/
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import { downloadJSON } from '@/utils';

export default {
    mounted() {
        this.render();
    },

    methods: {
        render(data = {}) {
            if (this.editor) {
                this.editor.destroy();
            }

            this.editor = new EditorJS({
                holder: 'editorjs',

                data,

                tools: {
                    header: Header,
                    list: List,
                    checklist: Checklist,
                },

                onReady() {
                    console.log('onReady');
                },

                onChange() {
                    console.log('onChange');
                },
            });
        },

        importFile(evt) {
            const [file] = evt.target.files;
            if (!file) {
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                this.render(JSON.parse(reader.result));
            };
            reader.readAsText(file);

            evt.target.value = '';
        },

        exportFile() {
            this.editor.save()
                .then((data) => {
                    console.log('save: ', data);
                    this.download(data);
                });
        },

        download(content) {
            downloadJSON(content, Date.now());
        },
    },
};
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=ZCOOL+QingKe+HuangYou&display=swap');
</style>

<style lang="less">
#editorjs {
    height: 100%;
    padding-top: 40px;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 24px;
    background: url('../../../images/folder.jpeg');
    background-repeat: no-repeat;
    background-position: center -132px;
}

#header {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

#import-btn {
    position: relative;
    overflow: hidden;
    input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}
</style>
