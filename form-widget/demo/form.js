//import our form component
import 'form-widget/';

//import our fields that we're using
import 'form-widget/field-components/text-field/';
import 'form-widget/field-components/select-field/';
import 'form-widget/field-components/file-field/';
import 'form-widget/field-components/json-field/';
import 'form-widget/field-components/date-field/';
import {mapToFields} from 'util/field';

//import canjs stuff
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

const Template = DefineMap.extend({
    field1: {
        value: 'test-value',
        name: 'field1',
        validate(val) {
            return val.length < 50 ? 'This field must contain at least 50 characters' : false;
        }
    },
    field2: {
        value: 'another value',
        name: 'field2',
        alias: 'A basic textarea field',
        type: 'text',
        textarea: true,
        placeholder: 'Enter the text: "hello"',
        validate(val) {
            if (val !== 'hello') {
                return 'This field must contain the text, "hello"';
            }
            return false;
        }
    },
    field3: {
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
    },
    field4: {
        name: 'field4',
        alias: 'A date field',
        fieldType: 'date',
        value() {
            var date = new Date('2010-10-11T00:00:00+05:30');
            return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        }
    },
    field5: {
        name: 'field5',
        alias: 'A file field',
        multiple: true,
        fieldType: 'file',
        url: '/upload'
    },
    field6: {
        name: 'field6',
        alias: 'A JSON Field',
        fieldType: 'json',
        type: 'string',
        value: '',
        ObjectTemplate: DefineMap.extend({
            json_field_1: 'string',
            json_field_2: {
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
            json_field_3: 'number'
        })
    }
});

const render = stache(document.getElementById('demo-html').innerHTML);

const frag = render({
    onSubmit: function() {
        alert('Form submitted! See the console for details');
        console.log(arguments);
    },
    formObject: new Template(),
    fields: mapToFields(Template),
    stringify() {
        return JSON.stringify(this.formObject.serialize());
    }
});

document.body.appendChild(frag);
