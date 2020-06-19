<template>
    <main>
        <Title
            :level="1"
            @click.native="onClick"
        >
            caigua
        </Title>
    </main>
</template>

<script>
import Title from './ignore-title';

export default {
    components: {
        Title,
    },

    data() {
        return {
            total: 12,
            current: 1,
        };
    },

    mounted() {},

    methods: {
        onClick() {
            console.log(222);
        },
    },
};
</script>

<style lang="less" scoped>
</style>
