
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const img = new RegExp(/.*\.(?:jpg|jpeg|gif|png)/, 'i');

export const FileMap = DefineMap.extend('FileMap', {
    id: 'string',
    uri: 'string',
    isObjectURL: 'boolean',
    progress: 'number'
});

export const FileList = DefineList.extend('FileList', {
    '#': FileMap
});

/**
 * A `<sp-file-list />` component's ViewModel
 * 
 * @class ViewModel
 * @memberof sp-file-list
 */
export default DefineMap.extend('SPFileList', {
    /** @lends sp-file-list.ViewModel.prototype */
    /**
     * A list of file objects
     * @memberof sp-file-list.ViewModel.prototype
     * @type {DefineList}
     */
    files: FileList,
    isDragOver: 'boolean',
    isDropped: 'boolean',
    isMouseOver: 'boolean',
    maxProgressValue: {
        type: 'number',
        default: 100
    },
    el: '*',
    /**
     * Tests a file objects `id` property for image type extension
     * @memberof sp-file-list.ViewModel.prototype
     * @param {FileObject} file The file object
     * @return {Boolean} whether or not the `file.id` name is a file
     */
    isImage (file) {
        return img.test(file.id);
    },
    remove (file) {
        if (file.isObjectURL) {
            window.URL.revokeObjectURL(file.uri);
        }
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
    },
    addFiles (files, ev) {
        if (ev) {
            ev.preventDefault();
        }
        this.isDragOver = false;
        files = Array.from(files).map((file) => {
            const url = window.URL.createObjectURL(file);
            return {
                id: file.name,
                uri: url,
                isObjectURL: true,
                progress: 1
            };
        });
        this.files.replace(this.files.concat(files));
    },
    dragover (ev, isDragOver) {
        ev.preventDefault();
        this.isDragOver = isDragOver;
    },
    mouseover (ev, isMouseOver) {
        ev.preventDefault();
        this.isMouseOver = isMouseOver;
    },
    uploadClick (ev) {
        ev.preventDefault();
        this.el.click();
    },
    showProgress (progressValue) {
        return typeof progressValue !== 'undefined' && progressValue < this.maxProgressValue;
    },
    connectedCallback (el) {
        this.el = el.querySelector('input');
    }
});