const ContextMenu = {
    items: {
        undo: {
            name: '撤销',
        },
        redo: {
            name: '重做',
        },
        hsep1: '---------',
        row_above: {
            name: '在上面添加行',
        },
        row_below: {
            name: '在下面添加行',
        },
        col_left: {
            name: '在前面添加列',
        },
        col_right: {
            name: '在后面添加列',
        },
        remove_row: {
            name: '删除行',
        },
        remove_col: {
            name: '删除列',
        },
        hsep2: '---------',
        cut: {
            name: '剪切',
        },
        copy: {
            name: '复制',
        },
        paste: {
            name: '粘贴',
        },
    },
    callback() {
        //
    },
};

export default ContextMenu;
