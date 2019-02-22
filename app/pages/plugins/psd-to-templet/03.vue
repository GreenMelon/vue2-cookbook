<style lang="less" scoped>
    .editor-wrapper {
        position: relative;
    }
</style>

<template>
    <main>
        <div>
            <h1>测试 PSD 的 category</h1>
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
                editorOptions: {
                    fontList: [],
                },
            }
        },
        computed: {
            editor() {
                return this.$refs.editor;
            },
        },
        methods: {
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

                return PsdToTemplet(files[0], options)
                    .then(layouts => {
                        layouts.forEach(layout => {
                            layout.elements = layout.elems;
                        });

                        return editor.setTemplet({
                            layouts,
                        });
                    })
                    .catch(err => console.error)
            },
        },
        mounted() {},
    };
</script>
