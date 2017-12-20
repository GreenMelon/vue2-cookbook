/**
 * routes
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import ComponentsIndex from '../pages/components/index';
import Components01 from '../pages/components/01/parent';

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
        component: ComponentsIndex
    },{
        path: '/components/01',
        component: Components01
    },

    {
        path: '*',
        component: NotFound
    }

];
