<template>
    <div
        class="code-editor"
        :style="{
            height: css(height),
            width: css(width),
        }"
    />
</template>

<script>
import $ from 'jquery';
import Promise from 'bluebird';

const BASE_URL = '//cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/';

const loadScript = function loadScript(name) {
    loadScript.caches = loadScript.caches || {};
    const { caches } = loadScript;

    let url = BASE_URL + name;

    if (url.slice(-3) !== '.js') {
        url += '.js';
    }

    if (!caches[url]) {
        $.ajaxSetup({ cache: true });

        caches[url] = new Promise((resolve, reject) => {
            $.getScript(url, resolve, reject);
        });
    }

    return caches[url];
};

export default {
    name: 'CodeEditor',
    props: {
        value: {
            type: String,
            default: '',
        },
        width: {
            type: [Number, String],
        },
        height: {
            type: [Number, String],
            default: 0,
        },
        theme: {
            type: String,
            default: 'chrome',
        },
        lang: {
            type: String,
            default: 'text',
        },
        options: {
            type: Object,
            default: () => ({
                // autoScrollEditorIntoView: true,
                enableEmmet: true,
                fontSize: 14,
            }),
        },
    },
    data() {
        return {
            content: this.value,
        };
    },
    watch: {
        value(val) {
            this.setContent(val);
        },
        content(val) {
            this.$emit('input', val);
            this.$emit('change', val);
        },
    },
    created() {
        this.$nextTick(this.init);
    },
    methods: {
        css(inp) {
            if (/\d+$/.test(inp)) {
                return `${inp}px`;
            }

            return inp;
        },
        loadAce() {
            return loadScript('ace').then(() => window.ace);
        },
        init() {
            return this.loadAce()
                .then((ace) => {
                    const editor = ace.edit(this.$el);

                    // shim
                    editor.$blockScrolling = Infinity;

                    // cache
                    this.cacheEditortor = editor;

                    return editor;
                })
                .tap(() => {
                    const { theme, lang } = this;

                    return Promise.all([
                        loadScript('ext-emmet'),
                        loadScript(`mode-${lang}`),
                        loadScript(`theme-${theme}`),
                    ]);
                })
                .tap((editor) => {
                    const { theme, lang, options } = this;

                    Object.keys(options).forEach((k) => {
                        editor.setOption(k, options[k]);
                    });

                    editor.getSession().setMode(`ace/mode/${lang}`);
                    editor.setTheme(`ace/theme/${theme}`);
                })
                .tap((editor) => {
                    editor.setValue(this.value, 1);

                    editor.on('change', () => {
                        this.content = editor.getValue();
                    });
                })
                .catch((err) => {
                    throw err;
                });
        },
        setContent(val) {
            if (val === this.content) {
                return;
            }

            this.content = val;

            if (this.cacheEditortor) {
                this.cacheEditortor.setValue(val, 1);
            }
        },
    },
};
</script>

<style>
.code-editor {
    width: 100%;
    height: 200px;
    min-height: 200px;
    border: 1px solid #C0CCDA;
    border-radius: 4px;
}
</style>
