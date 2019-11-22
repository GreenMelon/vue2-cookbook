/**
 * routes
 */

const NotFound = () => import('../pages/404');
const Index = () => import('../pages/index');

const Events = () => import('../pages/events/index');
const Dblclick = () => import('../pages/events/dblclick');

const Components = () => import('../pages/components/index');
const Components01 = () => import('../pages/components/01/parent');
const Confirm = () => import('../pages/components/dialog/confirm');
const Test01 = () => import('../pages/components/test/01');
const Test02 = () => import('../pages/components/test/02');

const Plugins = () => import('../pages/plugins/index');
const Brace01 = () => import('../pages/plugins/brace/01');
const Handsontable01 = () => import('../pages/plugins/handsontable/01');
const Handsontable02 = () => import('../pages/plugins/handsontable/02');
const Handsontable03 = () => import('../pages/plugins/handsontable/03');
const Handsontable04 = () => import('../pages/plugins/handsontable/04');
const VueHandsontable01 = () => import('../pages/plugins/vue-handsontable/01');
const VueHandsontable02 = () => import('../pages/plugins/vue-handsontable/02');
const VueHandsontable03 = () => import('../pages/plugins/vue-handsontable/03');
const PsdToTemplet01 = () => import('../pages/plugins/psd-to-templet/01');
const PsdToTemplet02 = () => import('../pages/plugins/psd-to-templet/02');
const PsdToTemplet03 = () => import('../pages/plugins/psd-to-templet/03');
const PsdToTemplet04 = () => import('../pages/plugins/psd-to-templet/04');
const PsdToTemplet05 = () => import('../pages/plugins/psd-to-templet/05');
const VuePosterEditor01 = () => import('../pages/plugins/vue-poster-editor/background-layer');
const VuePosterEditor02 = () => import('../pages/plugins/vue-poster-editor/background-shot');
const VuePosterEditor03 = () => import('../pages/plugins/vue-poster-editor/background-image');
const VuePosterEditor04 = () => import('../pages/plugins/vue-poster-editor/mask');
const Qrcode01 = () => import('../pages/plugins/qrcode/01');
const Qrcode02 = () => import('../pages/plugins/qrcode/02');
const Tinycolor01 = () => import('../pages/plugins/tinycolor2/01');
const Screenshot01 = () => import('../pages/plugins/screenshot/01');
const Marked = () => import('../pages/plugins/marked/index');
const Jimp = () => import('../pages/plugins/jimp/index');

const Instances = () => import('../pages/instances/index');
const Rasterizehtml01 = () => import('../pages/instances/rasterizehtml/01');
const Rasterizehtml02 = () => import('../pages/instances/rasterizehtml/02');
const Rasterizehtml03 = () => import('../pages/instances/rasterizehtml/03');
const Submit = () => import('../pages/instances/form/submit');
const Formdata = () => import('../pages/instances/form/formdata');
const ImageFile = () => import('../pages/instances/form/image-file');

const Test = () => import('../pages/test/index');
const Clipboard01 = () => import('../pages/test/clipboard/01');
const Filereader01 = () => import('../pages/test/filereader/image');
const ScrollTop01 = () => import('../pages/test/scroll-top/01');
const Other01 = () => import('../pages/test/other/01');

export default [
    {
        path: '/',
        redirect: '/index',
    },{
        path: '/index',
        component: Index
    },

    {
        path: '/events',
        component: Events
    },{
        path: '/events/dblclick',
        component: Dblclick
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
    },{
        path: '/components/test/01',
        component: Test01
    },{
        path: '/components/test/02',
        component: Test02
    },

    {
        path: '/plugins',
        component: Plugins
    },{
        path: '/plugins/brace/01',
        component: Brace01
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
        path: '/plugins/qrcode/02',
        component: Qrcode02,
    },{
        path: '/plugins/tinycolor2/01',
        component: Tinycolor01,
    },{
        path: '/plugins/screenshot/01',
        component: Screenshot01
    },{
        path: '/plugins/marked',
        component: Marked
    },{
        path: '/plugins/jimp',
        component: Jimp
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
        path: '/test',
        component: Test
    },{
        path: '/test/clipboard/01',
        component: Clipboard01
    },{
        path: '/test/filereader/image',
        component: Filereader01
    },{
        path: '/test/scroll-top/01',
        component: ScrollTop01
    },{
        path: '/test/other/01',
        component: Other01
    },

    {
        path: '*',
        component: NotFound
    },
];
