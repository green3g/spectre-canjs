import ViewModel from './ViewModel';
import DefineMap from 'can-define/map/map';
import {Filter} from './Filter';

var vm;

beforeEach(() => {
    vm = new ViewModel();
});
afterEach(() => {
    vm = null;
});


test('nameField get()', () => {
    expect(vm.nameField.options).toBeFalsy();
    vm.fields = [{
        name: 'one',
        alias: 'One'
    }];
    expect(vm.nameField.options).toBeTruthy();
});

test('fields get()', () => {
    const fields = [{
        name: 'test',
        filter: false
    }, {
        name: 'test2'
    }];
    vm.fields = fields;
    expect(vm.fields.length).toBe(1);
});

test('fieldOptions get() with fields', () => {
    const fields = [{
        name: 'test',
        alias: 'Other'
    }];
    vm.fields = fields;
    expect(vm.fieldOptions.length).toEqual(fields.length + 1);
});

test('fieldOptions get() with ObjectTemplate', () => {
    const Template = DefineMap.extend({
        test1: 'string',
        test2: 'string',
        test3: 'string'
    });
    const len = Object.keys((new Template()).serialize()).length + 1;
    vm.ObjectTemplate = Template;
    expect(vm.fieldOptions.length).toEqual(len);
});

test('addFilter()', () => {
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter(null, null, null, filter);
    expect(vm.filters.length).toEqual(1);
});

test('removeFilter()', () => {
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter(null, null, null, filter);
    vm.removeFilter(null, null, null, filter);
    expect(vm.filters.length).toEqual(0);
});

test('removeFilters()', () => {
    vm.filters = [new Filter(), new Filter()];
    vm.removeFilters();
    expect(vm.filters.length).toBeFalsy();
});
