import ViewModel from './ViewModel';
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
    expect(vm.fieldOptions.length).toEqual(fields.length);
});

test('addFilter()', () => {
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter([null, filter]);
    expect(vm.filters.length).toEqual(1);
});

test('removeFilter()', () => {
    const filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
    vm.addFilter([null, filter]);
    vm.removeFilter([null, filter]);
    expect(vm.filters.length).toEqual(0);
});

test('removeFilters()', () => {
    vm.filters = [new Filter(), new Filter()];
    vm.removeFilters();
    expect(vm.filters.length).toBeFalsy();
});
