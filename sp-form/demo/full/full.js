import 'spectre-canjs/sp-form/sp-form';
import 'spectre-canjs/sp-form/fields/sp-text-field/';
import 'spectre-canjs/sp-form/fields/sp-select-field/';
import 'spectre-canjs/sp-form/fields/sp-dropzone-field/';
import 'spectre-canjs/sp-form/fields/sp-subform-field/';
import 'spectre-canjs/sp-form/fields/sp-check-field/';
import render from './full.stache';
import jsonMarkup from 'json-pretty-html';
import './full.less';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import DefineMap from 'can-define/map/';

// mock a server
import './fixtures.js';

// a child sub-form object
const ChildObject = DefineMap.extend('ChildDemoObject', {
    json_field_1: 'string',
    json_field_2: {
        validate (props) {
            return props.value != 2 ? 'The value must be 2' : undefined;
        },
        default: 2,
        editTag: 'sp-select-field',
        defaultLabel: 'These values are loading asynchronously!',
        // async load options
        optionsPromise: new Promise((resolve) => {
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
            const value = parseInt(props.value, 10);
            return !value || value < 10 ? 'Please enter a value greater than 10' : undefined;
        }
    },
    json_field_4: {
        type: 'boolean',
        editTag: 'sp-check-field',
        style: 'switch',
        serialize (val) {
            return String(val);
        },
        validate (props) {
            console.log(props.value);
            return props.value ? '' : 'You must agree to these terms';
        }
    }
});

const DemoObject = DefineMap.extend('DemoObject', {
    field1: {
        type: 'string', 
        default: 'Default Value',
        name: 'field1',
        alias: 'Please enter at least 50 characters',
        validate (props) {

            // since this function is run whenever field1 changes, we can use 
            // it to set additional properties
            // set an additional prop in the dirty to track additional data
            // this field is defined in the Model, but not a field so its not editable
            props.dirty.assign({
                field1Length: props.value ? props.value.length : 0
            });

            // return an error message if the length is < 50 chars
            return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;
        }
    },
    field2: {
        type: 'string',
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
    },
    field3: {
        type: 'number',
        default: 1,
        name: 'field3',
        alias: 'A select dropdown',
        editTag: 'sp-select-field',
        validate (props) {
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
    },
    field3inline: {
        type: 'number',
        default: 1,
        name: 'field3inline',
        alias: 'Inline dropdown',
        editTag: 'sp-select-field',
        inline: true,
        validate (props) {
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
    },
    field4: {
        type: 'date', 
        serialize (date) {
            return date ? date.toDateString() : 'Not set';
        },
        name: 'field4',
        onInsert (element) {
            const picker = flatpickr(element);
            return function(){
                picker.destroy();
            }
        },
        alias: 'A date field',
        ui: 'datepicker',
        placeholder: 'Enter a date...'
    },
    // field5: {
    //     name: 'field5',
    //     alias: 'A file field',
    //     editTag: 'sp-dropzone-field',
    //     url: '/upload',

    //     // convert file list type back to list
    //     serialize (val) {
    //         if (!val) {
    //             return '';
    //         }
    //         return val.map((file) => {
    //             return file.id;
    //         }).join(',');
    //     }
    // },
    field6: {
        Type: ChildObject,
        name: 'field6',
        alias: 'A Subform Field',
        editTag: 'sp-subform-field',
        Default:  ChildObject,
        ObjectTemplate: ChildObject
    },
    field1Length: {edit: false, type: 'number'},
    field7: {
        type: 'boolean',
        name: 'field7',
        alias: 'A checkbox',
        editTag: 'sp-check-field',
        default: false
    },
    cascade_1: {
        type: 'string',
        name: 'cascade_1',
        alias: 'Car Make - (cascade dropdown 1)',
        defaultLabel: 'First choose a make...',
        options: [{value: 'Ford'}, {value: 'Chevy'}, {value: 'Toyota'}],
        editTag: 'sp-select-field'
    },
    cascade_2: {
        type: 'string',
        name: 'cascade_2',
        alias: 'Car Model - (cascade dropdown 2)',
        defaultLabel: 'Then choose a model...',
        getOptions(obj){
            const options = {
                'Ford': [{value: 'Fiesta'}, {value: 'Focus'}, {value: 'Taurus'}],
                'Chevy': [{value: 'Spark'}, {value: 'Sonic'}, {value: 'Bolt'}],
                'Toyota': [{value: 'Prius'}, {value: 'Corolla'}, {value: 'Camry'}],
            }

            return options[obj.cascade_1] || [{value: 'None', label: 'Choose a make first...'}];
        },
        validate(props){
            if(!props.dirty.cascade_1){
                return 'You need to choose a make first';
            }
        },
        editTag: 'sp-select-field'
    }
});


const vm = new DefineMap({
    object: new DemoObject(), 
    formSaving: false,
    onSubmit () {
        console.log(this.object);
        console.log('submitted data: ', this.object.serialize());
        alert('Form submitted! See the console for details');
        setTimeout(() => {
            this.formSaving = false;
        }, 3000);
    },
    onCancel () {
        console.log('Form canceled!');
    },
    stringify (obj) {
        if (!obj) {
            return; 
        }
        return jsonMarkup(obj.serialize());
    }
});

export default function start () {
    const frag = render(vm);
    document.body.appendChild(frag);
}
