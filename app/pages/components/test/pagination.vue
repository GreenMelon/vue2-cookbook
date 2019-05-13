<template>
    <div>
        <button @click="$emit('prev')">上一页</button>
        <span>{{ current }} / {{ total }}</span>
        <button @click="$emit('next')">下一页</button>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },

    props: {
        total: {
            type: Number,
        },
        current: {
            type: Number,
        },
    },

    methods: {},

    mounted() {},
};
</script>

<style lang="less" scoped>
</style>
