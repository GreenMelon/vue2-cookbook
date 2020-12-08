<template>
    <main>
        <image-shadow
            :src="this.srcs[0]"
            :width="280"
        />
        <image-shadow
            :src="this.srcs[1]"
            :width="280"
            :shadow-radius="20"
            shadow-hover
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            srcs: [
                'https://github.com/image-tool/react-image-shadow/blob/main/image/blue.jpg?raw=true',
                'https://github.com/image-tool/react-image-shadow/blob/main/image/white.jpg?raw=true',
            ],
        };
    },
};
</script>

<style lang="less" scoped>
main {
    /deep/ .vue-image-shadow {
        display: inline-block;
    }
    /deep/ .vue-image-shadow + .vue-image-shadow {
        margin-left: 40px;
    }
}
</style>
