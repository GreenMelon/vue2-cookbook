<style lang="less" scoped>
h1 {
    font-family: cursive;
    font-size: 36px;
    line-height: 2;
    color: #007dd4;
}
</style>

<template>
    <main>
        <h1>菜瓜 caigua</h1>
        <div id="img-container">
            <img
                :src="src"
                :width="width"
                crossOrigin="anonymous"
                alt=""
            >
        </div>

        <img
            src="~images/blue-sky.jpg"
            :width="width"
            alt=""
        >

        <button @click="generatePDF">click me</button>
    </main>
</template>

<script>
import Html2canvas from 'html2canvas';
import JsPdf from 'jspdf';

export default {
    data() {
        return {
            src: 'https://st-gdx.dancf.com/templets/81644/shots/20190314-103646-KnCO4.png',
            width: 100,
        }
    },

    mounted() {
        // this.addOuterImage();
    },

    methods: {
        addOuterImage() {
            const container = document.getElementById('img-container');
            const img = new Image();

            img.setAttribute('crossOrigin', 'anonymous');
            img.src = this.src;
            img.width = this.width;

            img.onload = () => {
                container.appendChild(img);
            }
        },

        generatePDF() {
            const app = document.getElementById('app');

            // 文档: https://html2canvas.hertzen.com/configuration
            Html2canvas(app, {
                useCORS: true,
                onclone: (document) => {
                    // eg. hide some elements
                },
            })
            .then(canvas => {
                const imageData = canvas.toDataURL('image/png');
                const pdf = new JsPdf();
                pdf.addImage(imageData, 'JPEG', 0, 0);
                pdf.save('caigua.pdf');
            });
        },
    },
};
</script>
