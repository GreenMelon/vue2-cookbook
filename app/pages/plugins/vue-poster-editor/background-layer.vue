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
            <button
                v-show="!backgroundMode"
                @click="toggleBackgroundMode(true)">编辑背景
            </button>
            <button
                v-show="backgroundMode"
                @click="toggleBackgroundMode(false)">退出编辑背景
            </button>
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
import ONLINE_EDITOR_TEMPLATE from '@/data/editor-data-03';

Vue.use(VuePosterEditor);

export default {
    alias: 'V5.6.25 背景图层的实现设计',

    data() {
        return {
            zoom: 0.5,
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

            backgroundMode: false,
        }
    },

    watch: {
        backgroundMode(value) {
            const editorEontainer = document.getElementsByClassName('editor-container')[0];
            const { classList } = editorEontainer;

            if (value) {
                classList.add('disabled');
                this.bindHotKey();
            } else {
                classList.remove('disabled');
                this.unbindHotKey();
            }
        },
    },

    mounted() {
        this.initEditor();
        this.setTemplet(ONLINE_EDITOR_TEMPLATE || EDITOR_TEMPLATE);
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
        onEscKeyPress(evt) {
            console.log(evt.keyCode);

            // 按住 ESC 退出编辑背景
            if (evt.keyCode === 27) {
                this.toggleBackgroundMode(false);
            }
        },
        bindHotKey() {
            document.addEventListener('keydown', this.onEscKeyPress, false);
        },
        unbindHotKey() {
            document.removeEventListener('keydown', this.onEscKeyPress, false);
        },
        toggleBackgroundMode(mode) {
            this.backgroundMode = mode;
        },
    },
};
</script>
