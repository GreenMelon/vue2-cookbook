import Vue from 'vue';
import { Message, defaultMessage } from './message';

const { dialog } = Message;

Vue.prototype.$dialog = function $dialog(message, options = {}) {
    Message.promise = new Promise((resolve) => {
        options = Object.assign({}, defaultMessage, {
            isShow: true,
            message,
            closeButton: true,
        }, options);

        if (options.buttons && options.buttons.length) { // Button action.
            options.buttons.forEach((button) => {
                const { action } = button;
                button.action = () => {
                    if (typeof action === 'function') {
                        action(button, () => {
                            Message.hide(button.value, resolve);
                        });
                    } else {
                        resolve(action);
                    }
                };
            });
        }

        Object.assign(dialog, options);
    });

    return Message.promise;
};

Vue.prototype.$confirm = function $confirm(message, options) {
    return Vue.prototype.$dialog(message, Object.assign({
        message,
        buttons: [
            {
                text: options.cancelText || '取消',
                value: false,
                action(value, done) {
                    Message.hide(false, done);
                },
            }, {
                text: options.confirmText || '确定',
                value: true,
                action(value, done) {
                    Message.hide(true, done);
                },
            }
        ],
    }, options));
};
