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
                        v-model="isNormalMask"
                        id="checkbox"
                        type="checkbox"
                    >
                    <span>普通图框</span>
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

                isNormalMask: false,
            }
        },
        computed: {
            currentElement() {
                return this.editor && this.editor.currentElement;
            },
        },
        watch: {
            isNormalMask(value) {
                const { currentElement } = this;
                currentElement.customData = currentElement.customData || {};
                const { customData } = currentElement;
                if (value) {
                    customData.isNormalMask = true;
                    if (!customData.originMask) {
                        customData.originMask = currentElement.mask;
                    }
                } else {
                    customData.isNormalMask = false;
                }
            },
        },
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
                const url = '//st-gdx.dancf.com/0/dianshang/20190108-103721-47ba.jpeg';
                const {
                    editor,
                    currentElement: {
                        customData = {},
                    },
                } = this;

                if (customData.isNormalMask) {
                    this.editor.changeElement({
                        url,
                        mask: url,
                    });
                } else {
                    this.editor.changeElement({
                        url,
                        mask: customData.originMask,
                    });
                }
            },
        },
        mounted() {
            this.initEditor();
            this.setTemplet(ONLINE_EDITOR_TEMPLATE);
        },
    };
</script>
