<style lang="less" scoped>
</style>

<template>
    <main>
        <button @click="handleClick">click me</button>
    </main>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$confirm('caigua', {
                confirmText: '删除',
            })
                .then(res => {
                    console.log('yes');
                })
                .catch(err => {
                    console.log('no');
                });
        },
    },
};
</script>
