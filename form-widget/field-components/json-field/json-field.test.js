/* eslint-env qunit, browser */

import q from 'steal-qunit';
import {ViewModel} from './json-field';
import DefineMap from 'can-define/map/map';
//eslint-disable-next-line
let vm;
const TestObject = DefineMap.extend({
    field1: {value: 'test', type: 'string'},
    field2: 'string'
});

q.module('json-field.ViewModel', {
    beforeEach () {
        vm = new ViewModel();
    },
    afterEach () {
        vm = null;
    }
});


test('jsonFormObject get()', (assert) => {
    vm.properties = {
        ObjectTemplate: TestObject
    };

    assert.equal(vm.jsonFormObject.field1, 'test', 'form object should be initialized');
});

test('jsonFormObject get() with value', (assert) => {
    vm.properties = {
        ObjectTemplate: TestObject
    };
    vm.value = '{"field2": "another"}';

    assert.equal(vm.jsonFormObject.field2, 'another', 'form object should have json value');
});

test('formFields get()', (assert) => {
    vm.properties = {
        ObjectTemplate: TestObject
    };

    assert.equal(vm.formFields.length, 2, 'vm should have form fields created from object template');
});

test('formFields get() with field properties', (assert) => {
    vm.properties = {
        fields: ['field1', 'field2', 'field3']
    };

    assert.equal(vm.formFields.length, 3, 'vm should have form fields created from properties');
});

test('saveField()', (assert) => {
    const obj = new TestObject({
        field1: 'hey',
        field2: 'there'
    });
    const expected = {
        field1: 'updated',
        field2: 'there'
    };
    
    vm.saveField(null, null, null, {current: obj, name: 'field1', value: 'updated'});
    assert.deepEqual(JSON.parse(vm.value), expected, 'field value should be set and updated correctly');
});
