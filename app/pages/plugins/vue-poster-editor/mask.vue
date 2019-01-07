<style lang="less">
    @import (css) '../../../../node_modules/vue-poster-editor/lib/styles/vue-poster-editor.css';

    .editor-wrapper {
        position: relative;
        height: 100%;
        overflow: scroll;
    }
</style>

<template>
    <main>
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
    import Vue from 'vue';
    import VuePosterEditor from 'vue-poster-editor';
    import ONLINE_EDITOR_TEMPLATE from '@/data/editor-data-04';

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
        computed: {},
        watch: {},
        methods: {
            initEditor() {
                this.editor = this.$refs.editor;

                this.editor.$events.$on('editor.templet.ready', () => {
                    this.editor.zoom = this.zoom;
                });
            },
            setTemplet(editorData) {
                const { editor } = this;

                editor.setTemplet(editorData);
            },
        },
        mounted() {
            this.initEditor();
            this.setTemplet(ONLINE_EDITOR_TEMPLATE);
        },
    };
</script>
