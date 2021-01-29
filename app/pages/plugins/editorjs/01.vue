<template>
    <main>
        <div id="editorjs" />
    </main>
</template>

<script>
import EditorJS from '@editorjs/editorjs';

export default {
    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.editor = new EditorJS({
                holder: 'editorjs',
            });
        },
    },
};
</script>

<style lang="less">
#editorjs {
    height: 100%;
    padding-top: 40px;
    font-size: 24px;
    background: url('../../../images/folder.jpeg');
    background-repeat: no-repeat;
    background-position: center -132px;
}
</style>
