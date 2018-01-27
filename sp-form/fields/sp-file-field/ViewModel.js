import Base from 'spectre-canjs/util/field/Field';
import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import dev from 'can-util/js/dev/dev';

export const FileMap = DefineMap.extend({
    name: {
        get (name) {
            if (name) {
                return name;
            }

            const parts = this.path ? this.path.split('/') : ['File'];
            return parts[parts.length - 1];
        }
    },
    path: 'string',
    removing: 'boolean'
});

export const FileList = DefineList.extend({
    '#': FileMap
});

/**
 * @constructor sp-form/fields/sp-file-field.ViewModel ViewModel
 * @parent sp-form/fields/sp-file-field
 * @group sp-file-field.ViewModel.props Properties
 *
 * @description A `<sp-file-field />` component's ViewModel. <mark>This is experimental!</mark>
 */
export default Base.extend('FileField', {
    /**
     * @prototype
     */
    /**
     * The current field value
     * @property {Object} Field.props.value value
     * @parent Field.props
     */
    value: {
        Type: FileList,
        Value: FileList
    },
    /**
     * The current state of any pending file uploads
     * @property {Promise} sp-file-field.ViewModel.props.state state
     * @parent sp-file-field.ViewModel.props
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
     * @property {Number} sp-file-field.ViewModel.props.progress progress
     * @parent sp-file-field.ViewModel.props
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
            if (!this.multiple && this.value.length) {
                this.removeFile(this.value[0]).then(() => {
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
        this.error = '';
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append(i, files.item(i));
        }
        this.state = new Promise((resolve, reject) => {

            const req = new XMLHttpRequest();
            req.open('POST', this.url, true);
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
                this.value.push(file);
            });
            
            this.dispatch('fieldchange', [this]);
        } else {
            // Handle errors here
            dev.warn('ERRORS: ', data.error);
        }
    },
    /**
     * Called when an error occurs during an upload. Logs an error message
     * when in dev mode
     * @function uploadError
     * @param {Object} response the xhr response object
     * @param {String} textStatus the status text
     * @param {Error} errorThrown the error object
     */
    uploadError (response, textStatus, errorThrown) {
        if (response.status === 413) {
            this.error = 'The uploaded file is too large';
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
        // eslint-disable-next-line
        if (!confirm(`The file at ${file.path} will be removed. Are you sure you want to do this?`)) {
            this.state = new Promise((resolve, reject) => {
                reject({message: 'User canceled out of dialog'});
            });
            return this.state;
        }
        if (file.removing) {
            return false;
        }
        file.removing = true;
        this.state = new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('DELETE', this.url, true);
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
        this.value.splice(this.value.indexOf(file), 1);
        this.dispatch('fieldchange', [{
            value: this.value, 
            name: this.name
        }]);
    },
    /**
     * Called if an error occurs deleting the file. If the response is a 404,
     * the file is removed from this viewmodel's field value, otherwise the
     * error is just logged to the console because we're not sure what happened
     * @function removeError
     * @signature
     * @param {String} file The file path that the delete was attempted on
     * @param {Object} response The xhr response object
     */
    removeError (file, response) {
        if (response.status === 404) {
            // file doesn't exist, remove it from this widget
            this.removeSuccess(file, response);
        }
        dev.warn('Error: ', response);
    }
});