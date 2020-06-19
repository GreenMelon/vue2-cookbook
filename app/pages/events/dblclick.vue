<style lang="less" scoped>
    h1 {
        color: crimson;
        cursor: pointer;
    }
</style>

<template>
    <main>
        <h1 @dblclick.stop="save">dblclick</h1>
        <h2>{{ count }}</h2>
    </main>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        save() {
            this.count++;
        },
    },
}
</script>
