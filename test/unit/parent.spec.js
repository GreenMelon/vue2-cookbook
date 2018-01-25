/**
 * @file parent.vue 测试用例
 * @author caigua
 */

import Vue from 'vue';

import app from '../../app/pages/test/parent.vue';

describe('test parent.vue', () => {

    it('组件加载后，title 应该是 Hello world', () => {
        // 这里将 app 生成 vue 实例，并使用 $mount() 模拟挂载状态
        const vm = new Vue(app).$mount();
        // 断言组件的 title 是否变为了 'Hello world'
        expect(vm.title).toEqual('Hello world');
    });
});
