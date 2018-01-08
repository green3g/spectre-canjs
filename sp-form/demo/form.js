import 'spectre-canjs/sp-form/sp-form';
import 'spectre-canjs/sp-form/fields/sp-text-field/sp-text-field';
import 'spectre-canjs/sp-form/fields/sp-select-field/sp-select-field';
import 'spectre-canjs/sp-form/fields/sp-file-field/sp-file-field';
import 'spectre-canjs/sp-form/fields/sp-subform-field/sp-subform-field';
import 'spectre-canjs/sp-form/fields/sp-check-field/sp-check-field';
import fixture from 'can-fixture';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import dev from 'can-util/js/dev/dev';
import jsonMarkup from 'json-pretty-html';
import {FileList} from '../fields/sp-file-field/ViewModel';

// import jquery ui functionality for datepicker
import 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';
import './full.less';

// this example uses fixtures to catch requests and simulate
// file upload experience
fixture.delay = 2000;
fixture({
    method: 'POST',
    url: '/upload'
}, function (request, response, headers, ajaxSettings) {
    try {
        const files = Array.from(request.data.entries()).map(file => {
            return `path/to/webserver/${file[1].name}`;
        })
        return {
            uploads: files
        };
    }  catch(e){
        dev.warn(e);
    }
    return {
        uploads: ['/path/to/file/fake_upload_filename']
    };
});

fixture({
    method: 'DELETE',
    url: '/upload'
}, function () {
    return {
        result: 'Success'
    };
});


const ChildObject = DefineMap.extend('ChildDemoObject', {
    json_field_1: 'string',
    json_field_2: {
        validate (props) {
            return props.value != 2 ? 'The value must be 2' : undefined;
        },
        value: 2,
        fieldTag: 'sp-select-field',
        defaultLabel: 'These values are loading asynchronously!',
        //async load options
        optionsPromise: new Promise(resolve => {
            setTimeout(() => {
                resolve([{
                    value: 1,
                    label: 'Option 1'
                }, {
                    value: 2,
                    label: 'Option 2'
                }]);
            }, 5000);
        })
    },
    json_field_3: {
        type: 'number',
        validate (props) {
            const value = parseInt(props.value, 10) ;
            return !value || value < 10 ? 'Please enter a value greater than 10' : undefined;
        }
    },
    json_field_4: {
        type: 'boolean',
        fieldTag: 'sp-check-field',
        style: 'switch',
        validate(props){
            console.log(props.value);
            return props.value ? '' : 'You must agree to these terms'
        }
    }
});


const DemoObject = DefineMap.extend('DemoObject', {
    field1: {type: 'string', value: 'test-value'},
    field2: 'string',
    field3: 'number',
    field4: {
        type: 'date', 
        serialize(date){
            return date ? date.toDateString() : 'Not set';
        }
    },
    field5: {
        Type: FileList,
        Value: FileList,

        // convert file list type back to list
        serialize (val) {
            if(!val){
                return '';
            }
            return val.map(file => {
                return file.name;
            }).join(',')
        }
    },
    field6: ChildObject,
    field1Length: 'number',
    field7: 'boolean'
});

const fields = [{
    name: 'field1',
    validate (props) {

        // since this function is run whenever field1 changes, we can use 
        // it to set additional properties
        // set an additional prop in the dirty to track additional data
        // this field is defined in the Model, but not a field so its not editable
        props.dirty.assign({
            field1Length: props.value ? props.value.length: 0
        });

        //return an error message if the length is < 50 chars
        return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;
    }
}, {
    value: 'another value',
    name: 'field2',
    alias: 'A basic textarea field',
    textarea: true,
    placeholder: 'Enter the text: hello',
    validate (props) {
        if (props.value != 'hello') {
            return 'This field must contain the text, "hello"';
        }
        return '';
    }
}, {
    value: 1,
    name: 'field3',
    alias: 'A select dropdown',
    fieldTag: 'sp-select-field',
    validate(props){
        if (props.value != 1) {
            return 'This field must be 1';
        }
    },
    options: [{
        value: 1,
        label: 'Option 1'
    }, {
        value: 2,
        label: 'Option 2'
    }]
}, {
    name: 'field4',
    alias: 'A date field',
    ui: 'datepicker'
}, {
    name: 'field5',
    alias: 'A file field',
    multiple: true,
    fieldTag: 'sp-file-field',
    url: '/upload'
}, {
    name: 'field6',
    alias: 'A Subform Field',
    fieldTag: 'sp-subform-field',
    type: 'string',
    value: '',
    ObjectTemplate: ChildObject
}, {
    name: 'field7',
    alias: 'A checkbox',
    fieldTag: 'sp-check-field',
    value: false
    
}];

const render = stache.from('demo-html');

const vm = new DefineMap({
    object: new DemoObject(),
    fields: fields,
    formSaving: false,
    onSubmit () {
        console.log(this.object);
        console.log('submitted data: ', this.object.serialize());
        alert('Form submitted! See the console for details');
        setTimeout(() => {
            this.formSaving = false;
        }, 3000)
    },
    onCancel () {
        console.log('Form canceled!');
    },
    stringify (obj) {
        console.log(obj)
        if (!obj) {
            return; 
        }
        return jsonMarkup(obj.serialize());
    }
});

const frag = render(vm);

document.body.appendChild(frag);

window.DEMO_SOURCE = `
import 'spectre-canjs/sp-form/sp-form';
import 'spectre-canjs/sp-form/fields/sp-text-field/sp-text-field';
import 'spectre-canjs/sp-form/fields/sp-select-field/sp-select-field';
import 'spectre-canjs/sp-form/fields/sp-file-field/sp-file-field';
import 'spectre-canjs/sp-form/fields/sp-subform-field/sp-subform-field';
import 'spectre-canjs/sp-form/fields/sp-check-field/sp-check-field';
import fixture from 'can-fixture';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';
import dev from 'can-util/js/dev/dev';

// import jquery ui functionality for datepicker
import 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';

// this example uses fixtures to catch requests and simulate
// file upload experience
fixture.delay = 2000;
fixture({
    method: 'POST',
    url: '/upload'
}, function (request, response, headers, ajaxSettings) {
    try {
        const files = Array.from(request.data.entries()).map(file => {
            return path/to/webserver/file[1].name;
        })
        return {
            uploads: files
        };
    }  catch(e){
        dev.warn(e);
    }
    return {
        uploads: ['/path/to/file/fake_upload_filename']
    };
});

fixture({
    method: 'DELETE',
    url: '/upload'
}, function () {
    return {
        result: 'Success'
    };
});


const ChildObject = DefineMap.extend({
    json_field_1: 'string',
    json_field_2: {
        validate (props) {
            return props.value != 2 ? 'The value must be 2' : undefined;
        },
        value: 2,
        fieldTag: 'sp-select-field',
        options: [{
            value: 1,
            label: 'Option 1'
        }, {
            value: 2,
            label: 'Option 2'
        }]
    },
    json_field_3: {
        type: 'number',
        validate (props) {
            const value = parseInt(props.value, 10) ;
            return !value || value < 10 ? 'Please enter a value greater than 10' : undefined;
        }
    },
    json_field_4: {
        type: 'boolean',
        fieldTag: 'sp-check-field',
        style: 'switch',
        validate(props){
            console.log(props.value);
            return props.value ? '' : 'You must agree to these terms'
        }
    }
});


const Template = DefineMap.extend({
    field1: {type: 'string', value: 'test-value'},
    field2: 'string',
    field3: 'number',
    field4: {
        type: 'date', 
        value: new Date('2010-10-11')
    },
    field5: {

        // convert a string value to a file list type 
        set (val) {
            if (!val) {
                return []; 
            }
            if (typeof val === 'string') {
                return val.split(',').map((file) => {
                    const spl = file.split('/');
                    return {
                        path: file,
                        name: spl[spl.length - 1]
                    };
                });
            }
            return val;
        },

        // convert file list type back to list
        serialize (val) {

            return val ? val.map((obj) => {
                return obj.path;
            }).join(',') : '';
        }
    },
    field6: ChildObject,
    field1Length: 'number',
    field7: 'boolean'
});

const fields = [{
    name: 'field1',
    validate (props) {

        // set an additional prop in the dirty to track additional data
        // this field is defined in the Model, but not a field so its not editable
        props.dirty.assign({
            field1Length: props.value ? props.value.length: 0
        });

        //return an error message if the length is < 50 chars
        return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;
    }
}, {
    value: 'another value',
    name: 'field2',
    alias: 'A basic textarea field',
    textarea: true,
    placeholder: 'Enter the text: hello',
    validate (props) {
        if (props.value != 'hello') {
            return 'This field must contain the text, "hello"';
        }
        return '';
    }
}, {
    value: 1,
    name: 'field3',
    alias: 'A select dropdown',
    fieldTag: 'sp-select-field',
    validate(props){
        if (props.value != 1) {
            return 'This field must be 1';
        }
    },
    options: [{
        value: 1,
        label: 'Option 1'
    }, {
        value: 2,
        label: 'Option 2'
    }]
}, {
    name: 'field4',
    alias: 'A date field',
    ui: 'datepicker'
}, {
    name: 'field5',
    alias: 'A file field',
    multiple: true,
    fieldTag: 'sp-file-field',
    url: '/upload'
}, {
    name: 'field6',
    alias: 'A Subform Field',
    fieldTag: 'sp-subform-field',
    type: 'string',
    value: '',
    ObjectTemplate: ChildObject
}, {
    name: 'field7',
    alias: 'A checkbox',
    fieldTag: 'sp-check-field',
    value: false
    
}];

const render = stache.from('demo-html');

const vm = new DefineMap({
    object: new Template(),
    fields: fields,
    formSaving: false,
    // actions: [{
    //     label: 'Submit',
    //     iconClass: 'fa fa-plus',
    //     buttonClass: 'btn btn-primary',
    //     eventName: 'submit'
    // }, {
    //     label: 'Cancel and log message',
    //     eventName: 'cancel'
    // }],
    onChange () {
        console.log(arguments);
    },
    onSubmit () {
        console.log('submitted data: ', this.object.serialize());
        alert('Form submitted! See the console for details');
        setTimeout(() => {
            this.formSaving = false;
        }, 1000)
    },
    onCancel () {
        console.log('Form canceled!');
    },
    stringify (obj) {
        if (!obj) {
            return; 
        }
        return JSON.stringify(obj.serialize());
    }
});

const frag = render(vm);

document.body.appendChild(frag);
`;
