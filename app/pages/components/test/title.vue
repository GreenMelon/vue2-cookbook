<script>
    export default {
        name: 'Title',

        props: {
            level: {
                type: Number,
                required: true,
            },
        },

        render(h) {
            return h(`h${this.level}`, {
                class: {
                    a: true,
                },
                style: {
                    fontSize: '24px',
                    color: '#007dd4',
                },
                // 普通的 HTML 特性
                attrs: {
                    id: 1,
                },
                // 组件 prop
                props: {},
                // DOM 属性
                domProps: {
                    // innerHTML: 'caihua',
                },
                on: {
                    click: this.clickHandler,
                },
                nativeOn: {},
            }, [
                h('span', this.$slots.default),
            ]);
        },

        methods: {
            clickHandler() {
                console.log(111);
            },
        },
    };
</script>
