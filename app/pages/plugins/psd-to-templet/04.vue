<style lang="less" scoped>
    .editor-wrapper {
        position: relative;
    }
</style>

<template>
    <main>
        <div>
            <h1>V5.6.25 测试 PSD 的背景色</h1>
            <input
                @change="parsePSD"
                accept=".psd"
                type="file"
            >
            <br>
            <button @click="setBackgroundColor">设置背景色</button>
            <button @click="setBackgroundImage">设置背景图</button>
        </div>
        
        <div class="editor-wrapper">
            <editor
                ref="editor"
                :editor-options="editorOptions">
            </editor>
        </div>
    </main>
</template>

<script>
import Vue from 'vue';
import VuePosterEditor from 'vue-poster-editor';
import PsdToTemplet from '@gaoding/psd-to-templet';

Vue.use(VuePosterEditor);

export default {
    alias: 'V5.6.25 测试 PSD 的 背景色解析',

    data() {
        return {
            zoom: 0.5,
            editorOptions: {
                fontList: [],
                mode: 'flow',
            },
        }
    },

    computed: {
        editor() {
            return this.$refs.editor;
        },
    },

    mounted() {
        this.initEditor();
    },

    methods: {
        isBackgroundElement(element) {
            return element.category && element.category.indexOf('bg_') !== -1;
        },
        parsePSD(ev) {
            const { editor, isBackgroundElement } = this;
            const { files } = ev.srcElement;

            const options = {
                parseSVG: true,
                groupMode: 'tag', // flat tag merge
                defaultTextType: 'block',
                imageQuality: 20,
                imageMaxWidth: 5000,
                imageMaxHeight: 5000,
                onProgress: (data) => {
                    console.log(data);
                },
            };

            return PsdToTemplet(files[0], options)
                .then(layouts => {
                    console.log(layouts);

                    return editor.setTemplet({
                        layouts,
                    });
                })
                .catch(err => console.error)
        },
        initEditor() {
            this.editor.$events.$on('editor.templet.ready', () => {
                this.editor.zoom = this.zoom;
                window.editor = this.editor;
            });
        },
        setBackgroundColor() {
            this.editor.currentLayout.backgroundColor = '#007dd4ff';
        },
        setBackgroundImage() {
            this.editor.currentLayout.backgroundImage = '//cjxq.oss.aliyuncs.com/cjxq/1/20190114/1_design_upload_1547451197_8eh4T8_20190014-153318729-9112-1.jpg';
        },
    },
};
</script>
