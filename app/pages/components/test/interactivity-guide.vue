<template>
    <div class="interactivity-guide">
        <div
            v-for="i in 3"
            :key="i"
            class="circle"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
            >
                <circle
                    cx="21"
                    cy="21"
                    r="21"
                    :style="{
                        fill,
                    }"
                />
            </svg>
        </div>
        <div class="finger">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
            >
                <path
                    d="M127.27,94.45H127a7.73,7.73,0,0,0-4.09,1.19,7.81,7.81,0,0,0-7.42-5.35,9.28,9.28,0,0,0-4.4,1.19A8,8,0,0,0,99.83,87V70.71a7.82,7.82,0,0,0-7.88-8,8.08,8.08,0,0,0-8.18,8v39.2l-5-4.9c-3.18-3.12-8.79-2.68-11.52,0s-4.55,8-.61,11.89l22.74,22.31a10.51,10.51,0,0,0,1.51,1.18c4.25,3.27,8.94,5.36,18.95,5.36,23,0,25.16-12.19,25.16-27.36V102.48A7.79,7.79,0,0,0,127.27,94.45Z"
                    :style="{
                        fill,
                    }"
                >
                </path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            fill: {
                type: String,
                default: '#fff',
            },
        },
    };
</script>

<style lang="less" scoped>
.interactivity-guide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 42px;
    height: 42px;
    pointer-events: none;
    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
}
.circle {
    position: absolute;
    width: 42px;
    height: 42px;
    opacity: 0;
    animation: circle-scale 1.2s linear 0s infinite;
    &:nth-child(2) {
        animation-delay: .2s;
    }
    &:nth-child(3) {
        animation-delay: .4s;
    }
}
.finger {
    position: absolute;
    top: 0;
    left: -7px;
    width: 60px;
    height: 60px;
    opacity: 0;
    animation: finger-move 1.2s linear 0s infinite;
}

@keyframes circle-scale {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    40% {
        opacity: 0;
        transform: scale(0);
    }
    45% {
        opacity: 0.75;
    }
    90% {
        opacity: 0;
        transform: scale(1);
    }
}

@keyframes finger-move {
    0% {
        opacity: .8;
        transform: translateY(30%);
    }
    20% {
        opacity: .8;
        transform: translateY(0);
    }
    45% {
        opacity: .8;
        transform: translateY(0) scale(.8);
    }
    60% {
        opacity: .8;
    }
    75% {
        opacity: 0;
    }
}
</style>
