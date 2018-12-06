/**
 * routes
 */

import NotFound from '../pages/404';
import Index from '../pages/index';

import Events from '../pages/events/index';
import Dblclick from '../pages/events/dblclick';

import Components from '../pages/components/index';
import Components01 from '../pages/components/01/parent';

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
import VuePosterEditor01 from '../pages/plugins/vue-poster-editor/background-layer';
import Qrcode01 from '../pages/plugins/qrcode/01';

import Instances from '../pages/instances/index';
import Rasterizehtml01 from '../pages/instances/rasterizehtml/01';
import Rasterizehtml02 from '../pages/instances/rasterizehtml/02';
import Rasterizehtml03 from '../pages/instances/rasterizehtml/03';
import Submit from '../pages/instances/form/submit';
import Formdata from '../pages/instances/form/formdata';
import ImageFile from '../pages/instances/form/image-file';

import Rxjs from '../pages/rxjs/index';
import RxjsIntroduction01 from '../pages/rxjs/introduction/01';
import RxjsObservable01 from '../pages/rxjs/observable/01';
import RxjsObservable02 from '../pages/rxjs/observable/02';
import RxjsObservable03 from '../pages/rxjs/observable/03';
import RxjsObserver01 from '../pages/rxjs/observer/01';
import RxjsSubscription01 from '../pages/rxjs/subscription/01';
import RxjsOperatorOf from '../pages/rxjs/operator/of';
import RxjsOperatorTake from '../pages/rxjs/operator/take';
import RxjsOperatorTakeUntil from '../pages/rxjs/operator/take-until';

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
        path: '/plugins/vue-poster-editor/background-layer',
        component: VuePosterEditor01,
    },{
        path: '/plugins/qrcode/01',
        component: Qrcode01,
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
        path: '/rxjs',
        component: Rxjs
    },{
        path: '/rxjs/introduction/01',
        component: RxjsIntroduction01
    },{
        path: '/rxjs/observable/01',
        component: RxjsObservable01
    },{
        path: '/rxjs/observable/02',
        component: RxjsObservable02
    },{
        path: '/rxjs/observable/03',
        component: RxjsObservable03
    },{
        path: '/rxjs/observer/01',
        component: RxjsObserver01
    },{
        path: '/rxjs/subscription/01',
        component: RxjsSubscription01
    },{
        path: '/rxjs/operator/of',
        component: RxjsOperatorOf
    },{
        path: '/rxjs/operator/take',
        component: RxjsOperatorTake
    },{
        path: '/rxjs/operator/take-until',
        component: RxjsOperatorTakeUntil
    },

    {
        path: '*',
        component: NotFound
    }

];
