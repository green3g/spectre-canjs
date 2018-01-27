import Component from 'can-component';
import canEvent from 'can-event';
import DefineList from 'can-define/list/';
import DefineMap from 'can-define/map/';
import './sp-dropzone-field.less';
import view from './sp-dropzone-field.stache';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import 'dropzone/dist/basic.css';
import axios from 'axios';
import Field from 'spectre-canjs/util/field/Field';

const FileMap = DefineMap.extend('File', {seal: false}, {
    isDeleting: 'boolean',
    id: 'string',
    uri: 'string'
});
const FileMapList = DefineList.extend('FileList', {
    '#': FileMap
});

export const ViewModel = Field.extend('DropZoneField', {
    value: {Value: FileMapList, Type: FileMapList},
    dropzone: '*',
    url: {type: 'string', value: '/api/uploads'},
    paramName: {type: 'string', value: 'uri'},
    headers: {type: '*', value () { 
        return {
            Authorization: localStorage['feathers-jwt'],
            withCredentials: true
        };
    }},
    createDropzone (element) {
        this.dropzone = new Dropzone(element, {
            url: this.url,
            paramName: 'uri',
            params: {id: 12345},
            headers: this.headers
        });

        this.dropzone.on('success', (file, result) => {
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
        });

        this.dropzone.on('complete', (file) => {
            setTimeout(() => {
                this.dropzone.removeFile(file);
            }, 2000);
        });
    },
    delete (file) {
        file.isDeleting = true;
        axios.delete(this.url + '/' + file.id, {
            headers: this.headers
        }).then(() => {
            // remove the file from our store on successful delete
            this.value.splice(this.value.indexOf(file), 1);
            this.dispatch('fieldchange', [this]);
        }).catch((e) => {
            // if status is a 404, the file wasn't found anyways, so we 
            // should remove it from the store and perhaps log a warning
            if (e.request.status === 404) {
                this.value.splice(this.value.indexOf(file), 1);
            }
        });
    }
});

Object.assign(ViewModel.prototype, canEvent);

export default Component.extend({
    tag: 'sp-dropzone-field',
    ViewModel,
    view
});
