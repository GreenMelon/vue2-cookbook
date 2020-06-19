<style lang="less">
    @import (css) '../../../../node_modules/vue-poster-editor/lib/styles/vue-poster-editor.css';

    // reset editor style
    .editor-container {
        padding-top: 0 !important;
        overflow: visible;
    }
    .editor-shell-wrap {
        padding-top: 0 !important;
    }
    .editor-canvas {
        background: transparent;
    }

    #editor-containner {
        position: relative;
        overflow: auto;
    }
    .editor-background-layout {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<template>
    <main>
        <div
            :style="innerStyle"
            id="editor-containner"
        >
            <!-- editor-layout -->
            <editor-layout
                v-if="isLayerShow"
                :options="editorOptions"
                :editor="editor"
                :global="editor.global"
                :layout="backgroundLayout"
                class="editor-background-layout"
            ></editor-layout>

            <!-- editor -->
            <editor
                ref="editor"
                :editor-options="editorOptions"
            ></editor>
        </div>

        <button @click="splitLayouts">截图</button>
    </main>
</template>

<script>
import Vue from 'vue';
import VuePosterEditor from 'vue-poster-editor';
import ONLINE_EDITOR_TEMPLATE from '@/data/editor-data-04';

Vue.use(VuePosterEditor);

export default {
    alias: 'V5.6.25 背景图层的截图分割',

    data() {
        return {
            zoom: 0.5,
            isLayerShow: false,
            editor: null,
            editorOptions: {
                mode: 'flow',
                fontList: [],
                fontsMap: {},
                crossOriginal: false,
                hookImagePicker: true,
            },
            backgroundLayout: {},
            innerStyle: {
                height: '0',
            },
        }
    },

    mounted() {
        this.initEditor();
        this.setTemplet(ONLINE_EDITOR_TEMPLATE);
    },

    methods: {
        setBackgroundLayout() {
            const { editor } = this;

            const totalLayoutHeight = editor.layouts.reduce((prevHeight, layout) => {
                const height = layout.title === '背景' ? 0 : layout.height;
                return prevHeight + height;
            }, 0);

            const backgroundLayout = editor.layouts.find(l => l.title === '背景') || {
                title: '背景',
                top: 0,
                width: 790,
                height: totalLayoutHeight,
                backgroundColor: '#ffffffff',
                elements: [],
            };
            // backgroundLayout.elements.forEach(e => e.frozen = true);
            this.backgroundLayout = Object.assign({}, backgroundLayout);

            editor.removeLayout(backgroundLayout);

            this.isLayerShow = true;
        },
        initEditor() {
            this.editor = this.$refs.editor;
            window.editor = this.editor;

            this.editor.$events.$on('editor.templet.ready', () => {
                Console.log('editor.templet.ready');

                this.editor.zoom = this.zoom;
                this.setBackgroundLayout();
                this.onEditorTempletLoaded();
            });
        },
        setTemplet(editorData) {
            const { editor } = this;

            editor.setTemplet(editorData);
        },
        onEditorTempletLoaded() {
            this.innerStyle = {
                height: `${this.editor.height * this.editor.zoom}px`,
            };

            this.$watch('editor.height', () => {
                this.innerStyle = {
                    height: `${this.editor.height * this.editor.zoom}px`,
                };
            });

            this.$watch('editor.zoom', () => {
                this.innerStyle = {
                    height: `${this.editor.height * this.editor.zoom}px`,
                };
            });
        },
        splitLayouts() {
            const { editor: { layouts }, backgroundLayout } = this;

            // 1. 背景元素编号去重
            const { elements } = backgroundLayout;
            elements.forEach((element, idx) => {
                element.category = 'background-element';
                element.index = idx;
            });

            // 2. 分割
            const shotLayouts = layouts.map((layout) => {
                const backgroundElements = elements
                    .filter(element => {
                        element.bottom = element.top + element.height;
                        return !(element.bottom <= 0 || element.top >= layout.height);
                    })
                    .map(element => {
                        return Object.assign({}, element);
                    });

                elements.forEach(element => {
                    element.top -= layout.height;
                });

                return Object.assign({}, layout, {
                    elements: backgroundElements.concat(layout.elements),
                });
            });

            console.log({ layouts, backgroundLayout, shotLayouts });

            this.editor.setTemplet({
                layouts: shotLayouts,
            });
        },
    },
};
</script>
