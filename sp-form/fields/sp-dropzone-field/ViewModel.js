import Dropzone from 'dropzone';
import axios from 'axios';
import Field from 'spectre-canjs/util/field/Field';
import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';

/**
 * The dropzone library object
 * See {@link http://www.dropzonejs.com/}
 * @typedef {Object} Dropzone
 */

/**
 * File type for dropzone field and file list 
 * @class File
 * @memberof sp-dropzone-field
 */
const FileMap = DefineMap.extend('File', {seal: false}, {
    /** @lends sp-dropzone-field.File.prototype */
    /**
     * Whether or not this file is being processed for deletion
     * @type {Boolean}
     * @memberof sp-dropzone-field.File.prototype
     */
    isDeleting: 'boolean',
    /**
     * The ID (filename) for this file 
     * @type {String}
     * @memberof sp-dropzone-field.File.prototype
     */
    id: 'string',
    /**
     * The data uri or url for this file 
     * @type {String}
     * @memberof sp-dropzone-field.File.prototype
     */
    uri: 'string'
});
const FileMapList = DefineList.extend('FileList', {
    '#': FileMap
});

/**
 * The `<sp-dropzone-field />` component viewmodel 
 * @class ViewModel
 * @extends Field
 * @memberof sp-dropzone-field
 */
export default Field.extend('DropZoneField', {
    /** @lends sp-dropzone-field.ViewModel.prototype */
    
    /**
     * @type {Array<FileMap>}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The current array of files
     */
    value: {Default: FileMapList, Type: FileMapList},
    /**
     * @type {Dropzone}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The dropzone library object. 
     * @see {@link http://www.dropzonejs.com/|Dropzone}
     */
    dropzone: '*',
    /**
     * @type {Array<FileMap>}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The current array of files
     */
    url: {type: 'string', default: '/api/uploads'},
    /**
     * @type {Array<FileMap>}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The current array of files
     */
    paramName: {type: 'string', default: 'uri'},
    /**
     * @type {Array<FileMap>}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The current array of files
     */
    headers: {
        type: '*', 
        default () { 
            return {
            // Authorization: localStorage['feathers-jwt'],
            // withCredentials: true
            };
        }
    },
    /**
     * @type {Number}
     * @memberof sp-dropzone-field.ViewModel.prototype
     * @description The timout to automatically remove files from the dropzone container
     * after successful uploads. Set to 0 to never remove
     */
    timeout: {
        type: 'number',
        default: 2000
    },
    /**
     * Initializes the dropzone
     * @param {Element} element the element to initialize dropzone on
     */
    createDropzone (element) {
        this.dropzone = new Dropzone(element, {
            url: this.url,
            paramName: 'uri',
            params: {id: 12345},
            headers: this.headers
        });

        this.dropzone.on('success', this.uploadSuccess.bind(this));
        this.dropzone.on('complete', this.clearUploadedFile.bind(this));
    },
    /**
     * 
     * When the upload succeeds, the 'fieldchange' event is dispached
     * @param {FileMap} file The uploaded file
     * @param {*} result The result json from the rest service
     */
    uploadSuccess (file, result) {
        if (typeof result === 'string') {
            try {
                result = JSON.parse(result);
            } catch (e) {
                result = {
                    id: result,
                    uri: result
                };
            }
        }
        this.value.push(result);
        this.dispatch('fieldchange', [this]);
    },
    /**
     * Removes the uploaded file after a set time
     * @param {FileMap} file the file to remove
     */
    clearUploadedFile (file) {
        if (this.timeout) {
            setTimeout(() => {
                this.dropzone.removeFile(file);
            }, this.timeout); 
        }
    },
    /**
     * 
     * Sends a DELETE request to the api endpoint to remove the file using Axios
     * @param {FileMap} file The file to delete
     * @returns {Promise<AxiosResult>}
     */
    delete (file) {
        file.isDeleting = true;
        
        // eslint-disable-next-line
        //!steal-remove-start
        // eslint-disable-next-line
        console.warn('deleting file using url', this.url, file.id);
        // eslint-disable-next-line
        //!steal-remove-end

        return axios.delete(this.url + '/' + file.id, {
            headers: this.headers
        }).then((result) => {
            // remove the file from our store on successful delete
            this.value.splice(this.value.indexOf(file), 1);
            this.dispatch('fieldchange', [this]);
            return result;
        }).catch((e) => {
            // if status is a 404, the file wasn't found anyways, so we 
            // should remove it from the store and perhaps log a warning
            if (e.request && e.request.status === 404) {
                this.value.splice(this.value.indexOf(file), 1);
            }
            // !steal-remove-start
            // eslint-disable-next-line
            console.warn('error occurred when deleting file', file, e);
            // !steal-remove-end
        });
    }
});