<style lang="less" scoped>
    .editor-wrapper {
        position: relative;
    }
</style>

<template>
    <main>
        <div>
            <h1>测试 PSD 的背景</h1>
            <input
                @change="parsePSD"
                accept=".psd"
                type="file"
            >
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
                        debugger;
                        const backgroundElements = [];
                        const normalElements = [];

                        layouts.forEach(layout => {
                            layout.elems.forEach(elem => {
                                if (isBackgroundElement(elem)) {
                                    backgroundElements.push(elem);
                                } else {
                                    normalElements.push(elem);
                                }
                            });

                            layout.elems = normalElements;
                        });

                        const backgroundLayout = {
                            height: layouts[0].height,
                            width: layouts[0].width,
                            elems: backgroundElements,
                        };
                        layouts.push(backgroundLayout);

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
        },
        mounted() {
            this.initEditor();
        },
    };
</script>
