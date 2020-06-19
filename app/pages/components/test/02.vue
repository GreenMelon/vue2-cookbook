<template>
    <main>
        <InteractivityGuide />
    </main>
</template>

<script>
import InteractivityGuide from './ignore-interactivity-guide';

export default {
    components: {
        InteractivityGuide,
    },
};
</script>

<style lang="less" scoped>
main {
    position: relative;
    background: #000;
}
</style>
