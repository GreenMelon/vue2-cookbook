/**
 * routes
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import Components from '../pages/components/index';
import Components01 from '../pages/components/01/parent';

import Plugins from '../pages/plugins/index';
import Handsontable01 from '../pages/plugins/handsontable/01';
import VueHandsontable01 from '../pages/plugins/vue-handsontable/01';
import VueHandsontable02 from '../pages/plugins/vue-handsontable/02';

export default [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    },

    {
        path: '/components',
        component: Components
    },{
        path: '/components/01',
        component: Components01
    },

    {
        path: '/plugins',
        component: Plugins
    },{
        path: '/plugins/handsontable/01',
        component: Handsontable01
    },{
        path: '/plugins/vue-handsontable/01',
        component: VueHandsontable01
    },{
        path: '/plugins/vue-handsontable/02',
        component: VueHandsontable02
    },

    {
        path: '*',
        component: NotFound
    }

];
