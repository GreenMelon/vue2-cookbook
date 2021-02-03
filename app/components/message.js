import Vue from 'vue';

export const defaultMessage = {
    isShow: false,
    message: '',
    closeButton: true,
    buttons: [],
};

export const Message = new Vue({
    name: 'message',

    data() {
        return {
            dialog: Object.assign({}, defaultMessage),
        }
    },

    computed: {
        isShow() {
            return this.dialog.isShow;
        },
    },

    watch: {},

    created() {
        this.$nextTick(() => {
            const componet = this.$mount();
            document.body.appendChild(componet.$el, { isShow: this.isShow });
        });
    },

    methods: {
        toggle(val, actionValue) {
            (val ? this.show : this.hide)(actionValue);
        },
        
        hide(actionValue, resolve) {
            if (resolve) {
                resolve(actionValue);
            }
            this.dialog.isShow = false;
        },

        show() {
            this.dialog.isShow = true;
        },
    },

    render(createdElement) {
        return createdElement('div', {
            attrs: {
                class: 'dialog',
            },

            directives: [{
                name: 'show',
                value: this.dialog.isShow,
            }],

            props: Object.assign({}, this.dialog),

            on: {
                'update:isShow': (val) => {
                    this.toggle(val);
                },
            },
        }, [
            createdElement('div', {
                attrs: {
                    class: 'dialog-icon-content',
                },
            }, [
                createdElement('i', {
                    props: {
                        name: this.dialog.icon,
                    },
                }),
                createdElement('div', {
                    domProps: {
                        innerHTML: this.dialog.message,
                    },
                }),
            ]),
        ]);
    },
});
