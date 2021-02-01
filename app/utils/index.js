export function downloadImage () {
    //
}

export function downloadJSON (content, fileName) {
    const a = document.createElement('a');
    a.download = `${fileName}.json`;
    a.href = `data:text/plain,${JSON.stringify(content, null, 4)}`;
    a.click();
}
