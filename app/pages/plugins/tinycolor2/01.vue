<style lang="less" scoped>
</style>

<template>
    <main>
        <input
            v-model="color"
            type="text"
            @blur="validateTransparency"
        >
    </main>
</template>

<script>
import Tinycolor2 from 'tinycolor2';

export default {
    data() {
        return {
            color: '',
        }
    },

    methods: {
        validateTransparency() {
            const { color } = this;
            const alpha = Tinycolor2(color).getAlpha();

            console.log(`%c alpha: ${alpha}`, 'color: green;');
        },
    },
};
</script>
