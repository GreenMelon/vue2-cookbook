<template>
    <main>
        <button @click="download">download</button>
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
        stringToArrayBuffer(str) {
            const buffer = new ArrayBuffer(str.length);
            const view = new Uint8Array(buffer);

            for (let i = 0; i !== str.length; i += 1) {
                view[i] = str.charCodeAt(i) & 0xFF;
            }

            return buffer;
        },

        aoaToSheet() {
            const aoa = [
                ['name', 'age'],
                ['green', 24],
                ['melon', 24],
            ];
            const sheet = XLSX.utils.aoa_to_sheet(aoa);

            return sheet;
        },

        sheetToBlob(sheet, sheetName = 'test') {
            const options = {
                bookType: 'xlsx',
                bookSST: false,
                type: 'binary',
            };

            const workbook = {
                SheetNames: [sheetName],
                Sheets: {},
            };

            workbook.Sheets[sheetName] = sheet;

            const wb = XLSX.write(workbook, options);
            const blob = new Blob([this.stringToArrayBuffer(wb)], { type: 'application/octet-stream' });

            return blob;
        },

        download() {
            let url = this.sheetToBlob(this.aoaToSheet());

            if (typeof url === 'object' && url instanceof Blob) {
                url = URL.createObjectURL(url);
            }

            let event;
            if (window.MouseEvent) {
                event = new MouseEvent('click');
            } else {
                event = document.createEvent('MouseEvents');
                event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            }

            const a = document.createElement('a');
            a.href = url;
            a.download = 'test.xlsx';
            a.dispatchEvent(event);
        },
    },
};
</script>
