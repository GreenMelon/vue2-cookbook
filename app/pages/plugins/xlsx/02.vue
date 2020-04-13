<template>
    <main>
        <input
            type="file"
            @change="readFile"
        >
    </main>
</template>

<script>
import XLSX from 'xlsx';

export default {
    data() {
        return {}
    },

    mounted() {},

    methods: {
        readFile(evt) {
            const { fixedData } = this;
            const [file] = evt.target.files;
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                const data = e.target.result;
                const wb = XLSX.read(btoa(fixedData(data)), { type: 'base64' }); // 将数据转化为二进制
                console.log(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
            };
        },

        // 文件流转 BinaryString
        fixedData(data) {
            let o = '';
            let l = 0;
            const w = 10240;
            for (; l < data.byteLength / w; ++l) {
                o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w,
                l * w + w)));
            }
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        },
    },
};
</script>
