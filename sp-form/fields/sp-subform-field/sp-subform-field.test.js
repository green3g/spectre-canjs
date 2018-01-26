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


test('formFields get()', () => {
    vm.properties = {
        Type: TestObject
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

    const expected = new TestObject({
        field1: 'updated',
        field2: 'there'
    });

    vm.value = obj;

    vm.saveField([{event: 'event'}, {dirty: expected}]);
    expect(vm.value.get()).toEqual(expected.get());
});
