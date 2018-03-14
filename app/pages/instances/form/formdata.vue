<style scoped>
    [type="file"] {
        display: none;
    }
</style>

<template>
    <main>
        <input
            @change="uploadFile"
            id="file"
            type="file"
        >
        <button
            @click="selectFile"
            id="btn"
            type="button">upload
        </button>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                fileElem: {},
            }
        },
        methods: {
            getFileElem() {
                this.fileElem = document.querySelector('#file');
            },
            selectFile() {
                // 调取系统选择图片的弹框
                this.fileElem.click();
            },
            uploadFile(event) {
                const file = event.target.files[0];
                const formData = new FormData();
                formData.set('filename', file);
                formData.set('name', 'cai');
                formData.append('name', 'gua');  // { name: ['cai', 'gua'] }

                const xhr = new XMLHttpRequest();
                xhr.open('post', 'http://v.juhe.cn/postcode/query', true);
                // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                xhr.send(formData);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        alert('success');
                    }
                }
            },
        },
        mounted() {
            this.getFileElem();
        },
    }
</script>
