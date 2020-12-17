<template>
    <main>
        <input
            type="file"
            @change="readData"
        >
    </main>
</template>

<script>
import XLSX from 'xlsx';

const KEY_MAP = {
    '宝贝ID': 'id',
    '商家编码': 'sku',
    '短标题': 'title',
    '推荐理由1': 'reason1',
    '推荐理由2': 'reason2',
    '推荐理由3': 'reason3',
    '推荐理由4': 'reason4',
    '推荐理由5': 'reason5',
};

export default {
    alias: '读取 excel',

    data() {
        return {};
    },

    methods: {
        readFile(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = e => {
                    const { result } = e.target;
                    const workbook = XLSX.read(result, { type: 'binary' });
                    resolve(workbook);
                };
                reader.readAsBinaryString(file);
            });
        },

        readData(evt) {
            const [file] = evt.target.files;
            return this.readFile(file).then(workbook => {
                console.log(workbook);
                const { SheetNames, Sheets } = workbook;
                const worksheet = Sheets[SheetNames[0]];
                const json = XLSX.utils.sheet_to_json(worksheet);
                console.log(json);

                const keyMap = {};
                const data = [];
                json.forEach((item, index) => {
                    const keys = Object.keys(item);
                    if (index === 0) {
                        keys.forEach(k => {
                            const value = item[k];
                            keyMap[k] = KEY_MAP[value];
                        });
                    } else {
                        const newItem = keys.reduce((i, k) => {
                            i[keyMap[k]] = item[k];
                            return i;
                        }, {});
                        data.push(newItem);
                    }
                });

                console.log(data, keyMap);
            });
        },
    },
};
</script>
