<style lang="less" scoped>
.parent {
    height: 300px;
    overflow: auto;
    background-color: #000;
}
.child {
    height: 3000px;
}
</style>

<template>
    <main>
        <div class="parent" id="div">
            <div class="child"></div>
        </div>
        <button @click="smoothScrollToTop">滚动至顶部</button>
    </main>
</template>

<script>
import $ from 'jquery';
export default {
    alias: '滚动到顶部',

    methods: {
        smoothScrollToTop() {
            // jQuery.easing
            $.easing.easeInOutCubic = (x, t, b, c, d) => {
                if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                }
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            };
            $('#div').animate({
                scrollTop: 0
            }, 1000, 'easeInOutCubic', () => {
                console.log(2);
            });
        }
    },
};
</script>
