<style lang="less" scoped>
</style>

<template>
    <main>
        <button @click="uploadImage">save</button>
    </main>
</template>

<script>
import { resolve } from 'url';
import { setTimeout } from 'timers';
    export default {
        data() {
            return {
                templateId: 0,
                recordId: 0,
            };
        },

        methods: {
            getTemplateId() {
                return new Promise((resolve, reject) => {
                    if (this.templateId) {
                        resolve();
                    } else {
                        console.log('创建 templateId 中...');
                        setTimeout(() => {
                            console.log('创建成功 templateId ');
                            this.templateId = 1;
                            resolve();
                        }, 2000);
                    }
                });
            },

            async getRecordId() {
                await this.getTemplateId();

                return new Promise((resolve, reject) => {
                    if (this.recordId) {
                        resolve();
                    } else {
                        console.log('创建 recordId 中...');
                        setTimeout(() => {
                            console.log('创建成功 recordId ');
                            this.recordId = 2;
                            resolve();
                        }, 2000);
                    }
                });
            },

            async uploadImage() {
                await this.getRecordId();

                const { templateId, recordId } = this;
                console.log({ templateId, recordId });
            },
        },
    };
</script>
