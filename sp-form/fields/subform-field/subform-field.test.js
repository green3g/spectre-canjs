import ViewModel from './ViewModel';
import DefineMap from 'can-define/map/map';
// eslint-disable-next-line
let vm;
const TestObject = DefineMap.extend({
    field1: {value: 'test', type: 'string'},
    field2: 'string'
});

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});


test('jsonobject get()', () => {
    vm.properties = {
        ObjectTemplate: TestObject
    };

    expect(vm.jsonobject.field1).toEqual('test');
});

test('jsonobject get() with value', () => {
    vm.properties = {
        ObjectTemplate: TestObject
    };
    vm.value = '{"field2": "another"}';
    expect(vm.jsonobject.field2).toEqual('another');
});

test('formFields get()', () => {
    vm.properties = {
        ObjectTemplate: TestObject
    };

    expect(vm.formFields.length).toEqual(2);
});

test('formFields get() with field properties', () => {
    vm.properties = {
        fields: ['field1', 'field2', 'field3']
    };

    expect(vm.formFields.length).toEqual(3);
});

test('saveField()', () => {
    const obj = new TestObject({
        field1: 'hey',
        field2: 'there'
    });
    const expected = {
        field1: 'updated',
        field2: 'there'
    };

    vm.jsonobject = obj;

    vm.saveField(null, null, null, {current: obj, name: 'field1', value: 'updated'});
    expect(JSON.parse(vm.value)).toEqual(expected);
});
