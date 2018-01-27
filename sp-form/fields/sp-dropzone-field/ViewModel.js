import Dropzone from 'dropzone';
import axios from 'axios';
import Field from 'spectre-canjs/util/field/Field';
import DefineList from 'can-define/list/list';
import DefineMap from 'can-define/map/map';
import canEvent from 'can-event';
import get from 'can-util/js/get/get';

// !steal-remove-start
import dev from 'can-util/js/dev/dev';
// !steal-remove-end

const FileMap = DefineMap.extend('File', {seal: false}, {
    isDeleting: 'boolean',
    id: 'string',
    uri: 'string'
});
const FileMapList = DefineList.extend('FileList', {
    '#': FileMap
});

const ViewModel = Field.extend('DropZoneField', {
    value: {Value: FileMapList, Type: FileMapList},
    dropzone: '*',
    url: {type: 'string', value: '/api/uploads'},
    paramName: {type: 'string', value: 'uri'},
    headers: {type: '*', value () { 
        return {
            // Authorization: localStorage['feathers-jwt'],
            // withCredentials: true
        };
    }},
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
    clearUploadedFile (file) {
        setTimeout(() => {
            this.dropzone.removeFile(file);
        }, 2000);
    },
    delete (file) {
        file.isDeleting = true;
        
        // !steal-remove-start
        dev.warn('deleting file using url', this.url, file.id);
        // !steal-remove-end

        return axios.delete(this.url + '/' + file.id, {
            headers: this.headers
        }).then(() => {
            // remove the file from our store on successful delete
            this.value.splice(this.value.indexOf(file), 1);
            this.dispatch('fieldchange', [this]);
        }).catch((e) => {
            // if status is a 404, the file wasn't found anyways, so we 
            // should remove it from the store and perhaps log a warning
            if (get(e, 'request.status') === 404) {
                this.value.splice(this.value.indexOf(file), 1);
            }
            // !steal-remove-start
            dev.warn('error occurred when deleting file', file, e);
            // !steal-remove-end
        });
    }
});

Object.assign(ViewModel.prototype, canEvent);
export default ViewModel;