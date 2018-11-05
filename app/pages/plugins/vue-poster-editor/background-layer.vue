<style lang="less">
    @import (css) '../../../../node_modules/vue-poster-editor/lib/styles/vue-poster-editor.css';

    // reset editor style
    .editor-container {
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
                :layout="layoutData"
                class="editor-background-layout"
            ></editor-layout>

            <!-- editor -->
            <editor
                ref="editor"
                :editor-options="editorOptions"
            ></editor>
        </div>

        <input
            @change="parsePSD"
            accept=".psd"
            type="file"
        >
    </main>
</template>

<script>
    import Vue from 'vue';
    import VuePosterEditor from 'vue-poster-editor';
    import PsdToTemplet from 'psd-to-templet';
    import EDITOR_TEMPLATE from '@/data/editor-data-02';

    Vue.use(VuePosterEditor);

    export default {
        data() {
            return {
                zoom: 0.4,
                isLayerShow: false,
                editor: null,
                editorOptions: {
                    fontList: [],
                },
                layoutData: {},

                innerStyle: {
                    height: '0',
                },
            }
        },
        computed: {},
        methods: {
            initLayer() {
                const { editor } = this;
                const backgroundLayout = editor.layouts.find(l => l.title === '背景');
                this.layoutData = Object.assign({}, backgroundLayout);
                editor.removeLayout(backgroundLayout);
                
                this.isLayerShow = true;
            },
            initEditor() {
                this.editor = this.$refs.editor;

                this.editor.$events.$on('editor.templet.ready', () => {
                    Console.log('editor.templet.ready');

                    this.editor.zoom = this.zoom;
                    this.initLayer();
                    this.onEditorTempletLoaded();
                });
            },
            parsePSD(ev) {
                const { editor } = this;
                const { files } = ev.srcElement;

                PsdToTemplet(files[0])
                    .then(layouts => {
                        console.log({ layouts });
                    })
                    .catch(err => console.error)
            },
            setTemplet() {
                const { editor } = this;

                editor.setTemplet(EDITOR_TEMPLATE);
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
        },
        mounted() {
            this.initEditor();
            this.setTemplet();
        },
    };
</script>
