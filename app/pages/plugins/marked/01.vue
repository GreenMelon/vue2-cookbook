<style lang="less" scoped>
    @import (css) '../../../../node_modules/highlight.js/styles/github.css';
</style>

<style lang="less">
    pre {
        padding: 12px;
        color: #fff;
        background: #000;
        border-radius: 4px;
    }
</style>

<template>
    <main>
        <div v-html="compiledMarkdown"></div>

        <!-- <div v-html="md"></div> -->

        <CodeEditor
            height="360"
            lang="json"
            v-model="configJSON"
        />
    </main>
</template>

<script>
import marked from 'marked';
import highlight from 'highlight.js';
// import md from './test.md';
import content from './test.js';
import CodeEditor from '@/components/code-editor';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false,
});

export default {
    components: {
        CodeEditor,
    },

    data() {
        return {
            // md,
            content,
            configJSON: '',
        }
    },

    computed: {
        compiledMarkdown() {
            return marked(this.content);
        },
    },
};
</script>
