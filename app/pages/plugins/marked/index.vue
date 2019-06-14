<style lang="less" scoped>
</style>

<template>
    <main>
        <div v-html="content"></div>
    </main>
</template>

<script>
    import marked from 'marked';
    const md = require('./test.md');

    export default {
        data() {
            return {
                content: md,
            }
        },
        computed: {
            compiledMarkdown() {
                return marked(this.content, {
                    sanitize: true,
                });
            },
        },
        mounted() {},
    };
</script>
