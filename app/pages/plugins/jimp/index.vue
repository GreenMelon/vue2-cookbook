<template>
    <main>
    </main>
</template>

<script>
import Jimp from 'jimp';

export default {
    mounted() {
        const url = 'http://st-gdx.dancf.com/odyssey/200141/17346741/20191121-161730-0bb9.png';
        this.handleImage(url);
    },

    methods: {
        handleImage(url) {
            Jimp.read(url, (err, lenna) => {
                if (err) throw err;
                lenna
                    .background(0xFFFFFFFF)
                    .getBase64(Jimp.MIME_JPEG, (err, src) => {
                        const img = document.createElement('img');
                        img.setAttribute('src', src);
                        this.$el.appendChild(img);
                });
            });
        },
    },
};
</script>
