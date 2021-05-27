<template>
    <main>
        <h1>Index</h1>
        <div>
            <div>
                <img :src="preview1" alt="">
            </div>
            <div>
                <img :src="preview2" alt="">
            </div>
            <div>
                <img src="~images/blue-sky.jpg" alt="">
            </div>
        </div>
    </main>
</template>

<script>
import preview2 from '@/images/blue-sky.jpg';

export default {
    data() {
        return {
            preview1: require('../images/blue-sky.jpg'),
            preview2: preview2,
        }
    },
    mounted() {
        console.log('mounted', this.$router);
    },
}
</script>

<style scoped>
div {
    display: flex;
}
div + div {
    margin-left: 20px;
}
img {
    width: 100%;
    height: auto;
}
</style>
