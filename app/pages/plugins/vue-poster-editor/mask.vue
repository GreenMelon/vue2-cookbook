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
    alias: 'V5.6.25 蒙版图框与普通图框',

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

    mounted() {
        this.initEditor();
        this.setTemplet(ONLINE_EDITOR_TEMPLATE);
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
            const image = {
                naturalHeight: 420,
                naturalWidth: 418,
                url: '//st-gdx.dancf.com/0/dianshang/20190108-103721-47ba.jpeg',
            };

            const {
                naturalHeight,
                naturalWidth,
                url,
            } = image;

            const {
                editor,
                currentElement,
                currentElement: {
                    customData = {},
                },
            } = this;

            if (customData.isNormalMask) {
                // this.editor.changeElement({
                //     url,
                //     mask: url,
                // });

                currentElement.imageHeight = naturalHeight * 1;
                currentElement.imageWidth = naturalWidth * 1;
                currentElement.url = url;
                currentElement.mask = url;
            } else {
                // this.editor.changeElement({
                //     url,
                //     mask: customData.originMask,
                // });

                currentElement.imageHeight = naturalHeight * 1;
                currentElement.imageWidth = naturalWidth * 1;
                currentElement.url = url;
            }
        },
    },
};
</script>
