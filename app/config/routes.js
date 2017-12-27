/**
 * routes
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import Components from '../pages/components/index';
import Components01 from '../pages/components/01/parent';

import Plugins from '../pages/plugins/index';
import Handsontable01 from '../pages/plugins/handsontable/01';
import Handsontable02 from '../pages/plugins/handsontable/02';
import VueHandsontable01 from '../pages/plugins/vue-handsontable/01';
import VueHandsontable02 from '../pages/plugins/vue-handsontable/02';
import VueHandsontable03 from '../pages/plugins/vue-handsontable/03';

import Instances from '../pages/instances/index';
import Rasterizehtml01 from '../pages/instances/rasterizehtml/01';
import Rasterizehtml02 from '../pages/instances/rasterizehtml/02';
import Rasterizehtml03 from '../pages/instances/rasterizehtml/03';

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
        path: '/plugins/handsontable/02',
        component: Handsontable02
    },{
        path: '/plugins/vue-handsontable/01',
        component: VueHandsontable01
    },{
        path: '/plugins/vue-handsontable/02',
        component: VueHandsontable02
    },{
        path: '/plugins/vue-handsontable/03',
        component: VueHandsontable03
    },

    {
        path: '/instances',
        component: Instances
    },{
        path: '/instances/rasterizehtml/01',
        component: Rasterizehtml01
    },{
        path: '/instances/rasterizehtml/02',
        component: Rasterizehtml02
    },{
        path: '/instances/rasterizehtml/03',
        component: Rasterizehtml03
    },

    {
        path: '*',
        component: NotFound
    }

];
