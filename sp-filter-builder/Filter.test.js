import {Filter, FilterOptions} from './Filter';

let filter;

beforeEach(() => {
    filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
});
afterEach(() => {
    filter = null;
});

test('name get()', () => {
    expect(filter.name).toEqual('test');

    filter.field = {
        name: 'hello'
    };
    expect(filter.name).toEqual('hello');
});

test('operatorField get() no field type', () => {
    expect(filter.operatorField.options.length).toEqual(FilterOptions.length);
});

test('operatorField get() with field type', () => {
    filter.field = {
        name: 'test',
        type: 'date'
    };

    expect(filter.operatorField.options.length < FilterOptions.length).toBeTruthy();
});

test('valueField get() no field set', () => {
    expect(filter.valueField.fieldType).toEqual('text');
});

test('valueField get() field is set', () => {
    filter.field = {
        name: 'test'
    };

    expect(filter.valueField.fieldType).toEqual('date');
});

test('alias get()', () => {
    expect(filter.alias).toEqual('Name');
    filter.field = {
        alias: 'Test Alias'
    };

    expect(filter.alias).toEqual('Test Alias');
});

test('object get()', () => {
    expect(filter.object.test).toEqual('test');
});

test('setField(field, dom, scope, val)', () => {
    filter.setField(null, null, null, {value: 'hello'});
    expect(filter.value).toEqual('hello');
});
