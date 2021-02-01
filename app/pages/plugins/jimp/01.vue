<template>
    <main>
        <div>
            <label>
                <span>图片地址：</span>
                <input v-model="url" type="text">
            </label>
            <label>
                <span>背景颜色：</span>
                <input v-model="bgc" type="color" @change="change">
            </label>
        </div>

        <img v-if="result" :src="result" />
    </main>
</template>

<script>
import Jimp from 'jimp';

export default {
    data() {
        return {
            url: 'http://st-gdx.dancf.com/odyssey/200141/17346741/20191121-161730-0bb9.png',
            bgc: '#ffffff',
            result: '',
        };
    },

    mounted() {
        this.handleImage();
    },

    methods: {
        handleImage() {
            const color = parseInt(`${this.bgc.replace('#', '0x')}ff`, 16);

            Jimp.read(this.url, (error, lenna) => {
                if (error) {
                    throw error;
                }

                lenna
                    .background(color)
                    .getBase64(Jimp.MIME_JPEG, (err, src) => {
                        this.result = src;
                });
            });
        },

        change(evt) {
            this.bgc = evt.target.value;
            this.handleImage();
        },
    },
};
</script>

<style lang="less" scoped>
label {
    display: flex;
    flex-direction: column;
    font-size: 20px;
}

label + label {
    margin-top: 10px;
}
</style>
