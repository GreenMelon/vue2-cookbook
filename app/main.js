import Vue from 'vue';
import VueRouter from 'vue-router';

// import ImageShadow from 'vue-image-shadow';
import Icon from '@caigua/icon';
import Dialog from '@caigua/dialog';

import App from './app.vue';
import Store from './store';
// import routes from './config/routes'; // 手动注入路由
import routes from './config/routes.util'; // 自动生成路由
import filters from './filters/index';
import directives from './directives/index';
import './utils/log';

Vue.use(VueRouter);
Vue.config.debug = true;

// Vue.component('image-shadow', ImageShadow);

Icon.registScript('//at.alicdn.com/t/font_2264946_ecz3z0rdwh.js');
Icon.registAnimation('icon-animation--');
Vue.use(Icon);
Vue.use(Dialog);

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: '#app',
    // 把 store 对象提供给 "store" 选项，这可以把 store 的实例注入所有的子组件
    store: Store,
    template: '<App/>',
    components: { App },
    router,
    filters,
    directives,
});
