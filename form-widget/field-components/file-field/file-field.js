import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import Component from 'can-component';
import CanEvent from 'can-event';
import ajax from 'can-util/dom/ajax/ajax';

import template from './file-field.stache!';

/**
 * @constructor form-widget/field-components/file-field.ViewModel ViewModel
 * @parent form-widget/field-components/file-field
 * @group form-widget/field-components/file-field.ViewModel.props Properties
 *
 * @description A `<file-field />` component's ViewModel
 */
export const ViewModel = DefineMap.extend('FileField', {
    properties: DefineMap,
    currentFiles: {
        get: function initCurrentFiles (val, set) {
            if (!val) {
                if (this.value) {
                    val = new DefineList().concat(this.value.split(',').filter(function (file) {
                        return file !== '';
                    }));
                } else {
                    val = new DefineList();
                }
            }

            set(val);
            return val;
        }
    },
    state: {
        value: {
            isResolved: true
        }
    },
    progress: {
        type: 'number',
        value: 100
    },
    onChange (element) {
        if (element.files) {
            if (!this.properties.multiple && this.currentFiles.length) {
                this.removeFile(this.currentFiles[0]).then(() => {
                    this.uploadFiles(element.files);
                });
            } else {
                this.uploadFiles(element.files);
            }
        }
    },
    uploadFiles (files) {
        var data = new FormData();
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            data.append(i, files.item(i));
        }
        this.state = ajax({
            url: this.properties.url,
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: this.uploadSuccess.bind(this),
            error: this.uploadError.bind(this)
        });
    },
    uploadSuccess (data) {
        if (typeof data.error === 'undefined') {
            this.currentFiles = this.currentFiles.concat(data.uploads);
            this.updateValue();
        } else {
      // Handle errors here
            console.warn('ERRORS: ', data.error);
        }
    },
    updateValue () {
        if (this.currentFiles.length) {
            this.value = this.currentFiles.join(',');
        } else {
            this.value = '';
        }
        this.dispatch('change', [this.value]);
    },
    uploadError (response, textStatus, errorThrown) {
    // Handle errors here
        console.warn('ERRORS: ', response, textStatus, errorThrown);
    // STOP LOADING SPINNER
    },
    removeFile (file) {
        this.state = ajax({
            url: this.properties.url,
            type: 'DELETE',
            data: {
                file: file
            },
            success: this.removeSuccess.bind(this, file),
            error: this.removeError.bind(this, file)
        });
        return this.state;
    },
    removeSuccess (file) {
        this.currentFiles.splice(this.currentFiles.indexOf(file), 1);
        this.updateValue();
    },
    removeError (file, response) {
        if (response.status === 404) {
      //file doesn't exist, remove it from this widget
            this.removeSuccess(file, response);
        }
        console.warn('Error: ', response);
    }
});

Object.assign(ViewModel.prototype, CanEvent);

Component.extend({
    tag: 'file-field',
    view: template,
    ViewModel: ViewModel
});
