/**
 * routes
 */

// const NotFound = () => import('../pages/404');
import NotFound from '../pages/404';
import Index from '../pages/index';

import Events from '../pages/events/index';
import Dblclick from '../pages/events/dblclick';

import Components from '../pages/components/index';
import Components01 from '../pages/components/01/parent';
import Confirm from '../pages/components/dialog/confirm';

import Plugins from '../pages/plugins/index';
import Handsontable01 from '../pages/plugins/handsontable/01';
import Handsontable02 from '../pages/plugins/handsontable/02';
import Handsontable03 from '../pages/plugins/handsontable/03';
import Handsontable04 from '../pages/plugins/handsontable/04';
import VueHandsontable01 from '../pages/plugins/vue-handsontable/01';
import VueHandsontable02 from '../pages/plugins/vue-handsontable/02';
import VueHandsontable03 from '../pages/plugins/vue-handsontable/03';
import PsdToTemplet01 from '../pages/plugins/psd-to-templet/01';
import PsdToTemplet02 from '../pages/plugins/psd-to-templet/02';
import PsdToTemplet03 from '../pages/plugins/psd-to-templet/03';
import PsdToTemplet04 from '../pages/plugins/psd-to-templet/04';
import PsdToTemplet05 from '../pages/plugins/psd-to-templet/05';
import VuePosterEditor01 from '../pages/plugins/vue-poster-editor/background-layer';
import VuePosterEditor02 from '../pages/plugins/vue-poster-editor/background-shot';
import VuePosterEditor03 from '../pages/plugins/vue-poster-editor/background-image';
import VuePosterEditor04 from '../pages/plugins/vue-poster-editor/mask';
import Qrcode01 from '../pages/plugins/qrcode/01';
import Tinycolor01 from '../pages/plugins/tinycolor2/01';

import Instances from '../pages/instances/index';
import Rasterizehtml01 from '../pages/instances/rasterizehtml/01';
import Rasterizehtml02 from '../pages/instances/rasterizehtml/02';
import Rasterizehtml03 from '../pages/instances/rasterizehtml/03';
import Submit from '../pages/instances/form/submit';
import Formdata from '../pages/instances/form/formdata';
import ImageFile from '../pages/instances/form/image-file';

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
    },{
        path: '/components/dialog/confirm',
        component: Confirm
    },

    {
        path: '/events',
        component: Events
    },{
        path: '/events/dblclick',
        component: Dblclick
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
        path: '/plugins/handsontable/03',
        component: Handsontable03
    },{
        path: '/plugins/handsontable/04',
        component: Handsontable04
    },{
        path: '/plugins/vue-handsontable/01',
        component: VueHandsontable01
    },{
        path: '/plugins/vue-handsontable/02',
        component: VueHandsontable02
    },{
        path: '/plugins/vue-handsontable/03',
        component: VueHandsontable03
    },{
        path: '/plugins/psd-to-templet/01',
        component: PsdToTemplet01
    },{
        path: '/plugins/psd-to-templet/02',
        component: PsdToTemplet02
    },{
        path: '/plugins/psd-to-templet/03',
        component: PsdToTemplet03
    },{
        path: '/plugins/psd-to-templet/04',
        component: PsdToTemplet04
    },{
        path: '/plugins/psd-to-templet/05',
        component: PsdToTemplet05
    },{
        path: '/plugins/vue-poster-editor/background-layer',
        component: VuePosterEditor01,
    },{
        path: '/plugins/vue-poster-editor/background-shot',
        component: VuePosterEditor02,
    },{
        path: '/plugins/vue-poster-editor/background-image',
        component: VuePosterEditor03,
    },{
        path: '/plugins/vue-poster-editor/mask',
        component: VuePosterEditor04,
    },{
        path: '/plugins/qrcode/01',
        component: Qrcode01,
    },{
        path: '/plugins/tinycolor2/01',
        component: Tinycolor01,
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
    },{
        path: '/instances/form/submit',
        component: Submit
    },{
        path: '/instances/form/formdata',
        component: Formdata
    },{
        path: '/instances/form/image-file',
        component: ImageFile
    },

    {
        path: '*',
        component: NotFound
    }

];
