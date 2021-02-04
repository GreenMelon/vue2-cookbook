<template>
    <main>
        <button @click="handleClick">click me</button>
    </main>
</template>

<script>
export default {
    methods: {
        handleClick() {
            const options = {
                title: '提示',
                message: '提示内容',
            };

            this.$dialog(options).then((res) => {
                console.log(111, res);
            });
        },
    },
};
</script>
