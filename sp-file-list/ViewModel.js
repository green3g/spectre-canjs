
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const img = new RegExp(/.*\.(?:jpg|jpeg|gif|png)/, 'i');

/**
 * A type used throughout the sp-file-list component to represent
 * File types.
 * @class FileMap
 * @memberof sp-file-list
 * @type {DefineMap}
 * @example `import {FileMap} from 'spectre-canjs/sp-file-list/ViewModel';
 */
export const FileMap = DefineMap.extend('FileMap',{seal: false}, {
    /** @lends sp-file-list.FileMap.prototype */
    /**
     * A reference to the File object
     * @memberof sp-file-list.FileMap.prototype
     * @type {File}
     */
    file: '*',
    /**
     * A string to display for the file name
     * @memberof sp-file-list.FileMap.prototype
     * @type {String}
     */
    id: 'string',
    /**
     * A string to use for the file url
     * @memberof sp-file-list.FileMap.prototype
     * @type {String}
     */
    uri: 'string',
    /**
     * Whether or not the url is a global object uri
     * @memberof sp-file-list.FileMap.prototype
     * @type {Boolean}
     */
    isObjectURL: 'boolean',
    /**
     * A (optional) upload progress bar percentage to display to the user
     * @memberof sp-file-list.FileMap.prototype
     * @type {Number}
     */
    progress: 'number'
});

/**
 * A type used throughout the sp-file-list component to represent array of file maps
 * @class FileList
 * @memberof sp-file-list
 * @type {DefineList}
 * @example `import {FileList} from 'spectre-canjs/sp-file-list/ViewModel';
 */
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
     * @type {FileList}
     */
    files: FileList,
    /**
     * Is currently dragging files over
     * @memberof sp-file-list.ViewModel.prototype
     * @type {Boolean}
     */
    isDragOver: 'boolean',
    /**
     * Is mouse currently over the widget?
     * @memberof sp-file-list.ViewModel.prototype
     * @type {Boolean}
     */
    isMouseOver: 'boolean',
    /**
     * Maximum value of progress to display loader
     * @memberof sp-file-list.ViewModel.prototype
     * @type {Number}
     */
    maxProgressValue: {
        type: 'number',
        default: 100
    },
    /**
     * The file input element
     * @memberof sp-file-list.ViewModel.prototype
     * @type {Boolean}
     */
    el: '*',
    /**
     * Tests a file objects `id` property for image type extension
     * @memberof sp-file-list.ViewModel.prototype
     * @param {FileObject} file The file object
     * @return {Boolean} whether or not the `file.id` name is a file
     */
    isImage (filename) {
        return filename && img.test(filename);
    },
    /**
     * Removes an individual file from the list
     * @param {FileMap} file The file to remove from the list
     */
    remove (file) {
        if (file.isObjectURL) {
            window.URL.revokeObjectURL(file.uri);
        }
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.dispatch('remove', [file]);
    },
    /**
     * Adds an array of files to the list
     * @param {Array<FileMap>} files Array of files to add to the list
     * @param {DomEvent} ev (optional) event to cancel default on
     */
    addFiles (files, ev) {
        if (ev) {
            ev.preventDefault();
        }
        this.isDragOver = false;
        files = Array.from(files).map((file) => {
            const url = window.URL.createObjectURL(file);
            return new FileMap({
                file,
                id: file.name,
                uri: url,
                isObjectURL: true
            });
        });
        files.forEach((file) => {
            this.files.push(file);
            this.dispatch('add', [file]);
        });
    },
    /**
     * Sets the `isDragOver` value to something else
     * @param {DomEvent} ev Event to prevent default on 
     * @param {*} isDragOver Whether or not drag over is currently happening
     */
    dragover (ev, isDragOver) {
        ev.preventDefault();
        this.isDragOver = isDragOver;
    },
    /**
     * Sets the `isMouseOver` value to something
     * @param {DomEvent} ev Event to prevent default on
     * @param {Boolean} isMouseOver Whether or not mouse is currently over widget
     */
    mouseover (ev, isMouseOver) {
        ev.preventDefault();
        this.isMouseOver = isMouseOver;
    },
    /**
     * Triggers a click event on the hidden input element
     * @param {DomEvent} ev Event to prevent default on
     */
    uploadClick (ev) {
        ev.preventDefault();
        this.el.click();
    },
    /**
     * Determines whether or not the progress value bar should be shown
     * @param {Number} progressValue Current progress value of file
     * @returns {Boolean}
     */
    showProgress (progressValue) {
        return typeof progressValue !== 'undefined' && progressValue < this.maxProgressValue;
    },
    /**
     * Called when viewmodel is connected to the dom
     * @param {DomElement} el This components root element
     */
    connectedCallback (el) {
        this.el = el.querySelector('input');
    }
});