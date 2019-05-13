<template>
    <main>
        <pagination
            :total="total"
            :current="current"
            @prev="prev"
            @next="next"
        />
    </main>
</template>

<script>
import pagination from './pagination';

export default {
    components: {
        pagination,
    },
    data() {
        return {
            total: 12,
            current: 1,
        };
    },

    methods: {
        prev() {
            this.current = Math.max(1, this.current - 1);
        },
        next() {
            this.current = Math.min(this.total, this.current + 1);
        },
    },

    mounted() {},
};
</script>

<style lang="less" scoped>
</style>
