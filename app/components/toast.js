import Vue from 'vue';

Vue.prototype.$confirm = function $confirm(message) {
    return new Promise((resolve, reject) => {
        const res = confirm(message)
        if (res) {
            resolve()
        } else {
            reject();
        }
    });
};
