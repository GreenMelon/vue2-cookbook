<style lang="less" scoped>
    @import (css) '../../../../node_modules/vue-poster-editor/lib/styles/vue-poster-editor.css';

    .editor-wrapper {
        position: relative;
        height: 100%;
        overflow: scroll;
    }

    .toolbar {
        position: absolute;
        z-index: 4;
    }
    .checkbox {
        margin: 0 10px;
        font-size: 18px;
    }
</style>

<template>
    <main>
        <div class="editor-wrapper">
            <div class="toolbar">
                <label
                    class="checkbox"
                    for="checkbox"
                >
                    <input
                        v-model="isMask"
                        id="checkbox"
                        type="checkbox"
                    >
                    <span>蒙版图框</span>
                </label>

                <button @click="changeElement">替换图片</button>
            </div>

            <!-- editor -->
            <editor
                ref="editor"
                :editor-options="editorOptions"
            ></editor>
        </div>
    </main>
</template>

<script>
    import Vue from 'vue';
    import VuePosterEditor from 'vue-poster-editor';
    import ONLINE_EDITOR_TEMPLATE from '@/data/editor-data-05';

    Vue.use(VuePosterEditor);

    export default {
        data() {
            return {
                zoom: 0.5,
                editor: null,
                editorOptions: {
                    mode: 'flow',
                    fontList: [],
                    fontsMap: {},
                    crossOriginal: false,
                    hookImagePicker: true,
                },

                isMask: true,
            }
        },
        computed: {
            currentElement() {
                return this.editor && this.editor.currentElement;
            },
        },
        watch: {},
        methods: {
            initEditor() {
                this.editor = this.$refs.editor;

                this.editor.$events.$on('editor.templet.ready', () => {
                    const { editor } = this;
                    editor.zoom = this.zoom;
                    editor.focusElement(editor.layouts[0].elements[0])
                });
            },
            setTemplet(templet) {
                this.editor.setTemplet(templet);
            },
            changeElement() {
                const { editor, currentElement, isMask } = this;
                const url = '//st-gdx.dancf.com/0/dianshang/20190108-103721-47ba.jpeg';
                this.editor.changeElement({
                    url,
                    mask: isMask ? currentElement.mask : url,
                });
            },
        },
        mounted() {
            this.initEditor();
            this.setTemplet(ONLINE_EDITOR_TEMPLATE);
        },
    };
</script>
