import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Store from './store';
import routes from './config/routes';
import filters from './filters/index';
import directives from './directives/index';
import './utils/log';

Vue.use(VueRouter);
Vue.config.debug = true;

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
