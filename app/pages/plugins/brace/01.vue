<template>
    <main>
        <button @click="importData">导入</button>
        <button @click="exportData">导出</button>

        <div id="brace"></div>
    </main>
</template>

<script>
import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default {
    data() {
        return {
            editor: null,
            users: [{
                name: 'caigua',
                sex: 1,
                favor: ['nba'],
            }],
        }
    },

    mounted() {
        this.init();
    },

    methods: {
        init() {
            this.editor = ace.edit('brace');
            this.editor.getSession().setMode('ace/mode/javascript');
            this.editor.setTheme('ace/theme/monokai');
        },

        importData() {
            const value = JSON.stringify(this.users);
            this.editor.setValue(JSON.stringify(JSON.parse(value), null, '\t'));
        },

        exportData() {
            const data = this.editor.getValue();
            console.log(data);
        }
    },
};
</script>

<style lang="less" scoped>
#brace {
    margin-top: 10px;
    height: 300px;
}
</style>
