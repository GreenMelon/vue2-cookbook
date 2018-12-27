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
                this.$confirm('caigua')
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
