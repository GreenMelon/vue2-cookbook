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

    .disabled {
        pointer-events: none;
    }
</style>

<template>
    <main>
            <p>
                <button @click="toggleLayer">toggleLayer</button>
            </p>

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
    import PsdToTemplet from '@gaoding/psd-to-templet';
    import EDITOR_TEMPLATE from '@/data/editor-data-02';

    Vue.use(VuePosterEditor);

    export default {
        data() {
            return {
                zoom: 1,
                isLayerShow: false,
                editor: null,
                editorOptions: {
                    mode: 'flow',
                    fontList: [],
                    crossOriginal: false,
                    hookImagePicker: true,
                },
                layoutData: {},
                innerStyle: {
                    height: '0',
                },
            }
        },
        computed: {},
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
                this.layoutData = Object.assign({}, backgroundLayout);

                editor.removeLayout(backgroundLayout);

                this.isLayerShow = true;
            },
            initEditor() {
                this.editor = this.$refs.editor;

                this.editor.$events.$on('editor.templet.ready', () => {
                    Console.log('editor.templet.ready');

                    this.editor.zoom = this.zoom;
                    this.setBackgroundLayout();
                    this.onEditorTempletLoaded();
                });
            },
            parsePSD(ev) {
                const { editor } = this;
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

                PsdToTemplet(files[0], options)
                    .then(layouts => {
                        console.log({ layouts });

                        this.setTemplet({
                            layouts,
                        });
                    })
                    .catch(err => console.error)
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
            toggleLayer() {
                const editorEontainer = document.getElementsByClassName('editor-container')[0];
                const { className } = editorEontainer;
                if (className.indexOf('disabled') === -1) {
                    editorEontainer.classList.add('disabled');
                } else {
                    editorEontainer.classList.remove('disabled');
                };
            },
        },
        mounted() {
            this.initEditor();
            this.setTemplet(EDITOR_TEMPLATE);
        },
    };
</script>
