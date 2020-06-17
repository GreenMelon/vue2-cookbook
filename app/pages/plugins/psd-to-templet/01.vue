<style lang="less" scoped>
    main {
        position: relative;
    }
    input {
        position: absolute;
        top: 10px;
        z-index: 1;
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
// V5.6.25 透明 SVG 元素
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
                        const svgElements = layout.elems.filter(i => i.type === 'svg');
                        layout.elements = svgElements; 
                        console.log({ svgElements });
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
