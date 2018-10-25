<style lang="less" scoped>
    ul {
        margin-top: 50px;
    }
    li {
        float: left;
    }
    img {
        width: 100px;
        height: auto;
    }
</style>

<template>
    <main>
        <button>click me</button>
        <input
            id="upload-a"
            type="file"
            multiple="multiple"
            accept="image/png, image/jpeg"
            @change="parseFiles"
        >
        <input
            id="upload-b"
            type="file"
            webkitdirectory
            @change="parseFiles"
        >

        <ul>
            <li
                v-for="(image, index) in images"
                :key="index"
            >
                <img :src="image.url" alt="">
            </li>
        </ul>
    </main>
</template>

<script>
    import Pica from 'pica';

    export default {
        data() {
            return {
                images: [],
                references: [
                    {
                        title: '通过 File API 使用 JavaScript 读取文件',
                        url: 'https://www.html5rocks.com/zh/tutorials/file/dndfiles/',
                    },
                ],
                IMAGE_MAX_WIDTH: 2000,
            }
        },
        methods: {
            getImageFiles(files) {
                files = [...files];

                return files.filter(file => file.type.indexOf('image') !== -1);
            },
            loadImage(file, url, cb) {
                const img = new Image();

                img.onload = () => {
                    const { naturalWidth, naturalHeight } = img;
                    cb(Object.assign(file, {
                        naturalHeight,
                        naturalWidth,
                        url,
                    }));
                };

                img.src = url;
            },
            createFileURL(file, cb) {
                // console.time('createObjectURL');
                const url = URL.createObjectURL(file);
                // console.timeEnd('createObjectURL');

                this.loadImage(file, url, cb);
            },
            readFileAsDataURL(file, cb) {
                console.time('FileReader');

                const reader = new FileReader();
                reader.onload = (e) => {
                    const url = reader.result || e.target.result;
                    this.loadImage(file, url, cb);
                    console.timeEnd('FileReader');
                };

                reader.readAsDataURL(file);
            },
            resizeFiles(files) {
                const { IMAGE_MAX_WIDTH } = this;

                const resizeEvents = files.map((file, index) => {
                    const {
                        naturalHeight,
                        naturalWidth,
                        url,
                    } = file;

                    const img = new Image();
                    img.src = url;

                    const promise = new Promise((resolve) => {
                        if (naturalWidth > IMAGE_MAX_WIDTH) {
                            const canvas = document.createElement('canvas');
                            const height = (naturalHeight * IMAGE_MAX_WIDTH) / naturalWidth;
                            canvas.width = IMAGE_MAX_WIDTH;
                            canvas.height = height;

                            console.time(`Pica ${index}`);

                            Pica({
                                // features: ['js', 'ww'],
                            })
                            .resize(img, canvas, {
                                unsharpThreshold: 0,
                                unsharpAmount: 50,
                                unsharpRadius: 0.5,
                                alpha: true,
                            })
                            .then(result => {
                                console.timeEnd(`Pica ${index}`);
                                return Pica().toBlob(result, 'image/jpeg', 0.90);
                            })
                            .then(blob => {
                                file.blob = blob;
                                resolve(file);
                                // console.timeEnd(`Pica ${index}`);
                            });
                        } else {
                            resolve(file);
                        };
                    });

                    return promise;
                });

                return Promise.all(resizeEvents)
                    .then(res => {
                        return this.renderImages(res);
                    });
            },
            renderImages(files) {
                this.images = files.map(({ url }) => {
                    return {
                        url,
                    };
                });
            },
            initFormControlStatus(evt) {
                evt.target.value = '';
            },
            parseFiles(evt) {
                const files = this.getImageFiles(evt.target.files);

                const readFileEvents = files.map(file => {
                    const promise = new Promise((resolve) => {
                        // 方法一
                        this.createFileURL(file, resolve);

                        // 方法二（Vue更新组件会卡UI）
                        // this.readFileAsDataURL(file, resolve);
                    });

                    return promise;
                });

                return Promise.all(readFileEvents)
                    .then(res => {
                        return this.resizeFiles(res);
                    });

                this.initFormControlStatus(evt);
            },
        },
        mounted() {},
    }
</script>
