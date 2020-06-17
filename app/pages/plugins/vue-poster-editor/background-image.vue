<style lang="less" scoped>
    @import (css) '../../../../node_modules/vue-poster-editor/lib/styles/vue-poster-editor.css';

    .editor-wrapper {
        position: relative;
        height: 100%;
        overflow: scroll;
    }
</style>

<template>
    <main>
        <div>
            <button @click="setBackgroundImage">生成背景图</button>
        </div>

        <div class="editor-wrapper">
            <!-- editor -->
            <editor
                ref="editor"
                :editor-options="editorOptions"
            ></editor>
        </div>
    </main>
</template>

<script>
// V5.6.25 模块背景图
import Vue from 'vue';
import VuePosterEditor from 'vue-poster-editor';
import EDITOR_TEMPLATE from '@/data/editor-data-06';

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
        }
    },
    computed: {
        currentElement() {
            return this.editor && this.editor.currentElement;
        },
    },
    methods: {
        initEditor() {
            this.editor = this.$refs.editor;

            this.editor.$events.$on('editor.templet.ready', () => {
                const { editor } = this;
                editor.zoom = this.zoom;

                const layoutBackgroundImage = editor.layouts[0].elements.find(e => {
                    return e.category = 'layout-background-image';
                });
                editor.focusElement(layoutBackgroundImage);

                this.setBackgroundImage();
            });
        },
        setTemplet(templet) {
            this.editor.setTemplet(templet);
        },
        setBackgroundImage() {
            const {
                currentLayout,
                currentElement,
                removeElement,
            } = this.editor;

            currentLayout.backgroundImage = currentElement.url;
            removeElement();
        },
    },
    mounted() {
        this.initEditor();
        this.setTemplet(EDITOR_TEMPLATE);
    },
};
</script>
