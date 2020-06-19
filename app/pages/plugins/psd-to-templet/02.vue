<style lang="less" scoped>
</style>

<template>
    <main>
        <h1>测试 PSD 的 category</h1>
        <input
            @change="parsePSD"
            accept=".psd"
            type="file"
        >
    </main>
</template>

<script>
import PsdToTemplet from '@gaoding/psd-to-templet';

export default {
    alias: 'V5.6.25 测试 PSD 的 category',

    methods: {
        parsePSD(ev) {
            const { editor } = this;
            const { files } = ev.srcElement;

            const options = {
                parseSVG: true,
                groupMode: 'tag', // flat tag merge
                defaultTextType: 'block',
                imageQuality: 20,
                imageMaxWidth: 5000,
                imageMaxHeight: 5000,
                onProgress: (data) => {
                    console.log(data);
                },
            };

            PsdToTemplet(files[0], options)
                .then(layouts => {
                    const regBgCate = /^bg/i;
                    const elements = layouts.reduce((elems, layout) => {
                        const bgElements = layout.elems.filter(element => {
                            const { category } = element;
                            return category && regBgCate.test(category);
                        });

                        return elems.concat(bgElements);
                    }, []);

                    console.log({ layouts, elements });
                })
                .catch(err => console.error)
        },
    },
};
</script>
