<template>
    <main>
        <span class="pulse">hello, world</span>
    </main>
</template>

<script>
import 'web-animations-js';

export default {
    alias: '01',

    mounted() {
        this.animate();
    },

    methods: {
        animate() {
            const element = document.querySelector('.pulse');
            window.requestAnimationFrame(function() {
                element.animate({
                    opacity: [0.5, 1],
                    color: ['red', 'green', 'blue'],
                    transform: ['scale(0.5)', 'scale(1)'],
                }, {
                    direction: 'alternate',
                    duration: 1500,
                    iterations: Infinity,
                });
            });
        },
    },
};
</script>

<style lang="less" scoped>
.pulse {
    display: inline-block;
    font-size: 24px;
}
</style>
