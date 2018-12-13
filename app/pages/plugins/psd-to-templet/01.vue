<style lang="less" scoped>
    main {
        position: relative;
    }
</style>

<template>
    <main>
        <editor
            ref="editor"
            :editor-options="editorOptions"
        ></editor>

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
    import TEMPLATE from '@/data/editor-data-01';

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

                PsdToTemplet(files[0])
                    .then(layouts => {
                        layouts.forEach(layout => {
                            const svgElements = layout.elems.filter(i => i.type === 'svg');
                            layout.elements = svgElements; 
                            console.log({ svgElements });
                        });

                        editor.setTemplet(TEMPLATE);
                    })
                    .catch(err => console.error)
            },
        },
        mounted() {},
    };
</script>
