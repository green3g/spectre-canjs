import 'spectre-canjs/form-widget/form-widget';
import 'spectre-canjs/form-widget/field-components/text-field/';
import 'spectre-canjs/form-widget/field-components/select-field/';
import 'spectre-canjs/form-widget/field-components/file-field/';
import 'spectre-canjs/form-widget/field-components/json-field/';
import 'spectre-canjs/form-widget/field-components/subform-field/';
import 'spectre-canjs/form-widget/field-components/date-field/';
import fixture from 'can-fixture';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

//this example uses fixtures to catch requests and simulate
//file upload experience
fixture.delay = 2000;
fixture({
    method: 'POST',
    url: '/upload'
}, function(request, response, headers, ajaxSettings) {
    return {
        uploads: ['fake_upload_filename']
    };
});

fixture({
    method: 'DELETE',
    url: '/upload'
}, function() {
    return {
        result: 'Success'
    };
});


const ChildObject = DefineMap.extend({
    json_field_1: 'string',
    json_field_2: {
        validate(props){
          return props.value != 2 ? 'The value must be 2' : undefined;
        },
        value: 2,
        fieldType: 'select',
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
        validate(props) {
            return props.value < 10 ? 'Please enter a value greater than 10' : undefined;
        }
    }
})


const Template = DefineMap.extend({
    field1: { type: 'string', value: 'test-value' },
    field2: 'string',
    field3: 'number',
    field4: 'date',
    field5: 'string',
    field6: ChildObject
});

const fields = [{
        name: 'field1',
        validate(props) {
            console.log(props);
            return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;
        }
    },
    {
        value: 'another value',
        name: 'field2',
        alias: 'A basic textarea field',
        type: 'text',
        textarea: true,
        placeholder: 'Enter the text: "hello"',
        validate(props) {
            if (props.value !== 'hello') {
                return 'This field must contain the text, "hello"';
            }
            return false;
        }
    }, {
        value: 1,
        name: 'field3',
        alias: 'A select dropdown',
        fieldType: 'select',
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
        fieldType: 'date',
        value: new Date('2010-10-11')
    }, {
        name: 'field5',
        alias: 'A file field',
        multiple: true,
        fieldType: 'file',
        url: '/upload'
    }, {
        name: 'field6',
        alias: 'A Subform Field',
        fieldType: 'subform',
        type: 'string',
        value: '',
        ObjectTemplate: ChildObject
    }
]

const render = stache.from('demo-html');

const vm = new DefineMap({
    formObject: new Template(),
    fields: fields,
    onChange() {
        console.log(arguments);
    },
    onSubmit() {
        alert('Form submitted! See the console for details');
        console.log('submitted data: ', this.formObject.serialize())
    },
    onCancel() {
        console.log('Form canceled!');
    },
    stringify() {
        return JSON.stringify(this.formObject.serialize());
    }
});

const frag = render(vm);

document.body.appendChild(frag);

window.DEMO_SOURCE = `
import 'spectre-canjs/form-widget/form-widget';
import 'spectre-canjs/form-widget/field-components/text-field/';
import 'spectre-canjs/form-widget/field-components/select-field/';
import 'spectre-canjs/form-widget/field-components/file-field/';
import 'spectre-canjs/form-widget/field-components/json-field/';
import 'spectre-canjs/form-widget/field-components/subform-field/';
import 'spectre-canjs/form-widget/field-components/date-field/';
import fixture from 'can-fixture';
import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

//this example uses fixtures to catch requests and simulate
//file upload experience
fixture.delay = 2000;
fixture({
    method: 'POST',
    url: '/upload'
}, function(request, response, headers, ajaxSettings) {
    return {
        uploads: ['fake_upload_filename']
    };
});

fixture({
    method: 'DELETE',
    url: '/upload'
}, function() {
    return {
        result: 'Success'
    };
});


const ChildObject = DefineMap.extend({
    json_field_1: 'string',
    json_field_2: {
        validate(props){
          return props.value != 2 ? 'The value must be 2' : undefined;
        },
        value: 2,
        fieldType: 'select',
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
        validate(props) {
            return props.value < 10 ? 'Please enter a value greater than 10' : undefined;
        }
    }
})


const Template = DefineMap.extend({
    field1: { type: 'string', value: 'test-value' },
    field2: 'string',
    field3: 'number',
    field4: 'date',
    field5: 'string',
    field6: ChildObject
});

const fields = [{
        name: 'field1',
        validate(props) {
            console.log(props);
            return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;
        }
    },
    {
        value: 'another value',
        name: 'field2',
        alias: 'A basic textarea field',
        type: 'text',
        textarea: true,
        placeholder: 'Enter the text: "hello"',
        validate(props) {
            if (props.value !== 'hello') {
                return 'This field must contain the text, "hello"';
            }
            return false;
        }
    }, {
        value: 1,
        name: 'field3',
        alias: 'A select dropdown',
        fieldType: 'select',
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
        fieldType: 'date',
        value: new Date('2010-10-11')
    }, {
        name: 'field5',
        alias: 'A file field',
        multiple: true,
        fieldType: 'file',
        url: '/upload'
    }, {
        name: 'field6',
        alias: 'A Subform Field',
        fieldType: 'subform',
        type: 'string',
        value: '',
        ObjectTemplate: ChildObject
    }
]

const render = stache.from('demo-html');

const vm = new DefineMap({
    formObject: new Template(),
    fields: fields,
    onChange() {
        console.log(arguments);
    },
    onSubmit() {
        alert('Form submitted! See the console for details');
        console.log('submitted data: ', this.formObject.serialize())
    },
    onCancel() {
        console.log('Form canceled!');
    },
    stringify() {
        return JSON.stringify(this.formObject.serialize());
    }
});

const frag = render(vm);

document.body.appendChild(frag);
`;
