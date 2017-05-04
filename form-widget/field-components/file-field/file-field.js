import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import CanEvent from 'can-event';
import assign from 'object-assign';
import dev from 'can-util/js/dev/dev';

import './file-field.less';
import template from './file-field.stache!';

const FileMap = DefineMap.extend({
    path: 'string',
    removing: 'boolean'
});

/**
 * @constructor form-widget/field-components/file-field.ViewModel ViewModel
 * @parent form-widget/field-components/file-field
 * @group form-widget/field-components/file-field.ViewModel.props Properties
 *
 * @description A `<file-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('FileField', {
    /**
     * @prototype
     */
    /**
     * Form field properties that define this fields behavior
     * @property {Object} file-field.ViewModel.props.properties properties
     * @parent file-field.ViewModel.props
     */
    properties: {Value: DefineMap},
    /**
     * A list of potential upload errors.
     * This is a placeholder for future functionality. Not yet implemented.
     * @property {Array<String>} file-field.ViewModel.props.errors errors
     * @parent file-field.ViewModel.props
     */
    errors: {
        Value: DefineMap
    },
    /**
     * The current value of the field. This is a comma separated list of file
     * paths.
     * @property {String} file-field.ViewModel.props.value value
     * @parent file-field.ViewModel.props
     */
    value: {
        type: 'string',
        value: ''
    },
    /**
     * A list of current files stored in this field. This is initialized
     * as a list of items created splitting the comma separated list of files
     * provided to the `value`.
     *
     * It is then manipulated by pushing and splicing uploaded and deleted items.
     * @property {Object}
     */
    currentFiles: {
        get (val) {
            // create a new list and initialize it with the list of files
            if (!val) {
                val = this.currentFiles = new DefineList(this.value.split(',').filter((file) => {
                    return file !== '';
                }).map((file) => {
                    return new FileMap({
                        path: file,
                        removing: false
                    });
                }));

                // when the list changes, update the value
                val.on('add', this.updateValue.bind(this));
                val.on('remove', this.updateValue.bind(this));
            }
            return val;
        }
    },
    /**
     * The current state of any pending file uploads
     * @property {Promise} file-field.ViewModel.props.state state
     * @parent file-field.ViewModel.props
     */
    state: {
        value: {
            isResolved: true
        }
    },
    /**
     * The current progress of a set of file uploads.
     * This is not currently implemented and is a placeholder for
     * potential future enhancements.
     * @property {Number} file-field.ViewModel.props.progress progress
     * @parent file-field.ViewModel.props
     */
    progress: {
        type: 'number',
        value: 100
    },
    /**
     * Called when the element's value is changed. This automatically triggers
     * the existing files to be deleted if multiple uploads are not allowed and
     * a file upload via post to the viewmodel's url with one or many files.
     * @function onChange
     * @signature
     * @param {DomElement} element the file input element
     */
    onChange (element) {
        if (element.files) {
            if (!this.properties.multiple && this.currentFiles.length) {
                this.removeFile(this.currentFiles[0]).then(() => {
                    this.uploadFiles(element.files);
                }).catch((error) => {
                    this.uploadError(error);
                });
            } else {
                this.uploadFiles(element.files);
            }
        }
    },
    /**
     * Uploads an array of files to the viewmodel's url via post
     * @function uploadFiles
     * @signature
     * @param {Array<File>} files the array of files to upload
     */
    uploadFiles (files) {
        this.errors[this.properties.name] = null;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append(i, files.item(i));
        }
        this.state = new Promise((resolve, reject) => {

            const req = new XMLHttpRequest();
            req.open('POST', this.properties.url, true);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    reject(req);
                }
            };
            req.onerror = reject;
            req.send(data);
        }).then(this.uploadSuccess.bind(this))
            .catch(this.uploadError.bind(this));
    },
    /**
     * Called when the upload successfully completes, and adds the uploaded
     * file to the array of current files
     * @function uploadSuccess
     * @signature
     * @param {Object} data the upload data, should contain an `uploads` property
     * which is an array of file paths
     */
    uploadSuccess (data) {
        if (typeof data.error === 'undefined') {
            data.uploads.forEach((upload) => {
                const file = new FileMap({
                    path: upload,
                    removing: false
                });
                this.currentFiles.push(file);
            });
        } else {
            // Handle errors here
            dev.warn('ERRORS: ', data.error);
        }
    },
    /**
     * Updates the value of this field after an upload or delete completes.
     * Dispatches the `change` event with the value of the viewmodel
     * @function updateValue
     */
    updateValue () {
        if (this.currentFiles.length) {
            this.value = this.currentFiles.map((f) => {
                return f.path;
            }).join(',');
        } else {
            this.value = '';
        }
        this.dispatch('fieldchange', [{
            value: this.value,
            name: this.properties.name
        }]);
    },
    /**
     * Called when an error occurs during an upload. Logs an error message
     * when in dev mode
     * @function uploadError
     * @param {Object} response the jquery xhr response object
     * @param {String} textStatus the status text
     * @param {Error} errorThrown the error object
     */
    uploadError (response, textStatus, errorThrown) {
        if (response.status === 413) {
            this.errors[this.properties.name] = 'The uploaded file is too large';
        }
        // Handle errors here
        dev.warn('ERRORS: ', response, textStatus, errorThrown);
        // TODO: STOP LOADING SPINNER
    },
    /**
     * Removes a file from the server by sending a `DELETE` request to the server
     * url.
     * @function removeFile
     * @signature
     * @param {Object} file The file properties and path to delete
     * @return {Promise} the promise resolved when the delete result is complete
     */
    removeFile (file) {
        if (!confirm(`The file at ${file} will be removed. Are you sure you want to do this?`)) {
            return this.state = new Promise((resolve, reject) => {
                reject({message: 'User canceled out of dialog'});
            });
        }
        if (file.removing) {
            return false;
        }
        file.removing = true;
        this.state = new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('DELETE', this.properties.url, true);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText));
                } else {
                    reject(req);
                }
            };
            req.onerror = reject;
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify({file: file.path}));
        }).then(this.removeSuccess.bind(this, file))
            .catch(this.removeError.bind(this, file));
        return this.state;
    },
    /**
     * Called when the remove file is successful, and updates the current files
     * by removing the one that was deleted.
     * @function removeSuccess
     * @signature
     * @param {String} file the file that was removed
     */
    removeSuccess (file) {
        this.currentFiles.splice(this.currentFiles.indexOf(file), 1);
        this.updateValue();
    },
    /**
     * Called if an error occurs deleting the file. If the response is a 404,
     * the file is removed from this viewmodel's field value, otherwise the
     * error is just logged to the console because we're not sure what happened
     * @function removeError
     * @signature
     * @param {String} file The file path that the delete was attempted on
     * @param {Object} response The jquery xhr response object
     */
    removeError (file, response) {
        if (response.status === 404) {
            //file doesn't exist, remove it from this widget
            this.removeSuccess(file, response);
        }
        dev.warn('Error: ', response);
    }
});

assign(ViewModel.prototype, CanEvent);

export default Component.extend({
    tag: 'file-field',
    view: template,
    ViewModel: ViewModel
});
