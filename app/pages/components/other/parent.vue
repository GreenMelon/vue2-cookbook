<style lang="less" scoped>
    h1 {
        margin: 30px 0 10px;
    }
    .parent {
        padding: 20px;
        background-color: #7fffd4;
    }
</style>

<template>
    <main>
        <h1>sync</h1>
        <div class="parent">
            <child
                ref="child"
                :x.sync="a"
                :y.sync="b"
                :subfix="subfixA">
            </child>
        </div>

        <h1>loash debounce</h1>
        <input type="text" v-model="b">
        <button @click="doStuff(false)" type="button">click me</button>
        <p>{{ b | subfix('px') }}</p>
    </main>
</template>

<script>
import './ignore-child';

export default {
    data() {
        return {
            a: 1,
            b: '',
            subfixA: 'px',
        }
    },

    mounted() {
        console.log('child', this.$refs);
    },

    methods: {
        doStuff(val) {
            console.log('debounce', val);
        },
    },
};
</script>
